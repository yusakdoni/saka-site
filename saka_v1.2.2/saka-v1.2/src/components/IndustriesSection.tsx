"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import WorkGrid from "./WorkGrid";

export default function IndustriesSection({ limit }: { limit?: number }) {
  const { t } = useLang();

  return (
    <section className="section bg-saka-bg">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow-lg">{t.nav.ourWork}</p>
            <h2 className="display-title mt-4 text-3xl sm:text-4xl">{t.industries.title}</h2>
            <p className="mt-4 text-saka-gray">{t.industries.sub}</p>
          </div>
          {limit && (
            <Link href="/our-work" className="btn-secondary hidden sm:inline-flex">
              {t.nav.ourWork}
            </Link>
          )}
        </div>

        <div className="mt-10">
          <WorkGrid limit={limit} />
        </div>
      </div>
    </section>
  );
}
