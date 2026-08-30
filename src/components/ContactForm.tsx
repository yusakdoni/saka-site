"use client";

import { useRef, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const needTypes = [
  "Sistem ERP",
  "Web Development",
  "Business Intelligence",
  "AI & Automation",
  "System Integration",
  "IT Consulting",
  "Managed IT Services",
  "IT Procurement",
  "Lainnya",
];

const budgetRanges = ["< Rp 25 juta", "Rp 25 juta – Rp 100 juta", "Rp 100 juta – Rp 300 juta", "> Rp 300 juta", "Belum yakin"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formStartRef = useRef<number>(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const elapsedMs = Date.now() - formStartRef.current;
    if (elapsedMs < 2000) {
      setStatus("error");
      setErrorMessage("Pengiriman terlalu cepat terdeteksi. Silakan coba lagi.");
      return;
    }

    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      whatsapp: String(data.get("whatsapp") || ""),
      needType: String(data.get("needType") || ""),
      budget: String(data.get("budget") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
      elapsedMs,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Terjadi kesalahan saat mengirim pesan.");
      }

      setStatus("success");
      form.reset();
      formStartRef.current = Date.now();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim pesan.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl2 border border-line bg-soft p-10 text-center">
        <CheckCircle2 className="text-accent" size={40} />
        <h3 className="text-lg font-semibold text-ink">Pesan Anda telah terkirim</h3>
        <p className="max-w-sm text-sm text-muted">
          Terima kasih. Tim kami akan menghubungi Anda dalam 1–2 hari kerja untuk menjadwalkan konsultasi awal.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-2 text-sm font-medium text-accent hover:underline">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nama Lengkap" htmlFor="name"><input id="name" name="name" type="text" required className="input" placeholder="Nama Anda" /></Field>
        <Field label="Perusahaan" htmlFor="company"><input id="company" name="company" type="text" required className="input" placeholder="Nama perusahaan" /></Field>
        <Field label="Email" htmlFor="email"><input id="email" name="email" type="email" required className="input" placeholder="nama@perusahaan.com" /></Field>
        <Field label="Nomor WhatsApp" htmlFor="whatsapp"><input id="whatsapp" name="whatsapp" type="tel" required className="input" placeholder="08xx-xxxx-xxxx" /></Field>
        <Field label="Jenis Kebutuhan" htmlFor="needType">
          <select id="needType" name="needType" required defaultValue="" className="input">
            <option value="" disabled>Pilih jenis kebutuhan</option>
            {needTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Estimasi Budget" htmlFor="budget">
          <select id="budget" name="budget" defaultValue="" className="input">
            <option value="" disabled>Pilih estimasi budget</option>
            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Pesan / Kebutuhan" htmlFor="message">
        <textarea id="message" name="message" required rows={5} className="input resize-none" placeholder="Ceritakan tantangan bisnis atau kebutuhan sistem Anda" />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt disabled:opacity-60 md:w-auto">
        {status === "loading" ? <><Loader2 size={18} className="animate-spin" />Mengirim...</> : "Kirim Pesan"}
      </button>

      <style jsx>{`
        .input { width: 100%; border-radius: 0.5rem; border: 1px solid #e4e7ec; background: #fff; padding: 0.7rem 0.9rem; font-size: 0.9rem; color: #101828; }
        .input:focus { outline: none; border-color: #1a56db; box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.12); }
      `}</style>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      {children}
    </div>
  );
}
