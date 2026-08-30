import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { portfolio, getPortfolioBySlug } from "@/content/portfolio";

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
        <div className="container-page py-16 md:py-24">
          {item.status === "draft" && (
            <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-muted">
              Studi kasus — draft, menunggu persetujuan publikasi
            </span>
          )}
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">{item.industry}</p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">{item.title}</h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">Tantangan</h2>
              <p className="leading-relaxed text-muted">{item.problem}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">Solusi</h2>
              <p className="leading-relaxed text-muted">{item.solution}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">Hasil</h2>
              <p className="leading-relaxed text-muted">{item.result}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-line bg-soft p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Modul</h3>
              <ul className="space-y-1.5 text-sm text-ink">
                {item.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-soft p-6">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {item.technology.map((t) => (
                  <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt"
            >
              Diskusikan Proyek Serupa
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
