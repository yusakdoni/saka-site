"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import type { Service } from "@/content/services";
import CtaBand from "@/components/CtaBand";

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { t, lang } = useLang();
  return (
    <>
      <div className="border-b border-black/5 bg-saka-bg pt-10">
        <div className="container-page pb-12">
          <Link href="/layanan" className="text-sm font-medium text-saka-blue">
            ← {t.misc.backToServices}
          </Link>
          <h1 className="mt-4 max-w-2xl font-head text-3xl font-bold text-saka-navy sm:text-4xl">
            {service.name[lang]}
          </h1>
          <p className="mt-4 max-w-xl text-saka-gray">{service.desc[lang]}</p>
        </div>
      </div>

      <section className="section">
        <div className="container-page max-w-2xl">
          <h2 className="font-head text-xl font-bold text-saka-navy">{t.industries.helpLabel}</h2>
          <ul className="mt-5 space-y-3">
            {service.points[lang].map((p, i) => (
              <li key={i} className="flex gap-3 text-sm text-saka-navy">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-saka-blue/10 text-xs font-bold text-saka-blue">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
