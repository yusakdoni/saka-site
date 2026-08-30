import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import PortfolioCard from "@/components/PortfolioCard";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Studi kasus implementasi website, ERP / MIS, data intelligence, dan sistem operasional bisnis oleh SAKA.",
};

export default function PortfolioPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Portofolio Kami</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">Proyek Nyata, Solusi Berdampak</h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Interface di bawah mengikuti implementation project yang benar-benar dibangun — bukan template dashboard generik.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {portfolio.map((item) => <PortfolioCard key={item.slug} item={item} />)}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-line bg-soft px-5 py-4 text-center">
          <p className="text-xs leading-relaxed text-muted md:text-sm">
            <strong className="text-ink">Client confidentiality:</strong> Interface shown is based on the implemented system. Operational data displayed has been anonymized or replaced with demonstration data to protect client confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}
