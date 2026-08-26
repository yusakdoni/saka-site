import { NextResponse } from "next/server";
import { chatSchema } from "@/lib/validation";
import { getSystemPrompt } from "@/lib/ai-knowledge";
import { rateLimit, getClientKey } from "@/lib/rate-limit";

export const runtime = "nodejs";

const FALLBACK = {
  id: "Maaf, assistant sedang tidak tersedia. Silakan kirim project inquiry melalui form dan kami akan menghubungi Anda.",
  en: "Sorry, the assistant is currently unavailable. Please send a project inquiry through the form and we'll get back to you.",
};

export async function POST(req: Request) {
  const key = getClientKey(req);
  const { allowed } = rateLimit(`chat:${key}`, { limit: 20, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, reply: FALLBACK.id, unavailable: true },
      { status: 429 }
    );
  }

  let lang: "id" | "en" = "id";
  try {
    const body = await req.json();
    const parsed = chatSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, reply: FALLBACK.id, unavailable: true }, { status: 400 });
    }
    lang = parsed.data.lang ?? "id";

    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
    }

    const system = getSystemPrompt(lang);

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system,
        messages: parsed.data.messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!res.ok) {
      console.error("[/api/chat] upstream error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
    }

    const json = await res.json();
    const text: string =
      json?.content?.filter((c: any) => c.type === "text").map((c: any) => c.text).join("\n") ?? "";

    if (!text) {
      return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
    }

    return NextResponse.json({ ok: true, reply: text, unavailable: false });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
  }
}
