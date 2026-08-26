export type Industry = {
  slug: string;
  icon: "plane" | "crane" | "cross" | "flask" | "cloud";
  name: { id: string; en: string };
  tagline: { id: string; en: string };
  challenges: { id: string[]; en: string[] };
  help: { id: string[]; en: string[] };
};

export const industries: Industry[] = [
  {
    slug: "aviation-aerospace",
    icon: "plane",
    name: { id: "Aviation & Aerospace", en: "Aviation & Aerospace" },
    tagline: {
      id: "Efisiensi jaringan, ground operations, dan disiplin margin.",
      en: "Network efficiency, ground operations, and margin discipline.",
    },
    challenges: {
      id: [
        "Biaya bahan bakar, sewa pesawat, dan MRO yang tetap tinggi menekan margin.",
        "Visibilitas profitabilitas rute yang terfragmentasi antar divisi finance, network planning, dan revenue management.",
        "Ground operations dan turnaround time sering menjadi pengungkit terbesar namun paling minim instrumentasi.",
      ],
      en: [
        "Structurally elevated fuel, leasing, and MRO costs continue to compress margins.",
        "Route profitability visibility fragmented across finance, network planning, and revenue management teams.",
        "Ground operations and turnaround performance are often the largest lever, yet the most under-instrumented.",
      ],
    },
    help: {
      id: [
        "Diagnostik profitabilitas jaringan rute berbasis data",
        "Desain revenue management yang lebih sistematis",
        "Perbaikan proses ground handling & turnaround",
      ],
      en: [
        "Data-driven route network profitability diagnostics",
        "More systematic revenue management design",
        "Ground handling & turnaround process improvement",
      ],
    },
  },
  {
    slug: "construction-infrastructure",
    icon: "crane",
    name: { id: "Construction & Infrastructure", en: "Construction & Infrastructure" },
    tagline: {
      id: "Kontrol biaya dan jadwal setelah kontrak ditandatangani.",
      en: "Cost and schedule control after the contract is signed.",
    },
    challenges: {
      id: [
        "Volatilitas harga material (baja, semen, aspal) menekan margin kontrak fixed-price.",
        "Visibilitas biaya proyek sering terjebak di spreadsheet terpisah antara estimasi, procurement, dan lapangan.",
        "Keterlambatan jadwal pada portofolio multi-site sering disebabkan oleh sejumlah kecil akar masalah yang berulang.",
      ],
      en: [
        "Material price volatility (steel, cement, bitumen) compresses margins on fixed-price contracts.",
        "Project cost visibility often trapped in siloed spreadsheets across estimating, procurement, and site teams.",
        "Schedule slippage on multi-site portfolios is often driven by a small number of repeatable root causes.",
      ],
    },
    help: {
      id: [
        "Konsolidasi visibilitas biaya proyek lintas fungsi",
        "Sistem tracking jadwal & early-warning keterlambatan",
        "Strategi kontrol procurement material",
      ],
      en: [
        "Cross-functional project cost visibility consolidation",
        "Schedule tracking & delay early-warning system",
        "Material procurement control strategy",
      ],
    },
  },
  {
    slug: "healthcare-medical-supply",
    icon: "cross",
    name: { id: "Healthcare & Medical Supply", en: "Healthcare & Medical Supply" },
    tagline: {
      id: "Disiplin rantai pasok dan margin setara disiplin klinis.",
      en: "Supply chain and margin discipline matching clinical rigor.",
    },
    challenges: {
      id: [
        "Tekanan reimbursement dan kenaikan biaya impor alat kesehatan/farmasi menekan margin.",
        "Inventori jaringan rumah sakit/distributor sering dikelola per-fasilitas tanpa visibilitas menyeluruh.",
        "Stock-out item kritikal dan overstock item slow-moving kerap terjadi bersamaan dalam satu jaringan.",
      ],
      en: [
        "Reimbursement pressure and rising import costs for medical devices/pharma compress margins.",
        "Hospital network/distributor inventory often managed facility-by-facility with limited network-wide visibility.",
        "Stock-outs of critical items and overstocking of slow-moving SKUs frequently coexist within the same network.",
      ],
    },
    help: {
      id: [
        "Visibilitas inventori terpusat lintas fasilitas",
        "Analisis profitabilitas produk & channel",
        "Perbaikan proses procurement & distribusi",
      ],
      en: [
        "Centralized cross-facility inventory visibility",
        "Product & channel profitability analysis",
        "Procurement & distribution process improvement",
      ],
    },
  },
  {
    slug: "chemicals-industrial-trading",
    icon: "flask",
    name: { id: "Chemicals & Industrial Trading", en: "Chemicals & Industrial Trading" },
    tagline: {
      id: "Disiplin harga dan modal kerja saat biaya input bergerak.",
      en: "Pricing and working-capital discipline as input costs move.",
    },
    challenges: {
      id: [
        "Volatilitas harga feedstock dan eksposur nilai tukar menekan margin distribusi.",
        "Profitabilitas customer/produk sering hanya terlihat di level portofolio, menutupi akun/SKU yang merugi.",
        "Modal kerja sering tertahan pada inventori slow-moving dan piutang yang panjang.",
      ],
      en: [
        "Feedstock price volatility and currency exposure compress distribution margins.",
        "Customer/product profitability often visible only at portfolio level, masking loss-making accounts and SKUs.",
        "Working capital often trapped in slow-moving inventory and extended receivables.",
      ],
    },
    help: {
      id: [
        "Analisis profitabilitas customer & produk secara granular",
        "Strategi pricing dan hedging eksposur nilai tukar",
        "Optimasi modal kerja & piutang",
      ],
      en: [
        "Granular customer & product profitability analysis",
        "Pricing strategy and currency exposure hedging",
        "Working capital & receivables optimization",
      ],
    },
  },
  {
    slug: "technology-digital-services",
    icon: "cloud",
    name: { id: "Technology & Digital Services", en: "Technology & Digital Services" },
    tagline: {
      id: "Membuktikan unit economics sebelum scaling lebih lanjut.",
      en: "Proving unit economics before scaling further.",
    },
    challenges: {
      id: [
        "Ekspektasi investor bergeser dari growth-at-all-costs ke path-to-profitability yang jelas.",
        "CAC dan LTV sering hanya dilihat di level blended, menutupi variasi antar channel dan segmen.",
        "Churn dan ekonomi retensi kerap kurang terinstrumentasi dibanding metrik akuisisi.",
      ],
      en: [
        "Investor expectations have shifted toward a clear path-to-profitability.",
        "CAC and LTV often tracked only at the blended level, masking variation across channels and segments.",
        "Churn and retention economics are often under-instrumented relative to acquisition metrics.",
      ],
    },
    help: {
      id: [
        "Analisis unit economics per channel & segmen",
        "Diagnostik struktur biaya & efisiensi operasional",
        "Kerangka KPI pertumbuhan yang lebih sehat",
      ],
      en: [
        "Unit economics analysis by channel & segment",
        "Cost structure diagnostics & operational efficiency",
        "Healthier growth KPI framework",
      ],
    },
  },
];
