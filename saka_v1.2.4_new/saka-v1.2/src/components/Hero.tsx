"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import CoverArt from "./CoverArt";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-saka-navy">
      <div className="absolute inset-0">
        <CoverArt seed="home-hero" variant="hero" className="h-full w-full opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-saka-navy via-saka-navy/70 to-saka-navy/30" />
      </div>
      <div className="container-page relative py-24 sm:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow-lg text-white/70">{t.hero.eyebrow}</p>
          <h1 className="display-title mt-5 text-4xl text-white sm:text-6xl">{t.hero.headline}</h1>
          <p className="mt-7 max-w-xl text-lg text-white/75">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/work-with-us" className="btn-primary">
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="btn-secondary border-white/30 bg-transparent text-white hover:border-white hover:text-white"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/50">{t.hero.trust}</p>
        </div>
      </div>
    </section>
  );
}
