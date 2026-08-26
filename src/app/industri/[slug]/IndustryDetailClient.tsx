"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import type { Industry } from "@/content/industries";
import IndustryIcon from "@/components/IndustryIcon";
import CtaBand from "@/components/CtaBand";

export default function IndustryDetailClient({ industry }: { industry: Industry }) {
  const { t, lang } = useLang();
  return (
    <>
      <div className="border-b border-black/5 bg-saka-bg pt-10">
        <div className="container-page pb-12">
          <Link href="/industri" className="text-sm font-medium text-saka-blue">
            ← {t.misc.backToIndustries}
          </Link>
          <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-saka-blue/10 text-saka-blue">
            <IndustryIcon name={industry.icon} className="h-6 w-6" />
          </div>
          <h1 className="mt-4 max-w-2xl font-head text-3xl font-bold text-saka-navy sm:text-4xl">
            {industry.name[lang]}
          </h1>
          <p className="mt-4 max-w-xl text-saka-gray">{industry.tagline[lang]}</p>
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
