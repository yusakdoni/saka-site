"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-saka-bg to-white">
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-head text-4xl font-extrabold leading-tight text-saka-navy sm:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-saka-gray">{t.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontak" className="btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <Link href="/layanan" className="btn-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-saka-gray/80">{t.hero.trust}</p>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-saka-blue/10 blur-3xl"
      />
    </section>
  );
}
