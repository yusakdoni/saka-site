import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,86,219,0.25)]"
    >
      <div className="flex aspect-[16/10] items-center justify-center bg-soft text-xs font-medium text-muted">
        Gambar proyek — {item.image.split("/").pop()}
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
