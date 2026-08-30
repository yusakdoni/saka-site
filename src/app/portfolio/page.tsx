import type { Metadata } from "next";
import { portfolio } from "@/content/portfolio";
import PortfolioCard from "@/components/PortfolioCard";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Studi kasus implementasi sistem, dashboard, website, dan otomasi bisnis oleh SAKA.",
};

export default function PortfolioPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Portofolio</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">Portofolio Kami</h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Contoh nyata jenis pekerjaan yang kami lakukan. Studi kasus lengkap akan dipublikasikan
            setelah data dan hasil terverifikasi serta mendapat persetujuan klien.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
