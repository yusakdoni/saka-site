import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { sendLeadNotification } from "@/lib/email";
import { rateLimit, getClientKey } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const key = getClientKey(req);
    const { allowed } = rateLimit(`lead:${key}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!allowed) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const data = parsed.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ ok: true });
    }
    if (typeof data.ts === "number" && Date.now() - data.ts < 1000) {
      return NextResponse.json({ ok: true });
    }

    await sendLeadNotification(data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/lead] error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try again or use the contact form." },
      { status: 500 }
    );
  }
}
