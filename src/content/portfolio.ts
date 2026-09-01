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
  liveUrl?: string;
  availability: "Live" | "Demo" | "Internal";
  status: "draft" | "published";
}

// Real implemented projects. Quantitative claims are omitted unless verified.
export const portfolio: PortfolioItem[] = [
  {
    slug: "saka-digital-platform-internal-erp",
    title: "SAKA Digital Platform",
    client: "SAKA Solusindo",
    industry: "Technology / Professional Services",
    projectType: "Corporate Website & Digital Lead Platform",
    problem: "SAKA membutuhkan website yang mudah dipahami calon klien, menunjukkan pekerjaan nyata, dan menyediakan jalur konsultasi yang jelas.",
    solution: "Membangun website SAKA dengan halaman layanan, portofolio proyek nyata, artikel, formulir konsultasi, email inquiry, dan AI Sales Assistant untuk membantu pengunjung menemukan solusi yang sesuai.",
    modules: ["Corporate Website", "Services", "Real Project Portfolio", "Insights", "Lead / Contact Flow", "AI Sales Assistant"],
    result: "SAKA memiliki website live untuk menjelaskan layanan, menunjukkan implementasi nyata, menerima inquiry, dan membantu calon klien memulai konsultasi.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "AI API"],
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
    problem: "GCN membutuhkan website perusahaan yang menjelaskan layanan supply, trading, dan konstruksi dengan jelas sekaligus memudahkan calon buyer mengirim inquiry atau RFQ.",
    solution: "Membangun website perusahaan bilingual dengan profil bisnis, layanan, project/industry content, contact journey, RFQ flow, dan tampilan responsif yang terhubung ke proses sales.",
    modules: ["Corporate Profile", "Services", "Our Work", "Client Impact", "RFQ", "Contact", "Responsive UI"],
    result: "Website live menjadi pintu masuk digital GCN untuk memperkenalkan kemampuan perusahaan dan memudahkan calon buyer memulai permintaan penawaran.",
    technology: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Resend"],
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
    problem: "Aktivitas sales, pengadaan, proyek, invoice, pembayaran, dan approval sebelumnya perlu dipantau dalam satu sistem agar pekerjaan lebih rapi dan manajemen lebih mudah melihat kondisi bisnis.",
    solution: "Membangun ERP dengan dashboard manajemen, Sales, Operations & Projects, Finance & Accounting, Documents & Archive, approval workflow, hak akses pengguna, dan audit trail dalam satu sistem.",
    modules: ["Data Intelligence", "Sales", "Operations & Projects", "Finance & Accounting", "Documents & Archive", "Leads & Quotations", "Procurement & Delivery", "RBAC & Audit Trail"],
    result: "GCN memiliki management system live yang menyatukan modul bisnis, alur operasional, approval, dan kontrol keuangan dalam satu workspace.",
    technology: ["React 19", "FastAPI", "MongoDB", "Recharts", "JWT / RBAC"],
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
    problem: "Bisnis maklon kosmetik membutuhkan visibilitas lintas proses dari lead dan product development sampai procurement, inventory, produksi, quality control, regulatory, finance, accounting, dan return/replacement.",
    solution: "Membangun ERP/MIS modular dengan Executive Business Command Center, department intelligence, Penjualan, Pembelian, Persediaan, Produksi, QC, R&D, Regulatory, Finance & Accounting, LMS, Projects, RBAC, delegation, audit, dan return/replacement control.",
    modules: ["Data Intelligence", "CRM & Sales", "NPD / R&D & Samples", "Procurement", "Inventory & Supply Chain", "Production", "Quality Control", "Regulatory", "Finance & Accounting", "Return & Replacement"],
    result: "Versi MVP telah dideploy sebagai evaluation environment untuk memperlihatkan bagaimana data dan workflow lintas departemen dapat disatukan dalam satu management system.",
    technology: ["React 19", "FastAPI", "MongoDB", "Recharts", "Zod", "JWT / RBAC"],
    liveUrl: "https://dbi.sakasolution.com",
    availability: "Demo",
    status: "draft",
  },
];

export const publishedPortfolio = portfolio.filter((p) => p.status === "published");

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return publishedPortfolio.find((p) => p.slug === slug);
}
