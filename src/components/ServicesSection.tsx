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
        <div className="max-w-2xl">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-saka-navy sm:text-4xl">{t.services.title}</h2>
          <p className="mt-4 text-saka-gray">{t.services.sub}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s) => (
            <Link key={s.slug} href={`/layanan/${s.slug}`} className="card group flex flex-col">
              <h3 className="font-head text-base font-bold text-saka-navy group-hover:text-saka-blue">
                {s.name[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm text-saka-gray">{s.desc[lang]}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saka-blue">
                {t.misc.readMore}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="mt-10">
            <Link href="/layanan" className="btn-secondary">
              {t.services.cta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
