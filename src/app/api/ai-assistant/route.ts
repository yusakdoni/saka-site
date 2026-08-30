import { NextRequest, NextResponse } from "next/server";
import { getAssistantReply, type ChatMessage } from "@/lib/ai-assistant";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(`ai:${ip}`)) {
      return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi sesaat lagi." }, { status: 429 });
    }

    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];

    if (messages.length === 0) {
      return NextResponse.json({ error: "Pesan kosong." }, { status: 400 });
    }

    const result = await getAssistantReply(messages.slice(-10));
    return NextResponse.json(result);
  } catch (err) {
    console.error("AI assistant route error:", err);
    return NextResponse.json(
      { reply: "Maaf, terjadi kendala teknis. Silakan hubungi kami melalui halaman Kontak.", source: "fallback" },
      { status: 200 }
    );
  }
}
