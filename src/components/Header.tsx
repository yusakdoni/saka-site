"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/content/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label={site.shortName} onClick={() => setOpen(false)}>
          <Logo className="h-8 w-auto sm:h-9 lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt lg:inline-flex"
        >
          Hubungi Kami
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-soft lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-white lg:hidden">
          <nav className="container-page flex min-h-full flex-col py-5" aria-label="Navigasi mobile">
            <div className="space-y-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:bg-soft"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
            >
              Hubungi Kami
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
