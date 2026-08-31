import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import ServiceIcon from "@/components/ServiceIcon";
import ServiceCard from "@/components/ServiceCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-soft">
        <div className="container-page py-16 md:py-24">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <ServiceIcon icon={service.icon} size={24} />
          </div>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {service.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">{service.heroDescription}</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">Masalah yang Kami Selesaikan</h2>
              <p className="leading-relaxed text-muted">{service.problem}</p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-ink">Solusi Kami</h2>
              <p className="leading-relaxed text-muted">{service.solution}</p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-ink">Kapabilitas Utama</h2>
              <ul className="space-y-3">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {service.process.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-ink">Alur Kerja</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.process.map((p, i) => (
                    <div key={p.step} className="rounded-xl2 border border-line p-5">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mb-1 font-semibold text-ink">{p.step}</p>
                      <p className="text-sm leading-relaxed text-muted">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.faq.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold text-ink">Pertanyaan Umum</h2>
                <div className="divide-y divide-line rounded-xl2 border border-line">
                  {service.faq.map((f) => (
                    <div key={f.question} className="p-5">
                      <p className="mb-2 font-medium text-ink">{f.question}</p>
                      <p className="text-sm leading-relaxed text-muted">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-line bg-soft p-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Cocok Untuk</h3>
              <ul className="space-y-2 text-sm text-ink">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl2 bg-navy p-6 text-white">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                Dampak Bisnis
              </h3>
              <p className="text-sm leading-relaxed text-white/90">{service.benefit}</p>
            </div>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt"
            >
              Konsultasikan Kebutuhan
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-y bg-soft">
        <div className="container-page">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-ink">Layanan Terkait</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
