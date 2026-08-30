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
    problem:
      "SAKA membutuhkan digital presence yang dapat menjelaskan layanan secara profesional, mempublikasikan portfolio dan insight, serta menangkap calon klien melalui jalur inquiry yang jelas.",
    solution:
      "Membangun website corporate SAKA dengan service catalogue, real-project portfolio, insights, contact lead flow, integrasi email melalui Resend, dan AI sales assistant sebagai bagian dari digital lead experience.",
    modules: [
      "Corporate Website",
      "Services",
      "Real Project Portfolio",
      "Insights",
      "Lead / Contact Flow",
      "AI Sales Assistant",
    ],
    result:
      "SAKA memiliki digital platform live untuk membangun kredibilitas, menjelaskan solusi, menerima inquiry, dan mempublikasikan knowledge content dalam satu pengalaman yang konsisten.",
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
    problem:
      "GCN membutuhkan website perusahaan yang mampu menjelaskan kapabilitas supply, trading, dan konstruksi secara kredibel serta memberi jalur yang jelas untuk inquiry dan RFQ.",
    solution:
      "Membangun corporate website bilingual dengan actual service structure, company profile, project/industry content, contact journey, RFQ flow, dan responsive navigation yang terhubung ke proses sales.",
    modules: ["Corporate Profile", "Services", "Our Work", "Client Impact", "RFQ", "Contact", "Responsive UI"],
    result:
      "Website live menjadi digital front door GCN untuk menjelaskan kapabilitas bisnis dan memudahkan calon buyer memulai permintaan penawaran.",
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
    problem:
      "Aktivitas komersial, procurement, project execution, invoice, payment, approval, dan financial control membutuhkan satu sistem agar order-to-cash dan procure-to-pay dapat dikontrol secara menyeluruh.",
    solution:
      "Membangun role-aware ERP dengan Data Intelligence, module launcher, Sales, Operations & Projects, Finance & Accounting, Documents & Archive, RBAC, approval workflow, audit trail, dan accounting control.",
    modules: [
      "Data Intelligence",
      "Sales",
      "Operations & Projects",
      "Finance & Accounting",
      "Documents & Archive",
      "Leads & Quotations",
      "Procurement & Delivery",
      "RBAC & Audit Trail",
    ],
    result:
      "GCN memiliki management system live yang menyatukan business modules, role-aware decision support, operational workflow, dan financial control dalam satu workspace.",
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
    problem:
      "Bisnis maklon kosmetik membutuhkan visibilitas lintas proses dari lead dan product development sampai procurement, inventory, produksi, quality control, regulatory, finance, accounting, dan return/replacement.",
    solution:
      "Membangun ERP/MIS modular dengan Executive Business Command Center, department intelligence, Penjualan, Pembelian, Persediaan, Produksi, QC, R&D, Regulatory, Finance & Accounting, LMS, Projects, RBAC, delegation, audit, dan return/replacement control.",
    modules: [
      "Data Intelligence",
      "CRM & Sales",
      "NPD / R&D & Samples",
      "Procurement",
      "Inventory & Supply Chain",
      "Production",
      "Quality Control",
      "Regulatory",
      "Finance & Accounting",
      "Return & Replacement",
    ],
    result:
      "Versi MVP telah dideploy sebagai evaluation environment untuk memperlihatkan bagaimana data dan workflow lintas departemen dapat disatukan dalam satu management system.",
    technology: ["React 19", "FastAPI", "MongoDB", "Recharts", "Zod", "JWT / RBAC"],
    liveUrl: "https://dbi.sakasolution.com",
    availability: "Demo",
    status: "published",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolio.find((p) => p.slug === slug);
}
