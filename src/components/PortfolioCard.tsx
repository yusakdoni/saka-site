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
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{item.industry}</span>
        <h3 className="mb-2 text-lg font-semibold text-ink">{item.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{item.problem}</p>
        {item.status === "draft" && (
          <span className="mt-4 inline-flex w-fit rounded-full bg-soft px-3 py-1 text-xs font-medium text-muted">
            Studi kasus — draft
          </span>
        )}
      </div>
    </Link>
  );
}
