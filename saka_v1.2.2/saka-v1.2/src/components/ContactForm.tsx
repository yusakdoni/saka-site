"use client";

import { useState, useRef } from "react";
import { useLang } from "./LanguageProvider";
import { services } from "@/content/services";
import { industries } from "@/content/industries";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const mountedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      industry: String(fd.get("industry") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
      ts: mountedAt.current,
      source: "work-with-us",
      lang,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(t.contact.form.error);
    }
  }

  if (status === "success") {
    return (
      <div className="card border-saka-blue/20 bg-saka-blue/5 text-center">
        <p className="font-head text-lg font-bold text-saka-navy">✓</p>
        <p className="mt-2 text-sm text-saka-navy">{t.contact.form.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      {/* Honeypot field — hidden from real users, bots tend to fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">{t.contact.form.name} *</label>
          <input className="field-input" id="name" name="name" required minLength={2} maxLength={120} />
        </div>
        <div>
          <label className="field-label" htmlFor="company">{t.contact.form.company} *</label>
          <input className="field-input" id="company" name="company" required minLength={2} maxLength={160} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="email">{t.contact.form.email} *</label>
          <input className="field-input" id="email" name="email" type="email" required maxLength={160} />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">{t.contact.form.phone} *</label>
          <input className="field-input" id="phone" name="phone" required minLength={6} maxLength={40} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="industry">{t.contact.form.industry}</label>
          <select className="field-input" id="industry" name="industry" defaultValue="">
            <option value="">{t.contact.form.selectPlaceholder}</option>
            {industries.map((i) => (
              <option key={i.slug} value={i.name[lang]}>{i.name[lang]}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="service">{t.contact.form.service}</label>
          <select className="field-input" id="service" name="service" defaultValue="">
            <option value="">{t.contact.form.selectPlaceholder}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name[lang]}>{s.name[lang]}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="message">{t.contact.form.message} *</label>
        <textarea className="field-input" id="message" name="message" rows={4} required minLength={10} maxLength={3000} />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? t.contact.form.submitting : t.contact.form.submit}
      </button>
    </form>
  );
}
