"use client";

import { useLang } from "@/components/LanguageProvider";
import ContactForm from "@/components/ContactForm";
import CoverArt from "@/components/CoverArt";

export default function ContactClient() {
  const { t } = useLang();
  const salesEmail = process.env.NEXT_PUBLIC_SALES_EMAIL || "info@sakasolusindo.com";

  return (
    <>
      <div className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0">
          <CoverArt seed="work-with-us" variant="hero" className="h-full w-full" />
          <div className="absolute inset-0 bg-saka-navy/60" />
        </div>
        <div className="container-page relative py-20 sm:py-28">
          <p className="eyebrow-lg text-white/70">{t.nav.workWithUs}</p>
          <h1 className="display-title mt-4 max-w-2xl text-4xl text-white sm:text-5xl">{t.contact.title}</h1>
          <p className="mt-5 max-w-xl text-white/80">{t.contact.sub}</p>
        </div>
      </div>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <ContactForm />
          </div>

          <div>
            <div className="card">
              <h2 className="font-head text-base font-bold text-saka-navy">{t.contact.infoTitle}</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-saka-gray">{t.contact.officeLabel}</dt>
                  <dd className="mt-1 text-saka-navy">{t.contact.officeVal}</dd>
                </div>
                <div>
                  <dt className="font-medium text-saka-gray">{t.contact.hoursLabel}</dt>
                  <dd className="mt-1 text-saka-navy">{t.contact.hoursVal}</dd>
                </div>
                <div>
                  <dt className="font-medium text-saka-gray">{t.contact.emailLabel}</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${salesEmail}`} className="text-saka-blue hover:underline">
                      {salesEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
