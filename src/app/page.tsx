import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { publishedPortfolio } from "@/content/portfolio";
import { articles } from "@/content/insights";
import { credibilityPillars, whyPillars } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import ArticleCard from "@/components/ArticleCard";
import ContactForm from "@/components/ContactForm";
import AIAssistant from "@/components/AIAssistant";

const problems = ["Data masih tersebar di banyak Excel", "Sulit memantau proyek, penjualan, atau keuangan", "Quotation dan approval masih manual", "Laporan manajemen lama dibuat", "Sales follow-up sering terlewat", "Banyak pekerjaan admin yang berulang"];

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured);
  return <>
    <section className="relative overflow-hidden border-b border-line bg-white"><div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28"><div><p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">Smart Solutions. Real Impact.</p><h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">Sistem IT yang Membuat <span className="text-accent">Bisnis Lebih Mudah Dikelola.</span></h1><p className="mb-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">Mulai dari website perusahaan, ERP, dashboard bisnis hingga otomatisasi AI. SAKA membantu merapikan proses kerja, mengurangi pekerjaan manual, dan membuat informasi bisnis lebih mudah dipantau.</p><div className="flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt">Konsultasikan Kebutuhan Anda<ArrowRight size={16}/></Link><Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent">Lihat Layanan</Link></div></div><div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-line bg-soft shadow-[0_24px_70px_-36px_rgba(15,42,86,0.45)]"><Image src="/images/hero/home-hero.svg" alt="Solusi website, ERP, dashboard dan otomatisasi bisnis SAKA" fill priority unoptimized sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div></div></section>

    <section className="section-y bg-soft"><div className="container-page"><div className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Kenali Masalahnya</p><h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Masalah seperti ini terjadi di bisnis Anda?</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{problems.map((p)=><div key={p} className="rounded-xl border border-line bg-white p-5 text-sm font-medium text-ink">{p}</div>)}</div><p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">SAKA membantu mengubah proses yang rumit dan manual menjadi sistem yang lebih sederhana, terhubung, dan mudah dipantau.</p></div></section>

    <section className="section-y"><div className="container-page"><div className="mb-12 max-w-2xl"><h2 className="mb-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">Apa yang Bisa Kami Bantu?</h2><p className="text-base leading-relaxed text-muted">Tidak harus paham istilah IT. Ceritakan masalah bisnisnya, lalu kami bantu menentukan apakah Anda membutuhkan website, ERP, dashboard, integrasi sistem, atau otomatisasi.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featuredServices.map((s)=><ServiceCard key={s.slug} service={s}/>)}</div><div className="mt-10"><Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua layanan<ArrowRight size={16}/></Link></div></div></section>

    <section className="section-y bg-navy text-white"><div className="container-page"><div className="mb-12 max-w-2xl"><h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Teknologi yang Dipilih Sesuai Kebutuhan Bisnis</h2></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{whyPillars.map((p)=><div key={p.title} className="rounded-xl2 border border-white/10 bg-white/5 p-6"><h3 className="mb-2 text-base font-semibold">{p.title}</h3><p className="text-sm leading-relaxed text-white/70">{p.description}</p></div>)}</div></div></section>

    <section className="section-y"><div className="container-page"><div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Pekerjaan Kami</p><h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Lihat Sistem yang Sudah Dibangun</h2></div><Link href="/portfolio" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua portofolio<ArrowRight size={16}/></Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{publishedPortfolio.map((item)=><PortfolioCard key={item.slug} item={item}/>)}</div></div></section>

    <section className="section-y bg-soft"><div className="container-page"><div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Panduan Bisnis & Teknologi</p><h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">Cari Jawaban Sebelum Memulai</h2></div><Link href="/insights" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent">Lihat semua artikel<ArrowRight size={16}/></Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{articles.slice(0,4).map((a)=><ArticleCard key={a.slug} article={a}/>)}</div></div></section>

    <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-2"><div><h2 className="mb-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">Belum Tahu Sistem Apa yang Dibutuhkan?</h2><p className="mb-6 max-w-md text-base leading-relaxed text-muted">Tidak masalah. Ceritakan proses yang masih ribet, lambat, atau manual. Kami bantu petakan pilihan solusi yang masuk akal untuk bisnis Anda.</p></div><div className="rounded-xl2 border border-line bg-white p-6 md:p-8"><ContactForm/></div></div></section>
    <AIAssistant/>
  </>;
}
