import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { site } from "@/content/site";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceCard from "@/components/ServiceCard";

type Props = { params: Promise<{ slug: string }> };

const seoTitles: Record<string, string> = {
  erp: "Jasa Pembuatan Sistem ERP Custom untuk Perusahaan",
  "web-development": "Jasa Pembuatan Website Perusahaan & Web Development",
  "business-intelligence": "Jasa Dashboard Bisnis & Business Intelligence",
  "ai-automation": "Jasa AI & Otomatisasi Bisnis untuk Perusahaan",
  "system-integration": "Jasa Integrasi Sistem & API Perusahaan",
  "it-consulting": "Konsultan IT Perusahaan & Digitalisasi Bisnis",
  "managed-it": "Managed IT Services & Maintenance Sistem Perusahaan",
  "it-procurement": "Jasa Pengadaan Perangkat IT untuk Perusahaan",
};

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const title = seoTitles[slug] ?? service.title;
  const url = `${site.url}/services/${slug}`;
  return {
    title,
    description: service.shortDescription,
    alternates: { canonical: url },
    openGraph: { title, description: service.shortDescription, url, type: "website" },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", name: seoTitles[slug] ?? service.title,
    description: service.shortDescription, provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "Indonesia" }, url: `${site.url}/services/${slug}`,
  };
  const faqSchema = service.faq.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: service.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) } : null;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <section className="border-b border-line bg-soft"><div className="container-page py-16 md:py-24"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent"><ServiceIcon icon={service.icon} size={24}/></div><h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-ink md:text-5xl">{seoTitles[slug] ?? service.title}</h1><p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{service.heroDescription}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt">Ceritakan Kebutuhan Anda<ArrowRight size={16}/></Link></div></section>
    <section className="section-y"><div className="container-page grid gap-16 lg:grid-cols-3"><div className="space-y-12 lg:col-span-2">
      <div><h2 className="mb-3 text-xl font-semibold text-ink">Masalah yang Bisa Kami Bantu</h2><p className="leading-relaxed text-muted">{service.problem}</p></div>
      <div><h2 className="mb-3 text-xl font-semibold text-ink">Solusi yang Dikerjakan</h2><p className="leading-relaxed text-muted">{service.solution}</p></div>
      <div><h2 className="mb-4 text-xl font-semibold text-ink">Yang Bisa Dibangun</h2><ul className="space-y-3">{service.capabilities.map((c)=><li key={c} className="flex items-start gap-3 text-sm text-ink"><Check size={18} className="mt-0.5 shrink-0 text-accent"/>{c}</li>)}</ul></div>
      {service.process.length>0 && <div><h2 className="mb-4 text-xl font-semibold text-ink">Cara Kami Mengerjakannya</h2><div className="grid gap-4 sm:grid-cols-2">{service.process.map((p,i)=><div key={p.step} className="rounded-xl2 border border-line p-5"><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">{String(i+1).padStart(2,"0")}</p><p className="mb-1 font-semibold text-ink">{p.step}</p><p className="text-sm leading-relaxed text-muted">{p.description}</p></div>)}</div></div>}
      {service.faq.length>0 && <div><h2 className="mb-4 text-xl font-semibold text-ink">Pertanyaan yang Sering Ditanyakan</h2><div className="divide-y divide-line rounded-xl2 border border-line">{service.faq.map((f)=><div key={f.question} className="p-5"><h3 className="mb-2 font-medium text-ink">{f.question}</h3><p className="text-sm leading-relaxed text-muted">{f.answer}</p></div>)}</div></div>}
    </div><aside className="space-y-6"><div className="rounded-xl2 border border-line bg-soft p-6"><h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Cocok Untuk</h2><ul className="space-y-2 text-sm text-ink">{service.whoFor.map((w)=><li key={w} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent"/>{w}</li>)}</ul></div><div className="rounded-xl2 bg-navy p-6 text-white"><h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">Manfaat untuk Bisnis</h2><p className="text-sm leading-relaxed text-white/90">{service.benefit}</p></div><Link href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt">Konsultasikan Kebutuhan<ArrowRight size={16}/></Link></aside></div></section>
    <section className="section-y bg-soft"><div className="container-page"><h2 className="mb-8 text-2xl font-bold tracking-tight text-ink">Layanan Lain yang Mungkin Anda Butuhkan</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((s)=><ServiceCard key={s.slug} service={s}/>)}</div></div></section>
  </>;
}
