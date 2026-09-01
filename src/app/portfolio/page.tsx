import type { Metadata } from "next";
import { publishedPortfolio } from "@/content/portfolio";
import PortfolioCard from "@/components/PortfolioCard";

export const metadata: Metadata = {
  title: "Portofolio Website & ERP | SAKA",
  description: "Lihat proyek website perusahaan dan sistem ERP yang telah dibangun SAKA. Interface proyek menggunakan data demo atau data yang telah dianonimkan.",
};

export default function PortfolioPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Portofolio SAKA</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">Lihat Sistem yang Benar-Benar Kami Bangun</h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">Bukan sekadar gambar konsep. Lihat contoh website dan sistem bisnis yang sudah kami implementasikan untuk kebutuhan nyata.</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-2">{publishedPortfolio.map((item) => <PortfolioCard key={item.slug} item={item} />)}</div>
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-line bg-soft px-5 py-4 text-center"><p className="text-xs leading-relaxed text-muted md:text-sm"><strong className="text-ink">Privasi klien:</strong> Tampilan berasal dari sistem yang diimplementasikan. Data operasional telah dianonimkan atau diganti dengan data demonstrasi untuk melindungi kerahasiaan klien.</p></div>
      </div>
    </div>
  );
}
