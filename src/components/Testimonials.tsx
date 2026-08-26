"use client";

import { useLang } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section className="section bg-saka-navy">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow-lg text-white/60">{t.testimonials.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-white/70">{t.testimonials.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="rounded-xl2 border border-white/10 bg-white/[0.04] p-7">
              <span className="quote-mark">&ldquo;</span>
              <p className="-mt-4 text-sm leading-relaxed text-white/85">{item.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-bold text-white">{item.role}</p>
                <p className="text-xs text-white/50">{item.sector}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/40">{t.testimonials.disclaimer}</p>
      </div>
    </section>
  );
}
