"use client";

import { useLang } from "@/components/LanguageProvider";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  const { t } = useLang();
  const salesEmail = process.env.NEXT_PUBLIC_SALES_EMAIL || "info@sakasolusindo.com";

  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="mt-3 font-head text-3xl font-bold text-saka-navy sm:text-4xl">{t.contact.title}</h1>
          <p className="mt-4 max-w-lg text-saka-gray">{t.contact.sub}</p>
          <div className="mt-8">
            <ContactForm />
          </div>
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
  );
}
