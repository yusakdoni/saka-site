import { aiAssistantFallbackFaq } from "@/content/faq";
import { services } from "@/content/services";
import { site } from "@/content/site";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Kamu adalah asisten sales SAKA Ananta Solusindo (${site.domain}), perusahaan solusi teknologi bisnis.

Gaya bicara: ramah, profesional, Bahasa Indonesia natural, ringkas, dan membantu.

Layanan yang tersedia: ${services.map((s) => s.title).join(", ")}.

ATURAN KETAT:
- Jangan pernah mengarang hasil proyek, sertifikasi, jumlah klien, atau klaim teknis yang tidak didukung informasi di atas.
- Jangan membuat komitmen kontraktual atau menjanjikan harga pasti sebelum sesi discovery.
- Jika pertanyaan di luar cakupan layanan SAKA, arahkan pengguna untuk menghubungi tim melalui halaman Kontak.
- Jika pengguna menunjukkan minat serius, arahkan mereka untuk mengisi formulir konsultasi di /contact.
- Jawaban singkat, maksimal 3-4 kalimat.`;

export function fallbackReply(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  for (const entry of aiAssistantFallbackFaq) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return entry.answer;
    }
  }

  return "Terima kasih atas pertanyaan Anda. Untuk penjelasan yang lebih tepat sesuai kebutuhan bisnis Anda, silakan lihat halaman Layanan kami atau isi formulir di halaman Kontak agar tim SAKA dapat menghubungi Anda langsung.";
}

export async function getAssistantReply(messages: ChatMessage[]): Promise<{
  reply: string;
  source: "ai" | "fallback";
}> {
  const apiKey = process.env.AI_API_KEY;
  const baseUrl = process.env.AI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.AI_MODEL || "gpt-4o-mini";
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content || "";

  if (!apiKey) {
    return { reply: fallbackReply(lastUserMessage), source: "fallback" };
  }

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 300,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) throw new Error(`AI provider responded with ${res.status}`);

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content?.trim();

    if (!content) throw new Error("Empty AI response");

    return { reply: content, source: "ai" };
  } catch (err) {
    console.error("AI assistant error, using fallback:", err);
    return { reply: fallbackReply(lastUserMessage), source: "fallback" };
  }
}
