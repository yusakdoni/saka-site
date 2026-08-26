"use client";

import { useLang } from "@/components/LanguageProvider";
import CoverArt from "@/components/CoverArt";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function ClientImpactClient() {
  const { t } = useLang();
  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <CoverArt seed="client-impact" variant="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-saka-navy/55" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <p className="eyebrow-lg text-white/70">{t.impact.eyebrow}</p>
          <h1 className="display-title mt-4 max-w-2xl text-4xl text-white sm:text-5xl">{t.impact.title}</h1>
          <p className="mt-5 max-w-xl text-white/80">{t.impact.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container-page">
          <h2 className="font-head text-xl font-bold text-saka-navy">{t.impact.leversTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.impact.levers.map((l, i) => (
              <div key={i} className="card">
                <span className="index-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-head text-base font-bold text-saka-navy">{l.t}</h3>
                <p className="mt-2 text-sm text-saka-gray">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-saka-bg">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-head text-xl font-bold text-saka-navy">{t.impact.commitmentTitle}</h2>
            <p className="mt-4 text-saka-gray">{t.impact.commitment}</p>
          </div>
          <div className="card border-saka-blue/20 bg-white">
            <p className="text-sm text-saka-gray">{t.impact.note}</p>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
