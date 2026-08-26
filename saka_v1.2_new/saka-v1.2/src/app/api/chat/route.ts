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

    // Google Gemini API (free tier via Google AI Studio — no credit card required).
    // Model: gemini-2.5-flash — good quality/free-quota balance for a low-traffic
    // sales assistant. Swap to "gemini-2.5-flash-lite" if you need a higher free
    // daily request cap and can accept slightly lower quality.
    const model = "gemini-2.5-flash";
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents: parsed.data.messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
          generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
        }),
      }
    );

    if (!res.ok) {
      console.error("[/api/chat] upstream error:", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
    }

    const json = await res.json();
    const text: string =
      json?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).filter(Boolean).join("\n") ?? "";

    if (!text) {
      return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
    }

    return NextResponse.json({ ok: true, reply: text, unavailable: false });
  } catch (err) {
    console.error("[/api/chat] error:", err);
    return NextResponse.json({ ok: true, reply: FALLBACK[lang], unavailable: true });
  }
}
