"use client";

import { useLang } from "./LanguageProvider";

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section className="section bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow-lg text-saka-blue">{t.about.eyebrow}</p>
          <h2 className="display-title mt-4 text-3xl text-saka-navy sm:text-4xl">{t.about.title}</h2>
          <p className="mt-6 text-saka-gray">{t.about.body1}</p>
          <p className="mt-4 text-saka-gray">{t.about.body2}</p>
        </div>
        <div>
          <h3 className="font-head text-sm font-bold uppercase tracking-wide text-saka-navy/60">
            {t.about.valuesTitle}
          </h3>
          <div className="mt-6 space-y-6">
            {t.about.values.map((v, i) => (
              <div key={i} className="hairline pt-6 first:border-none first:pt-0">
                <p className="index-number">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="mt-1 font-head text-base font-bold text-saka-navy">{v.t}</h4>
                <p className="mt-1 text-sm text-saka-gray">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
