"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { services } from "@/content/services";

export default function ServicesSection({ limit }: { limit?: number }) {
  const { t, lang } = useLang();
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow-lg">{t.services.eyebrow}</p>
            <h2 className="display-title mt-4 text-3xl sm:text-4xl">{t.services.title}</h2>
            <p className="mt-4 text-saka-gray">{t.services.sub}</p>
          </div>
          {limit && (
            <Link href="/services" className="btn-secondary hidden sm:inline-flex">
              {t.services.cta}
            </Link>
          )}
        </div>

        <div className="mt-12">
          {list.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-2 border-t border-saka-navy/10 py-6 last:border-b sm:flex-row sm:items-center sm:gap-8"
            >
              <span className="index-number w-10 flex-none">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="flex-1 font-head text-xl font-bold text-saka-navy group-hover:text-saka-blue sm:text-2xl">
                {s.name[lang]}
              </h3>
              <p className="flex-1 text-sm text-saka-gray sm:max-w-sm">{s.desc[lang]}</p>
              <span className="hidden text-saka-blue transition group-hover:translate-x-1 sm:block" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
