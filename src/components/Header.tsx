"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { nav, site } from "@/content/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex min-w-0 items-center gap-2" aria-label={site.shortName} onClick={() => setOpen(false)}>
          <Logo className="h-8 w-auto sm:h-9 lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-ink transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt lg:inline-flex">
          Hubungi Kami <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 touch-manipulation place-items-center rounded-full border border-line bg-white text-ink lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen flex-col bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu navigasi">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-white px-5 sm:px-6">
            <Link href="/" aria-label={site.shortName} onClick={() => setOpen(false)}>
              <Logo className="h-8 w-auto sm:h-9" />
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 shrink-0 touch-manipulation place-items-center rounded-full border border-line bg-white text-ink"
              aria-label="Tutup menu"
              onClick={() => setOpen(false)}
            >
              <X size={23} />
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain bg-white px-5 py-6 sm:px-6" aria-label="Navigasi mobile">
            <div className="space-y-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-14 touch-manipulation items-center rounded-xl px-4 py-3 text-base font-semibold transition-colors ${pathname === item.href ? "bg-soft text-accent" : "text-ink active:bg-soft"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-6 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white">
                Hubungi Kami <ArrowRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
