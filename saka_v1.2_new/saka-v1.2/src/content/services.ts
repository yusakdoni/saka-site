export type Service = {
  slug: string;
  name: { id: string; en: string };
  desc: { id: string; en: string };
  points: { id: string[]; en: string[] };
};

export const services: Service[] = [
  {
    slug: "it-data-consulting",
    name: { id: "IT & Data Consulting", en: "IT & Data Consulting" },
    desc: {
      id: "Arsitektur data dan sistem TI yang selaras dengan strategi bisnis jangka panjang.",
      en: "Data and IT architecture aligned with long-term business strategy.",
    },
    points: {
      id: ["Audit sistem & data existing", "Roadmap arsitektur data", "Rekomendasi platform sesuai skala bisnis"],
      en: ["Existing systems & data audit", "Data architecture roadmap", "Platform recommendations sized to your business"],
    },
  },
  {
    slug: "digital-transformation",
    name: { id: "Digital Transformation", en: "Digital Transformation" },
    desc: {
      id: "Migrasi proses manual menuju platform digital yang terintegrasi end-to-end.",
      en: "Migrating manual processes to fully integrated digital platforms.",
    },
    points: {
      id: ["Pemetaan proses saat ini", "Desain proses digital target", "Change management untuk adopsi tim"],
      en: ["Current process mapping", "Target digital process design", "Change management for team adoption"],
    },
  },
  {
    slug: "business-intelligence",
    name: { id: "Business Intelligence & Data Analytics", en: "Business Intelligence & Data Analytics" },
    desc: {
      id: "Dashboard eksekutif dan model analitik untuk pengambilan keputusan berbasis data.",
      en: "Executive dashboards and analytical models for data-driven decision-making.",
    },
    points: {
      id: ["Dashboard KPI eksekutif", "Konsolidasi data dari berbagai sumber", "Model analitik & pelaporan berkala"],
      en: ["Executive KPI dashboards", "Data consolidation across sources", "Analytical models & recurring reporting"],
    },
  },
  {
    slug: "performance-management",
    name: { id: "Performance Management", en: "Performance Management" },
    desc: {
      id: "Kerangka KPI dan sistem manajemen kinerja yang menyelaraskan tim dengan tujuan strategis.",
      en: "KPI frameworks and performance systems that align teams to strategic goals.",
    },
    points: {
      id: ["Desain KPI cascade dari korporat ke tim", "Cadence review kinerja", "Sistem tracking & early-warning"],
      en: ["KPI cascade design from corporate to team level", "Performance review cadence", "Tracking & early-warning systems"],
    },
  },
  {
    slug: "process-operational-improvement",
    name: { id: "Process & Operational Improvement", en: "Process & Operational Improvement" },
    desc: {
      id: "Redesain proses inti untuk menghilangkan pemborosan dan mempercepat siklus operasional.",
      en: "Core process redesign to eliminate waste and accelerate operating cycles.",
    },
    points: {
      id: ["Diagnostik proses & identifikasi bottleneck", "Redesain SOP", "Quick-win implementation"],
      en: ["Process diagnostics & bottleneck identification", "SOP redesign", "Quick-win implementation"],
    },
  },
  {
    slug: "supply-procurement-trading",
    name: { id: "Supply, Procurement & Trading Support", en: "Supply, Procurement & Trading Support" },
    desc: {
      id: "Optimasi rantai pasok dan strategi pengadaan lintas kategori barang/jasa.",
      en: "Supply chain optimization and cross-category procurement strategy.",
    },
    points: {
      id: ["Analisis spend & kategori pengadaan", "Strategi sourcing & negosiasi", "Optimasi visibilitas inventori"],
      en: ["Spend & procurement category analysis", "Sourcing & negotiation strategy", "Inventory visibility optimization"],
    },
  },
  {
    slug: "data-automation",
    name: { id: "Data & Automation Solutions", en: "Data & Automation Solutions" },
    desc: {
      id: "Otomasi alur kerja berulang dengan integrasi data yang lebih rapi.",
      en: "Automating repetitive workflows with cleaner data integration.",
    },
    points: {
      id: ["Identifikasi proses berulang untuk otomasi", "Integrasi data antar sistem", "Monitoring hasil implementasi"],
      en: ["Identifying repetitive processes for automation", "Cross-system data integration", "Implementation results monitoring"],
    },
  },
];
