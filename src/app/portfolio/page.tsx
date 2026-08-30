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
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Portofolio Kami</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">Proyek Nyata, Solusi Berdampak</h1>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Beberapa solusi digital yang telah kami bangun untuk kebutuhan website perusahaan,
            ERP / MIS, dan sistem operasional bisnis.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {portfolio.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-line bg-soft px-5 py-4 text-center">
          <p className="text-xs leading-relaxed text-muted md:text-sm">
            <strong className="text-ink">Disclaimer:</strong> seluruh nama modul, angka, grafik, transaksi,
            KPI, customer, project, dan informasi operasional yang tampil di dalam mockup dashboard
            merupakan <strong className="text-ink">data fiktif untuk keperluan demonstrasi visual</strong>.
            Mockup digunakan untuk menggambarkan scope dan karakter sistem tanpa menampilkan data bisnis rahasia.
          </p>
        </div>
      </div>
    </div>
  );
}
