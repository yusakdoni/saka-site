"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import ApproachSection from "@/components/ApproachSection";
import CtaBand from "@/components/CtaBand";

export default function AboutClient() {
  const { t } = useLang();
  return (
    <>
      <section className="border-b border-black/5 bg-saka-bg">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h1 className="mt-3 font-head text-3xl font-bold text-saka-navy sm:text-4xl">{t.about.title}</h1>
            <p className="mt-5 text-saka-gray">{t.about.body1}</p>
            <p className="mt-4 text-saka-gray">{t.about.body2}</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/brand/icon-navy.png"
              alt="SAKA Solusindo"
              width={220}
              height={220}
              className="h-40 w-40 opacity-90 sm:h-56 sm:w-56"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="font-head text-2xl font-bold text-saka-navy">{t.about.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {t.about.values.map((v, i) => (
              <div key={i} className="card">
                <h3 className="font-head text-base font-bold text-saka-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-saka-gray">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />

      <section className="container-page pb-16">
        <p className="max-w-3xl text-xs text-saka-gray">{t.about.disclaimer}</p>
      </section>

      <CtaBand />
    </>
  );
}
