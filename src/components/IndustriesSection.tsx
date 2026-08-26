"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { industries } from "@/content/industries";
import IndustryIcon from "./IndustryIcon";

export default function IndustriesSection({ limit }: { limit?: number }) {
  const { t, lang } = useLang();
  const list = limit ? industries.slice(0, limit) : industries;

  return (
    <section className="section bg-saka-bg">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.industries.eyebrow}</p>
          <h2 className="mt-3 font-head text-3xl font-bold text-saka-navy sm:text-4xl">{t.industries.title}</h2>
          <p className="mt-4 text-saka-gray">{t.industries.sub}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((ind) => (
            <Link key={ind.slug} href={`/industri/${ind.slug}`} className="card group flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saka-blue/10 text-saka-blue">
                <IndustryIcon name={ind.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-head text-base font-bold text-saka-navy group-hover:text-saka-blue">
                {ind.name[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm text-saka-gray">{ind.tagline[lang]}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saka-blue">
                {t.industries.cta}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
