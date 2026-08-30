import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolio, getPortfolioBySlug } from "@/content/portfolio";
import PortfolioVisual from "@/components/PortfolioVisual";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPortfolioBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.problem };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const item = getPortfolioBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <section className="border-b border-line bg-soft">
        <div className="container-page py-10 sm:py-14 md:py-20">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">Real Project</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">{item.availability}</span>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">{item.client}</p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">{item.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{item.projectType} · {item.industry}</p>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-16">
        <div className="container-page">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl2 border border-line bg-soft shadow-[0_22px_60px_-28px_rgba(7,21,46,0.38)]">
            <PortfolioVisual item={item} large />
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted sm:text-xs">
            <strong className="text-ink">Data demonstrasi:</strong> seluruh angka, KPI, transaksi, customer, project, inventory, sales, finance, dan informasi operasional pada mockup merupakan data fiktif untuk keperluan demonstrasi.
          </p>
        </div>
      </section>

      <section className="section-y pt-6 md:pt-10">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">01 · Challenge</p><h2 className="mb-3 text-xl font-semibold text-ink">Tantangan</h2><p className="leading-relaxed text-muted">{item.problem}</p></div>
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">02 · Solution</p><h2 className="mb-3 text-xl font-semibold text-ink">Solusi yang Dibangun</h2><p className="leading-relaxed text-muted">{item.solution}</p></div>
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">03 · Outcome</p><h2 className="mb-3 text-xl font-semibold text-ink">Hasil Implementasi</h2><p className="leading-relaxed text-muted">{item.result}</p></div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl2 border border-line bg-soft p-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Project Scope</h3><ul className="space-y-2 text-sm text-ink">{item.modules.map((m) => <li key={m} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{m}</li>)}</ul></div>
            <div className="rounded-xl2 border border-line bg-soft p-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Technology</h3><div className="flex flex-wrap gap-2">{item.technology.map((t) => <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">{t}</span>)}</div></div>
            {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white">{item.availability === "Demo" ? "Buka Demo" : "Lihat Live Project"}<ExternalLink size={16} /></a>}
            <Link href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt">Diskusikan Proyek Serupa<ArrowRight size={16} /></Link>
          </aside>
        </div>
      </section>
    </>
  );
}
