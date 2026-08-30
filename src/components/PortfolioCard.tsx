import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_14px_36px_-18px_rgba(26,86,219,0.28)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          src={item.image}
          alt={`${item.title} — ${item.client}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur">
          {item.availability}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{item.client}</span>
        <h3 className="mb-2 text-lg font-semibold text-ink group-hover:text-accent">{item.title}</h3>
        <p className="mb-3 text-xs font-medium text-muted">{item.projectType}</p>
        <p className="text-sm leading-relaxed text-muted">{item.problem}</p>
      </div>
    </Link>
  );
}
