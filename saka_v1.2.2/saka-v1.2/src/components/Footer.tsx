"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const salesEmail = process.env.NEXT_PUBLIC_SALES_EMAIL || "info@sakasolusindo.com";

  return (
    <footer className="border-t border-black/5 bg-saka-navy text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <Image
            src="/brand/logo-horizontal-white.png"
            alt="SAKA Solusindo"
            width={150}
            height={34}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm text-white/70">{t.footer.desc}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/50">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/services" className="hover:text-white">{t.nav.services}</Link></li>
            <li><Link href="/our-work" className="hover:text-white">{t.nav.ourWork}</Link></li>
            <li><Link href="/client-impact" className="hover:text-white">{t.nav.clientImpact}</Link></li>
            <li><Link href="/our-company" className="hover:text-white">{t.nav.ourCompany}</Link></li>
            <li><Link href="/work-with-us" className="hover:text-white">{t.nav.workWithUs}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">{t.footer.contactTitle}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{t.contact.officeVal}</li>
            <li>
              <a href={`mailto:${salesEmail}`} className="hover:text-white">{salesEmail}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SAKA Solusindo. {t.footer.rights}</p>
          <p className="max-w-2xl">{t.about.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
