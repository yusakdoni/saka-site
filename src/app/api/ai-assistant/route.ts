import { NextRequest, NextResponse } from "next/server";
import { getAssistantReply, type ChatMessage } from "@/lib/ai-assistant";
import { isRateLimited } from "@/lib/rate-limit";

function parseMessages(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((message): message is Record<string, unknown> => Boolean(message) && typeof message === "object")
    .map((message) => ({
      role: message.role === "assistant" ? "assistant" as const : "user" as const,
      content: typeof message.content === "string" ? message.content.trim().slice(0, 2000) : "",
    }))
    .filter((message) => message.content.length > 0)
    .slice(-10);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(`ai:${ip}`)) {
      return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi sesaat lagi." }, { status: 429 });
    }

    const body = await req.json();
    const messages = parseMessages(body?.messages);

    if (messages.length === 0) {
      return NextResponse.json({ error: "Pesan kosong." }, { status: 400 });
    }

    const result = await getAssistantReply(messages);
    return NextResponse.json(result);
  } catch (err) {
    console.error("AI assistant route error:", err);
    return NextResponse.json(
      { reply: "Maaf, terjadi kendala teknis. Silakan hubungi kami melalui halaman Kontak.", source: "fallback" },
      { status: 200 }
    );
  }
}
