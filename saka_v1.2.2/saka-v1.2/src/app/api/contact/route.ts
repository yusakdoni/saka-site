import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactNotification } from "@/lib/email";
import { rateLimit, getClientKey } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const key = getClientKey(req);
    const { allowed } = rateLimit(`contact:${key}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const data = parsed.data;

    // Honeypot: bots fill hidden fields.
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true }); // silently accept, do nothing
    }

    // Time-trap: form submitted too fast to be human.
    if (typeof data.ts === "number" && Date.now() - data.ts < 1500) {
      return NextResponse.json({ ok: true }); // silently accept, do nothing
    }

    await sendContactNotification(data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send your inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
