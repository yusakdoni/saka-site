import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolio, getPortfolioBySlug } from "@/content/portfolio";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import ProjectInterfaceGallery from "@/components/portfolio/ProjectInterfaceGallery";

export function generateStaticParams() { return portfolio.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPortfolioBySlug(params.slug); if (!item) return {};
  return { title: item.title, description: item.problem };
}

const privacyNote = "Interface shown is based on the implemented system. Operational data displayed has been anonymized or replaced with demonstration data to protect client confidentiality.";

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const item = getPortfolioBySlug(params.slug); if (!item) notFound();
  return <>
    <section className="border-b border-line bg-soft"><div className="container-page py-10 sm:py-14 md:py-20">
      <div className="mb-4 flex flex-wrap items-center gap-3"><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">Real Project</span><span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">{item.availability}</span></div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">{item.client}</p>
      <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">{item.title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{item.projectType} · {item.industry}</p>
    </div></section>

    <section className="py-8 sm:py-10 md:py-16"><div className="container-page">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl2 border border-line bg-soft shadow-[0_22px_60px_-28px_rgba(7,21,46,0.38)]"><ProjectPreview item={item}/></div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted sm:text-xs">{privacyNote}</p>
    </div></section>

    <section className="section-y pt-6 md:pt-10"><div className="container-page space-y-16">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="space-y-10 lg:col-span-2">
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">01 · Overview</p><h2 className="mb-3 text-2xl font-semibold text-ink">Implementasi</h2><p className="leading-relaxed text-muted">{item.solution}</p></section>
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">02 · Business Problem</p><h2 className="mb-3 text-2xl font-semibold text-ink">Tantangan Bisnis</h2><p className="leading-relaxed text-muted">{item.problem}</p></section>
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">03 · Solution</p><h2 className="mb-3 text-2xl font-semibold text-ink">Solusi yang Dibangun</h2><p className="leading-relaxed text-muted">{item.solution}</p></section>
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl2 border border-line bg-soft p-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Status</h3><p className="text-sm font-semibold text-ink">{item.availability}</p><p className="mt-1 text-xs text-muted">{item.projectType}</p></div>
          {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white">{item.availability === "Demo" ? "Buka Demo" : "Lihat Live Project"}<ExternalLink size={16}/></a>}
        </aside>
      </div>

      <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">04 · System Architecture / Scope</p><h2 className="mb-6 text-2xl font-semibold text-ink">Ruang Lingkup Sistem</h2><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{item.modules.map((m)=><div key={m} className="rounded-xl border border-line bg-soft px-4 py-4 text-sm font-medium text-ink">{m}</div>)}</div></section>

      <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">05 · Key Modules</p><h2 className="mb-4 text-2xl font-semibold text-ink">Kapabilitas Utama</h2><p className="max-w-3xl leading-relaxed text-muted">Interface dan module structure di bawah mengikuti implementation yang ada pada project source. Data operasional yang terlihat sengaja diganti dengan data demonstrasi.</p></section>

      <section><div className="mb-7"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">06 · Interface Showcase</p><h2 className="text-2xl font-semibold text-ink">Implemented Interfaces</h2><p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">Bukan template dashboard generik. Setiap screen mengikuti navigation, hierarchy, visual language, module naming, dan component structure dari implementation project terkait.</p></div><ProjectInterfaceGallery item={item}/><p className="mt-4 text-[11px] leading-relaxed text-muted sm:text-xs">{privacyNote}</p></section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">07 · Technology</p><h2 className="mb-5 text-2xl font-semibold text-ink">Technology Stack</h2><div className="flex flex-wrap gap-2">{item.technology.map((t)=><span key={t} className="rounded-full bg-soft px-3 py-2 text-xs font-medium text-ink">{t}</span>)}</div></div>
        <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">08 · Result</p><h2 className="mb-3 text-2xl font-semibold text-ink">Hasil Implementasi</h2><p className="leading-relaxed text-muted">{item.result}</p></div>
      </section>

      <section className="rounded-xl2 bg-navy px-6 py-9 text-white md:px-10"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">09 · Next Step</p><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-2xl font-semibold">Butuh sistem dengan scope serupa?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">Diskusikan proses bisnis, masalah operasional, dan requirement Anda dengan SAKA.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy">Request Similar Solution<ArrowRight size={16}/></Link></div></section>
    </div></section>
  </>;
}
