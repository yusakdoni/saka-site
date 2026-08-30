// Centralized company/site configuration.
// Replace placeholder values before production launch — see ASSET_REQUIREMENTS.md.

export const site = {
  name: "SAKA Ananta Solusindo",
  shortName: "SAKA",
  domain: "sakasolution.com",
  url: "https://www.sakasolution.com",
  tagline: "Smart Solutions. Real Impact.",
  description:
    "SAKA Ananta Solusindo membantu perusahaan membangun sistem terintegrasi, berbasis data dan teknologi untuk meningkatkan efisiensi dan mendorong pertumbuhan bisnis.",
  locale: "id-ID",
  contact: {
    email: "contact@sakasolution.com",
    whatsapp: "08113344410",
    address: "Tangerang, Indonesia",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/sakasolution", // PLACEHOLDER
    instagram: "https://www.instagram.com/saka.company", // PLACEHOLDER
  },
} as const;

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Portofolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kontak", href: "/contact" },
] as const;

export const credibilityPillars = [
  {
    title: "Berorientasi Bisnis",
    description:
      "Setiap solusi dimulai dari masalah bisnis yang nyata, bukan dari teknologi untuk teknologinya sendiri.",
  },
  {
    title: "Solusi Terintegrasi",
    description:
      "Sistem, data, dan proses dirancang agar saling terhubung, bukan berdiri sendiri-sendiri.",
  },
  {
    title: "Berbasis Data",
    description:
      "Keputusan bisnis didukung oleh data yang akurat dan mudah dipahami, bukan sekadar laporan.",
  },
  {
    title: "Dukungan Berkelanjutan",
    description:
      "Kami mendampingi setelah go-live — bukan hanya menyelesaikan proyek lalu menghilang.",
  },
] as const;

export const whyPillars = [
  { title: "Solusi Terintegrasi", description: "Web, data, dan sistem bekerja sebagai satu kesatuan." },
  { title: "Fokus pada Hasil Bisnis", description: "Setiap fitur diukur dari dampaknya terhadap operasional dan pertumbuhan." },
  { title: "Data & Insight", description: "Dashboard dan laporan yang benar-benar dipakai untuk mengambil keputusan." },
  { title: "Fleksibel & Scalable", description: "Dibangun modular sehingga bisa tumbuh mengikuti kebutuhan bisnis Anda." },
  { title: "Pendekatan Kolaboratif", description: "Kami bekerja bersama tim Anda, bukan bekerja terpisah dari Anda." },
  { title: "Dukungan Berkelanjutan", description: "Managed service dan maintenance untuk menjaga sistem tetap berjalan optimal." },
] as const;
