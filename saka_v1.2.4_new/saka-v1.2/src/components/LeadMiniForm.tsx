"use client";

import { useRef, useState } from "react";
import { useLang } from "./LanguageProvider";

export default function LeadMiniForm({ onDone }: { onDone?: () => void }) {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const mountedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      need: String(fd.get("need") || ""),
      website: String(fd.get("website") || ""),
      ts: mountedAt.current,
      source: "ai-assistant",
      lang,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      setStatus("success");
      onDone?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="rounded-lg bg-saka-blue/10 p-3 text-sm text-saka-navy">{t.leadForm.success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2.5 rounded-xl border border-saka-lightgray bg-white p-3">
      <div className="hidden" aria-hidden="true">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm font-semibold text-saka-navy">{t.leadForm.title}</p>
      <input name="name" required placeholder={t.contact.form.name} className="field-input !py-2 text-sm" />
      <input name="company" placeholder={t.contact.form.company} className="field-input !py-2 text-sm" />
      <input name="email" type="email" required placeholder={t.contact.form.email} className="field-input !py-2 text-sm" />
      <input name="phone" required placeholder={t.contact.form.phone} className="field-input !py-2 text-sm" />
      <textarea name="need" rows={2} placeholder={t.contact.form.message} className="field-input !py-2 text-sm" />
      {status === "error" && <p className="text-xs text-red-600">{t.contact.form.error}</p>}
      <button type="submit" className="btn-primary w-full !py-2 text-sm" disabled={status === "submitting"}>
        {status === "submitting" ? t.contact.form.submitting : t.leadForm.submit}
      </button>
    </form>
  );
}
