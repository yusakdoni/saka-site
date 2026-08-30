import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { portfolio } from "@/content/portfolio";
import { articles } from "@/content/insights";
import { clients } from "@/content/clients";
import { credibilityPillars, whyPillars } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import ArticleCard from "@/components/ArticleCard";
import ContactForm from "@/components/ContactForm";
import AIAssistant from "@/components/AIAssistant";

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">Smart Solutions. Real Impact.</p>
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
              Sistem yang mendorong <span className="text-accent">pertumbuhan bisnis</span> Anda.
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              SAKA Ananta Solusindo membantu perusahaan membangun sistem terintegrasi, berbasis data dan teknologi untuk meningkatkan efisiensi dan mendorong pertumbuhan bisnis.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt">Lihat Layanan Kami<ArrowRight size={16} /></Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent">Hubungi Kami</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-line bg-soft">
            <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">Gambar hero — lihat ASSET_REQUIREMENTS.md<br />(foto tim/operasional bisnis premium)</div>
          </div>
        </div>
      </section>

      <section className="section-y bg-soft"><div className="container-page"><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{credibilityPillars.map((p) => <div key={p.title}><h3 className="mb-2 text-base font-semibold text-ink">{p.title}</h3><p className="text-sm leading-relaxed text-muted">{p.description}</p></div>)}</div></div></section>

      <section className="section-y"><div className="container-page"><div className="mb-12 max-w-2xl"><h2 className="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Solusi Terintegrasi untuk Setiap Kebutuhan Bisnis</h2><p className="text-base leading-relaxed text-muted">Dari sistem operasional hingga kecerdasan data — kami membantu perusahaan menyelesaikan masalah bisnis nyata dengan teknologi yang tepat.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featuredServices.map((s) => <ServiceCard key={s.slug} service={s} />)}</div><div className="mt-10"><Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua layanan<ArrowRight size={16} /></Link></div></div></section>

      <section className="section-y bg-navy text-white"><div className="container-page"><div className="mb-12 max-w-2xl"><h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Teknologi yang Tepat. Dampak yang Nyata.</h2></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{whyPillars.map((p) => <div key={p.title} className="rounded-xl2 border border-white/10 bg-white/5 p-6"><h3 className="mb-2 text-base font-semibold">{p.title}</h3><p className="text-sm leading-relaxed text-white/70">{p.description}</p></div>)}</div></div></section>

      <section className="section-y"><div className="container-page"><div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Portofolio Kami</h2><Link href="/portfolio" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua portofolio<ArrowRight size={16} /></Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{portfolio.slice(0, 4).map((item) => <PortfolioCard key={item.slug} item={item} />)}</div></div></section>

      <section className="border-y border-line bg-soft py-14"><div className="container-page text-center">{clients.length > 0 ? <><p className="mb-8 text-sm font-semibold uppercase tracking-wide text-muted">Klien Kami</p><div className="flex flex-wrap items-center justify-center gap-10 opacity-70">{clients.map((c) => <span key={c.name} className="text-sm font-medium text-muted">{c.name}</span>)}</div></> : <><p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Pengalaman &amp; Implementasi</p><p className="mx-auto max-w-xl text-base leading-relaxed text-muted">Kami membangun studi kasus nyata bersama mitra implementasi awal di sektor manufaktur, perdagangan, dan jasa profesional. Detail akan dipublikasikan setelah persetujuan klien.</p></>}</div></section>

      <section className="section-y"><div className="container-page"><div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Insights</h2><Link href="/insights" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua artikel<ArrowRight size={16} /></Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{articles.slice(0, 4).map((a) => <ArticleCard key={a.slug} article={a} />)}</div></div></section>

      <section className="section-y bg-soft"><div className="container-page grid gap-12 lg:grid-cols-2"><div><h2 className="mb-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">Punya Tantangan Bisnis yang Ingin Diselesaikan?</h2><p className="mb-6 max-w-md text-base leading-relaxed text-muted">Ceritakan kebutuhan bisnis Anda. Kami akan membantu memetakan solusi teknologi yang paling tepat.</p></div><div className="rounded-xl2 border border-line bg-white p-6 md:p-8"><ContactForm /></div></div></section>

      <AIAssistant />
    </>
  );
}
