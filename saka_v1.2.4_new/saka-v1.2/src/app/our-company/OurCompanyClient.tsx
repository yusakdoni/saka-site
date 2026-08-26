"use client";

import { useLang } from "@/components/LanguageProvider";
import ApproachSection from "@/components/ApproachSection";
import CoverArt from "@/components/CoverArt";
import CtaBand from "@/components/CtaBand";

export default function OurCompanyClient() {
  const { t } = useLang();
  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <CoverArt seed="our-company" variant="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-saka-navy/55" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <p className="eyebrow-lg text-white/70">{t.about.eyebrow}</p>
          <h1 className="display-title mt-4 max-w-2xl text-4xl text-white sm:text-5xl">{t.about.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-saka-gray">{t.about.body1}</p>
            <p className="mt-4 text-saka-gray">{t.about.body2}</p>
          </div>
          <div>
            <h2 className="font-head text-sm font-bold uppercase tracking-wide text-saka-navy/60">
              {t.about.valuesTitle}
            </h2>
            <div className="mt-6 space-y-6">
              {t.about.values.map((v, i) => (
                <div key={i} className="hairline pt-6 first:border-none first:pt-0">
                  <p className="index-number">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-head text-base font-bold text-saka-navy">{v.t}</h3>
                  <p className="mt-1 text-sm text-saka-gray">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ApproachSection />

      <section className="container-page pb-16">
        <p className="max-w-3xl text-xs text-saka-gray">{t.about.disclaimer}</p>
      </section>

      <CtaBand />
    </>
  );
}
