import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rate-limit";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  needType: string;
  budget: string;
  message: string;
  website?: string;
  elapsedMs?: number;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: ContactPayload): string | null {
  if (!payload.name?.trim()) return "Nama wajib diisi.";
  if (!payload.company?.trim()) return "Nama perusahaan wajib diisi.";
  if (!payload.email?.trim() || !EMAIL_RE.test(payload.email)) return "Email tidak valid.";
  if (!payload.whatsapp?.trim()) return "Nomor WhatsApp wajib diisi.";
  if (!payload.needType?.trim()) return "Jenis kebutuhan wajib dipilih.";
  if (!payload.message?.trim() || payload.message.trim().length < 10)
    return "Pesan terlalu singkat. Mohon jelaskan kebutuhan Anda lebih detail.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Silakan coba lagi dalam beberapa saat." },
        { status: 429 }
      );
    }

    const payload = (await req.json()) as ContactPayload;

    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    if (typeof payload.elapsedMs === "number" && payload.elapsedMs < 2000) {
      return NextResponse.json({ error: "Pengiriman terlalu cepat terdeteksi." }, { status: 400 });
    }

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "sales@sakasolution.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Layanan email belum dikonfigurasi. Silakan hubungi kami langsung melalui WhatsApp." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: payload.email,
      subject: `[Lead Baru] ${payload.company} — ${payload.needType}`,
      text: [
        `Nama: ${payload.name}`,
        `Perusahaan: ${payload.company}`,
        `Email: ${payload.email}`,
        `WhatsApp: ${payload.whatsapp}`,
        `Jenis Kebutuhan: ${payload.needType}`,
        `Estimasi Budget: ${payload.budget || "-"}`,
        "",
        "Pesan:",
        payload.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}
