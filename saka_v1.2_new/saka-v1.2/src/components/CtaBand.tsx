"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";

export default function CtaBand() {
  const { t } = useLang();
  return (
    <section className="bg-saka-navy">
      <div className="container-page flex flex-col items-center gap-5 py-16 text-center">
        <h2 className="max-w-xl font-head text-2xl font-bold text-white sm:text-3xl">{t.contact.title}</h2>
        <p className="max-w-lg text-sm text-white/70">{t.contact.sub}</p>
        <Link href="/kontak" className="btn-primary bg-white text-saka-navy hover:bg-white/90">
          {t.nav.cta}
        </Link>
      </div>
    </section>
  );
}
