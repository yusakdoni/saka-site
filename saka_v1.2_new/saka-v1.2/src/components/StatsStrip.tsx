"use client";

import { useLang } from "./LanguageProvider";

export default function StatsStrip() {
  const { t } = useLang();
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-3">
        {t.stats.items.map((item, i) => (
          <div key={i} className="text-center sm:text-left">
            <p className="font-head text-xl font-bold text-saka-blue">{item.n}</p>
            <p className="mt-1 text-sm text-saka-gray">{item.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
