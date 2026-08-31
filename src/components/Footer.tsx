import Link from "next/link";
import { site, nav } from "@/content/site";
import { services } from "@/content/services";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-page grid grid-cols-1 gap-9 py-12 sm:py-14 lg:grid-cols-4 lg:gap-10 lg:py-16">
        <div>
          <div className="mb-4 w-fit rounded-md bg-white/5 p-2">
            <Logo className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">{site.description}</p>
        </div>

        <div className="border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Layanan</h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:block lg:space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Perusahaan</h3>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:block lg:space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy" className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white">Kebijakan Privasi</Link></li>
          </ul>
        </div>

        <div className="min-w-0 border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Kontak</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>{site.contact.address}</li>
            <li className="min-w-0"><a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">{site.contact.email}</a></li>
            <li><a href={`https://wa.me/${site.contact.whatsappLink}`} className="hover:text-white">{site.contact.whatsapp}</a></li>
            <li className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              <a href={site.socials.linkedin} className="inline-flex min-h-11 items-center hover:text-white">LinkedIn</a>
              <a href={site.socials.instagram} className="inline-flex min-h-11 items-center hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs leading-relaxed text-white/50 sm:flex-row sm:items-center">
          <p>© {year} {site.name}. Seluruh hak cipta dilindungi.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
