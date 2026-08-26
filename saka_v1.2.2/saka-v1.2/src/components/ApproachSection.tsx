"use client";

import { useLang } from "./LanguageProvider";

export default function ApproachSection() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.approach.eyebrow}</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-saka-navy sm:text-4xl">{t.approach.title}</h2>
          <p className="mt-4 text-saka-gray">{t.approach.sub}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.approach.phases.map((p, i) => (
            <div key={i} className="card">
              <span className="font-head text-2xl font-extrabold text-saka-blue/30">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-head text-lg font-bold text-saka-navy">{p.t}</h3>
              <p className="mt-2 text-sm text-saka-gray">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
