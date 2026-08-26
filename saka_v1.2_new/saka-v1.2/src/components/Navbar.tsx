"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/layanan", label: t.nav.services },
    { href: "/industri", label: t.nav.industries },
    { href: "/tentang-kami", label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo-horizontal.png"
            alt="SAKA Solusindo"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-saka-navy/80 hover:text-saka-blue">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-full border border-saka-lightgray px-3 py-1.5 text-xs font-semibold text-saka-navy hover:border-saka-blue hover:text-saka-blue"
          >
            <span className={lang === "id" ? "text-saka-blue" : ""}>ID</span>
            <span className="mx-1 text-saka-gray">/</span>
            <span className={lang === "en" ? "text-saka-blue" : ""}>EN</span>
          </button>
          <Link href="/kontak" className="btn-primary hidden sm:inline-flex">
            {t.nav.cta}
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-saka-lightgray md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="#121E32" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-saka-navy hover:bg-saka-bg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/kontak" className="btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
