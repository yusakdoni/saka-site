export interface PortfolioItem {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  modules: string[];
  result: string;
  technology: string[];
  image: string;
  status: "draft" | "published";
}

// NOTE: All entries below are illustrative/draft placeholders describing the
// TYPE of work SAKA delivers. Per the no-fake-content policy, none of these
// carry fabricated client names or performance numbers. Replace with real,
// approved case studies once publication approval and verified results are available.
export const portfolio: PortfolioItem[] = [
  {
    slug: "erp-manajemen-operasional",
    title: "Sistem ERP & Manajemen Operasional",
    industry: "Manufaktur / Distribusi",
    problem:
      "Proses inventori, procurement, dan pelaporan berjalan terpisah di berbagai spreadsheet, menyulitkan visibilitas manajemen.",
    solution:
      "Merancang sistem ERP modular yang menyatukan inventori, procurement, dan laporan manajemen dalam satu platform.",
    modules: ["Inventori", "Procurement", "Dashboard Manajemen"],
    result: "Studi kasus dalam proses dokumentasi — akan dipublikasikan setelah persetujuan klien.",
    technology: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    image: "/images/portfolio/erp-manajemen-operasional.svg",
    status: "draft",
  },
  {
    slug: "dashboard-eksekutif",
    title: "Dashboard Eksekutif & Business Intelligence",
    industry: "Perdagangan / Trading",
    problem: "Laporan manajemen disusun manual setiap bulan dan sering terlambat.",
    solution:
      "Membangun dashboard eksekutif yang mengonsolidasikan data penjualan dan operasional secara real-time.",
    modules: ["Data Pipeline", "Dashboard KPI", "Laporan Terjadwal"],
    result: "Studi kasus dalam proses dokumentasi — akan dipublikasikan setelah persetujuan klien.",
    technology: ["Next.js", "Recharts", "PostgreSQL"],
    image: "/images/portfolio/dashboard-eksekutif.svg",
    status: "draft",
  },
  {
    slug: "website-korporat-lead-generation",
    title: "Website Korporat & Lead Generation",
    industry: "Jasa Profesional",
    problem: "Website lama tidak menghasilkan leads dan sulit dikelola oleh tim internal.",
    solution:
      "Membangun ulang website dengan arsitektur konten terpusat, SEO teknis, dan formulir lead yang terhubung ke email tim penjualan.",
    modules: ["Corporate Website", "Formulir Lead", "AI Sales Assistant"],
    result: "Studi kasus dalam proses dokumentasi — akan dipublikasikan setelah persetujuan klien.",
    technology: ["Next.js", "TypeScript", "Resend"],
    image: "/images/portfolio/website-korporat-lead-generation.svg",
    status: "draft",
  },
  {
    slug: "crm-otomasi-penjualan",
    title: "CRM & Otomasi Follow-Up Penjualan",
    industry: "Kecantikan / Retail",
    problem: "Follow-up pelanggan dilakukan manual sehingga banyak prospek yang tidak tertangani.",
    solution: "Mengimplementasikan CRM dengan otomasi follow-up berbasis WhatsApp dan kualifikasi lead otomatis.",
    modules: ["CRM", "WhatsApp Automation", "Lead Scoring"],
    result: "Studi kasus dalam proses dokumentasi — akan dipublikasikan setelah persetujuan klien.",
    technology: ["Next.js", "WhatsApp API", "AI Agent"],
    image: "/images/portfolio/crm-otomasi-penjualan.svg",
    status: "draft",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}
