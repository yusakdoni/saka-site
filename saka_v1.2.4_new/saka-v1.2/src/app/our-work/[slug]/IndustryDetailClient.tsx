"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import type { Industry } from "@/content/industries";
import IndustryIcon from "@/components/IndustryIcon";
import CoverArt from "@/components/CoverArt";
import CtaBand from "@/components/CtaBand";

export default function IndustryDetailClient({ industry }: { industry: Industry }) {
  const { t, lang } = useLang();
  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <CoverArt seed={industry.slug} variant="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-saka-navy/55" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <Link href="/our-work" className="text-sm font-medium text-white/80 hover:text-white">
            ← {t.misc.backToIndustries}
          </Link>
          <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
            <IndustryIcon name={industry.icon} className="h-6 w-6" />
          </div>
          <h1 className="display-title mt-5 max-w-2xl text-4xl text-white sm:text-5xl">{industry.name[lang]}</h1>
          <p className="mt-5 max-w-xl text-white/80">{industry.tagline[lang]}</p>
        </div>
      </div>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-head text-xl font-bold text-saka-navy">{t.industries.challengesLabel}</h2>
            <ul className="mt-5 space-y-3">
              {industry.challenges[lang].map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-saka-navy">
                  <span className="mt-0.5 h-1.5 w-1.5 flex-none rounded-full bg-saka-gray" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-head text-xl font-bold text-saka-navy">{t.industries.helpLabel}</h2>
            <ul className="mt-5 space-y-3">
              {industry.help[lang].map((h, i) => (
                <li key={i} className="flex gap-3 text-sm text-saka-navy">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-saka-blue/10 text-xs font-bold text-saka-blue">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-saka-lightgray bg-saka-bg p-4 text-xs text-saka-gray">
              {t.industries.diagnosticNote}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
