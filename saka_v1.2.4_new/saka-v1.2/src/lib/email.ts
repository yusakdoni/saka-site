import { Resend } from "resend";
import type { ContactInput, LeadInput } from "./validation";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactNotification(data: ContactInput) {
  const resend = getResend();
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.SALES_EMAIL;
  if (!resend || !from || !to) {
    throw new Error("Email service is not configured (missing RESEND_API_KEY / RESEND_FROM_EMAIL / SALES_EMAIL).");
  }

  const timestamp = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  const html = `
    <h2>New Project Inquiry — SAKA Website</h2>
    <p><strong>Received:</strong> ${esc(timestamp)} WIB</p>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${esc(data.name)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${esc(data.company)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(data.email)}</td></tr>
      <tr><td><strong>Phone/WhatsApp</strong></td><td>${esc(data.phone)}</td></tr>
      <tr><td><strong>Industry</strong></td><td>${esc(data.industry || "-")}</td></tr>
      <tr><td><strong>Service</strong></td><td>${esc(data.service || "-")}</td></tr>
      <tr><td><strong>Source page</strong></td><td>${esc(data.source || "-")}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(data.message)}</p>
  `;

  return resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[SAKA Inquiry] ${data.company} — ${data.name}`,
    html,
  });
}

export async function sendLeadNotification(data: LeadInput) {
  const resend = getResend();
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.SALES_EMAIL;
  if (!resend || !from || !to) {
    throw new Error("Email service is not configured (missing RESEND_API_KEY / RESEND_FROM_EMAIL / SALES_EMAIL).");
  }

  const timestamp = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  const html = `
    <h2>New Lead — SAKA AI Assistant</h2>
    <p><strong>Received:</strong> ${esc(timestamp)} WIB</p>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${esc(data.name)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${esc(data.company || "-")}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(data.email)}</td></tr>
      <tr><td><strong>Phone/WhatsApp</strong></td><td>${esc(data.phone)}</td></tr>
      <tr><td><strong>Source</strong></td><td>${esc(data.source || "ai-assistant")}</td></tr>
    </table>
    <p><strong>Project need:</strong></p>
    <p style="white-space:pre-wrap">${esc(data.need)}</p>
  `;

  return resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[SAKA Lead] ${data.name}${data.company ? " — " + data.company : ""}`,
    html,
  });
}
