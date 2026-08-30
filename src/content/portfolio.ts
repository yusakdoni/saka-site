export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  industry: string;
  projectType: string;
  problem: string;
  solution: string;
  modules: string[];
  result: string;
  technology: string[];
  image: string;
  liveUrl?: string;
  availability: "Live" | "Demo" | "Internal";
  status: "draft" | "published";
}

// Real projects built and maintained by SAKA / the SAKA team.
// Results are intentionally qualitative unless a verified metric is available.
export const portfolio: PortfolioItem[] = [
  {
    slug: "saka-digital-platform-internal-erp",
    title: "SAKA Digital Platform & Internal ERP",
    client: "SAKA Solusindo",
    industry: "Technology / Professional Services",
    projectType: "Corporate Website + Internal Business System",
    problem:
      "SAKA membutuhkan fondasi digital yang dapat menjelaskan layanan secara profesional, menangkap calon klien, mempublikasikan insight, dan menjadi basis pengembangan sistem operasional internal.",
    solution:
      "Membangun website corporate SAKA dengan arsitektur konten terpusat, portfolio, insights, contact lead flow, integrasi email, AI sales assistant, serta workspace ERP/internal management yang dikembangkan sebagai bagian dari ekosistem operasional SAKA.",
    modules: [
      "Corporate Website",
      "Services & Portfolio",
      "Insights",
      "Lead Capture",
      "AI Sales Assistant",
      "Internal ERP Workspace",
    ],
    result:
      "SAKA memiliki satu ekosistem digital untuk membangun kredibilitas, menerima inquiry, mempublikasikan knowledge content, dan mengembangkan proses operasional internal secara bertahap dalam satu arah sistem yang konsisten.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "AI API"],
    image: "/images/portfolio/saka-digital-ecosystem.svg",
    liveUrl: "https://www.sakasolution.com",
    availability: "Live",
    status: "published",
  },
  {
    slug: "gcn-corporate-website",
    title: "GCN Corporate Website & Digital Inquiry",
    client: "PT Gega Cahaya Nusantara",
    industry: "General Trading / Supply / Construction",
    projectType: "Corporate Website",
    problem:
      "GCN membutuhkan website perusahaan yang mampu menjelaskan kapabilitas bisnis secara lebih kredibel dan memberi jalur yang jelas bagi calon buyer untuk menghubungi tim melalui inquiry atau RFQ.",
    solution:
      "Membangun website corporate modern yang memusatkan profil perusahaan, layanan supply/trading/construction, informasi bisnis, dan contact journey yang terhubung ke kanal penjualan.",
    modules: ["Corporate Profile", "Service Pages", "RFQ / Inquiry", "Contact Form", "Responsive UI"],
    result:
      "Website menjadi digital front door GCN untuk memperkuat company credibility dan mempermudah calon buyer memahami layanan serta memulai percakapan bisnis.",
    technology: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Resend"],
    image: "/images/portfolio/gcn-corporate-website.svg",
    liveUrl: "https://www.gcnusantara.com",
    availability: "Live",
    status: "published",
  },
  {
    slug: "gcn-management-system-erp",
    title: "GCN Management System — ERP",
    client: "PT Gega Cahaya Nusantara",
    industry: "General Trading / Project Business",
    projectType: "ERP / Management Information System",
    problem:
      "Aktivitas komersial, procurement, project execution, invoice, payment, approval, dan laporan keuangan membutuhkan satu sistem agar proses order-to-cash dan procure-to-pay dapat dikontrol secara menyeluruh.",
    solution:
      "Membangun ERP terintegrasi dengan modul Sales & Commercial, Project Execution, Procurement, Money & Cashflow, Financial Control, RBAC, approval workflow, audit trail, serta accounting engine double-entry dengan laporan yang dihitung dari ledger.",
    modules: [
      "Leads & Opportunities",
      "Quotation & Costing",
      "Procurement & PO",
      "Projects & Delivery",
      "AR / AP & Cashflow",
      "Journal & General Ledger",
      "P&L / Balance Sheet / Cash Flow",
      "RBAC & Audit Trail",
    ],
    result:
      "GCN memiliki satu management system yang menghubungkan proses komersial sampai financial control, termasuk project P&L, approval, dan auditability tanpa mengandalkan KPI keuangan hardcoded.",
    technology: ["React 19", "FastAPI", "MongoDB", "Recharts", "JWT / RBAC"],
    image: "/images/portfolio/gcn-management-system.svg",
    liveUrl: "https://mis.gcnusantara.com",
    availability: "Live",
    status: "published",
  },
  {
    slug: "dbi-erp-mis",
    title: "DBI ERP / Management Information System",
    client: "PT Derma Beauty Indonesia",
    industry: "Cosmetics / Skincare Manufacturing",
    projectType: "ERP / MIS MVP",
    problem:
      "Bisnis maklon kosmetik membutuhkan visibilitas lintas proses dari lead dan product development sampai procurement, inventory, produksi, quality control, regulatory, finance, accounting, dan return/replacement.",
    solution:
      "Membangun ERP/MIS modular untuk CRM & Leads, Customers, Brands, Products, NPD/R&D, Samples, Quotation & Sales Order, Procurement, Inventory berbasis transaksi, Production, QC, Regulatory, AR/AP, Accounting, Projects, Documents, RBAC, delegation, audit, serta workflow Return & Replacement yang mencegah double counting revenue.",
    modules: [
      "CRM & Sales",
      "NPD / R&D & Samples",
      "Procurement & Suppliers",
      "Inventory",
      "Production & QC",
      "Regulatory",
      "Finance AR/AP",
      "Accounting",
      "Return & Replacement",
      "RBAC & Audit",
    ],
    result:
      "Versi MVP telah dideploy sebagai environment evaluasi untuk memperlihatkan bagaimana data lintas departemen dapat disatukan dalam satu management system, termasuk kontrol replacement tanpa menambah revenue penjualan secara ganda.",
    technology: ["React 19", "FastAPI", "MongoDB", "Recharts", "Zod", "JWT / RBAC"],
    image: "/images/portfolio/dbi-erp-mis.svg",
    liveUrl: "https://dbi.sakasolution.com",
    availability: "Demo",
    status: "published",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}
