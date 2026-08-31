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

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parsePayload(value: unknown): ContactPayload {
  const input = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return {
    name: clean(input.name, 100),
    company: clean(input.company, 120),
    email: clean(input.email, 254),
    whatsapp: clean(input.whatsapp, 40),
    needType: clean(input.needType, 100),
    budget: clean(input.budget, 80),
    message: clean(input.message, 4000),
    website: clean(input.website, 200),
    elapsedMs: typeof input.elapsedMs === "number" && Number.isFinite(input.elapsedMs) ? input.elapsedMs : undefined,
  };
}

function validate(payload: ContactPayload): string | null {
  if (!payload.name) return "Nama wajib diisi.";
  if (!payload.company) return "Nama perusahaan wajib diisi.";
  if (!payload.email || !EMAIL_RE.test(payload.email)) return "Email tidak valid.";
  if (!payload.whatsapp) return "Nomor WhatsApp wajib diisi.";
  if (!payload.needType) return "Jenis kebutuhan wajib dipilih.";
  if (!payload.message || payload.message.length < 10)
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

    const payload = parsePayload(await req.json());

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
    const toEmail = process.env.CONTACT_TO_EMAIL || "contact@sakasolution.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Layanan email belum dikonfigurasi. Silakan hubungi kami langsung melalui WhatsApp." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const safeCompany = payload.company.replace(/[\r\n]+/g, " ");
    const safeNeedType = payload.needType.replace(/[\r\n]+/g, " ");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: payload.email,
      subject: `[Lead Baru] ${safeCompany} — ${safeNeedType}`,
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
