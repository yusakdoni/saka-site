"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { industries } from "@/content/industries";
import CoverArt from "./CoverArt";

export default function WorkGrid({ limit }: { limit?: number }) {
  const { t, lang } = useLang();
  const list = limit ? industries.slice(0, limit) : industries;

  return (
    <div className="grid gap-px overflow-hidden rounded-xl2 border border-black/5 bg-black/5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((ind, i) => (
        <Link key={ind.slug} href={`/our-work/${ind.slug}`} className="portfolio-card !rounded-none bg-white">
          <div className="cover">
            <CoverArt seed={ind.slug} />
            <span className="absolute left-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-head text-lg font-bold text-saka-navy group-hover:text-saka-blue">
              {ind.name[lang]}
            </h3>
            <p className="mt-2 flex-1 text-sm text-saka-gray">{ind.tagline[lang]}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-saka-blue">
              {t.industries.cta}
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
