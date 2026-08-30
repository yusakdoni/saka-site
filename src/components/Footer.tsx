import Link from "next/link";
import { site, nav } from "@/content/site";
import { services } from "@/content/services";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="md:col-span-1">
          <div className="mb-4 rounded-md bg-white/5 p-2 w-fit">
            <Logo className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm leading-relaxed text-white/70">{site.description}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Layanan</h3>
          <ul className="space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Perusahaan</h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-sm text-white/80 hover:text-white">
                Kebijakan Privasi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Kontak</h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>{site.contact.address}</li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                className="hover:text-white"
              >
                {site.contact.whatsapp}
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a href={site.socials.linkedin} className="hover:text-white">
                LinkedIn
              </a>
              <a href={site.socials.instagram} className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 md:flex-row">
          <p>
            © {year} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
