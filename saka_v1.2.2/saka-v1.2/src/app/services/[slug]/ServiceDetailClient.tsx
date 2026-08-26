"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import type { Service } from "@/content/services";
import CoverArt from "@/components/CoverArt";
import CtaBand from "@/components/CtaBand";

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { t, lang } = useLang();
  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <CoverArt seed={service.slug} variant="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-saka-navy/55" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <Link href="/services" className="text-sm font-medium text-white/80 hover:text-white">
            ← {t.misc.backToServices}
          </Link>
          <h1 className="display-title mt-6 max-w-2xl text-4xl text-white sm:text-5xl">{service.name[lang]}</h1>
          <p className="mt-5 max-w-xl text-white/80">{service.desc[lang]}</p>
        </div>
      </div>

      <section className="section">
        <div className="container-page max-w-2xl">
          <h2 className="font-head text-xl font-bold text-saka-navy">{t.industries.helpLabel}</h2>
          <ul className="mt-5 space-y-3">
            {service.points[lang].map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-saka-navy">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-saka-blue/10 text-xs font-bold text-saka-blue">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
