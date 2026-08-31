import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolio, getPortfolioBySlug } from "@/content/portfolio";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import ProjectInterfaceGallery from "@/components/portfolio/ProjectInterfaceGallery";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return portfolio.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug); if (!item) return {};
  return { title: item.title, description: item.problem };
}

const privacyNote = "Interface shown is based on the implemented system. Operational data displayed has been anonymized or replaced with demonstration data to protect client confidentiality.";

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug); if (!item) notFound();
  return <>
    <section className="border-b border-line bg-soft"><div className="container-page py-9 sm:py-12 lg:py-20">
      <div className="mb-4 flex flex-wrap items-center gap-2.5"><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">Real Project</span><span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted">{item.availability}</span></div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent sm:text-sm">{item.client}</p>
      <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">{item.title}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">{item.projectType} · {item.industry}</p>
    </div></section>

    <section className="py-7 sm:py-9 lg:py-14"><div className="container-page">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-line bg-soft shadow-[0_22px_60px_-28px_rgba(7,21,46,0.38)] sm:aspect-[16/10]"><ProjectPreview item={item}/></div>
      <p className="mt-3 max-w-4xl text-[11px] leading-relaxed text-muted sm:text-xs">{privacyNote}</p>
    </div></section>

    <section className="section-y pt-5 sm:pt-7 lg:pt-10"><div className="container-page space-y-12 sm:space-y-14 lg:space-y-20">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="space-y-8 sm:space-y-10 lg:col-span-2">
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">01 · Overview</p><h2 className="mb-3 text-xl font-semibold text-ink sm:text-2xl">Implementasi</h2><p className="text-sm leading-relaxed text-muted sm:text-base">{item.solution}</p></section>
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">02 · Business Problem</p><h2 className="mb-3 text-xl font-semibold text-ink sm:text-2xl">Tantangan Bisnis</h2><p className="text-sm leading-relaxed text-muted sm:text-base">{item.problem}</p></section>
          <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">03 · Solution</p><h2 className="mb-3 text-xl font-semibold text-ink sm:text-2xl">Solusi yang Dibangun</h2><p className="text-sm leading-relaxed text-muted sm:text-base">{item.solution}</p></section>
        </div>
        <aside className="space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="rounded-xl2 border border-line bg-soft p-5 sm:p-6"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Status</h3><p className="text-sm font-semibold text-ink">{item.availability}</p><p className="mt-1 text-xs text-muted">{item.projectType}</p></div>
          {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noreferrer" className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white">{item.availability === "Demo" ? "Buka Demo" : "Lihat Live Project"}<ExternalLink size={16}/></a>}
        </aside>
      </div>

      <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">04 · System Architecture / Scope</p><h2 className="mb-5 text-xl font-semibold text-ink sm:text-2xl">Ruang Lingkup Sistem</h2><div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">{item.modules.map((m)=><div key={m} className="rounded-xl border border-line bg-soft px-4 py-3.5 text-sm font-medium text-ink sm:py-4">{m}</div>)}</div></section>

      <section><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">05 · Key Modules</p><h2 className="mb-3 text-xl font-semibold text-ink sm:mb-4 sm:text-2xl">Kapabilitas Utama</h2><p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">Interface dan module structure di bawah mengikuti implementation yang ada pada project source. Data operasional yang terlihat sengaja diganti dengan data demonstrasi.</p></section>

      <section><div className="mb-5 sm:mb-7"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">06 · Interface Showcase</p><h2 className="text-xl font-semibold text-ink sm:text-2xl">Implemented Interfaces</h2><p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted sm:mt-3">Bukan template dashboard generik. Setiap screen mengikuti navigation, hierarchy, visual language, module naming, dan component structure dari implementation project terkait.</p></div><ProjectInterfaceGallery item={item}/><p className="mt-4 max-w-4xl text-[11px] leading-relaxed text-muted sm:text-xs">{privacyNote}</p></section>

      <section className="grid gap-9 lg:grid-cols-2 lg:gap-10">
        <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">07 · Technology</p><h2 className="mb-4 text-xl font-semibold text-ink sm:mb-5 sm:text-2xl">Technology Stack</h2><div className="flex flex-wrap gap-2">{item.technology.map((t)=><span key={t} className="rounded-full bg-soft px-3 py-2 text-xs font-medium text-ink">{t}</span>)}</div></div>
        <div><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">08 · Result</p><h2 className="mb-3 text-xl font-semibold text-ink sm:text-2xl">Hasil Implementasi</h2><p className="text-sm leading-relaxed text-muted sm:text-base">{item.result}</p></div>
      </section>

      <section className="rounded-xl2 bg-navy px-5 py-7 text-white sm:px-7 sm:py-8 lg:px-10 lg:py-9"><p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">09 · Next Step</p><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6"><div><h2 className="text-xl font-semibold sm:text-2xl">Butuh sistem dengan scope serupa?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">Diskusikan proses bisnis, masalah operasional, dan requirement Anda dengan SAKA.</p></div><Link href="/contact" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy sm:w-auto lg:w-auto">Request Similar Solution<ArrowRight size={16}/></Link></div></section>
    </div></section>
  </>;
}
