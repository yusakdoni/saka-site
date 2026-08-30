import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";
import ProjectPreview from "@/components/portfolio/ProjectPreview";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_18px_48px_-24px_rgba(26,86,219,0.30)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-soft">
        <ProjectPreview item={item} />
        <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink shadow-sm backdrop-blur">
          {item.availability}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">{item.projectType}</span>
          <span className="text-[11px] text-muted">{item.industry}</span>
        </div>
        <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{item.client}</span>
        <h3 className="mb-3 text-xl font-semibold text-ink transition-colors group-hover:text-accent">{item.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{item.problem}</p>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
          {item.technology.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-soft px-2.5 py-1 text-[10px] font-medium text-muted">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
