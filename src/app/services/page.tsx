import type { Metadata } from "next";
import { services } from "@/content/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Solusi ERP, web development, business intelligence, AI & automation, system integration, IT consulting, managed IT, dan IT procurement dari SAKA.",
};

export default function ServicesPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Layanan</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Solusi Terintegrasi untuk Setiap Kebutuhan Bisnis
          </h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Kami tidak menjual teknologi untuk teknologinya sendiri. Setiap layanan dirancang untuk
            menjawab masalah bisnis yang nyata.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
