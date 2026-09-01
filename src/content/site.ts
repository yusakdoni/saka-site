export const site = {
  name: "SAKA Ananta Solusindo",
  shortName: "SAKA",
  domain: "sakasolution.com",
  url: "https://www.sakasolution.com",
  tagline: "Smart Solutions. Real Impact.",
  description: "Jasa pembuatan website perusahaan, sistem ERP, dashboard bisnis, software custom, integrasi sistem, dan otomatisasi AI untuk membantu bisnis bekerja lebih rapi dan efisien.",
  locale: "id-ID",
  contact: { email: "contact@sakasolution.com", whatsapp: "08113344410", whatsappLink: "628113344410", address: "Tangerang, Indonesia" },
  socials: { linkedin: "https://www.linkedin.com/company/sakasolution", instagram: "https://www.instagram.com/saka.company" },
} as const;

export const nav = [
  { label: "Beranda", href: "/" }, { label: "Layanan", href: "/services" }, { label: "Portofolio", href: "/portfolio" }, { label: "Insights", href: "/insights" }, { label: "Tentang Kami", href: "/about" }, { label: "Kontak", href: "/contact" },
] as const;

export const credibilityPillars = [
  { title: "Mulai dari Masalah Bisnis", description: "Kami memahami proses yang ingin diperbaiki terlebih dahulu sebelum menentukan teknologinya." },
  { title: "Dibuat Sesuai Kebutuhan", description: "Solusi disesuaikan dengan cara kerja bisnis Anda, bukan memaksa bisnis mengikuti sistem yang tidak cocok." },
  { title: "Mudah Dipantau", description: "Data dan proses dibuat lebih rapi agar tim dan manajemen lebih mudah melihat kondisi bisnis." },
  { title: "Tetap Didampingi", description: "Setelah sistem berjalan, maintenance dan pengembangan lanjutan dapat dilakukan sesuai kebutuhan." },
] as const;

export const whyPillars = [
  { title: "Satu Alur Kerja", description: "Website, data, dan sistem dapat dihubungkan agar pekerjaan tidak terpecah di banyak tempat." },
  { title: "Fokus pada Masalah Nyata", description: "Fitur dibuat untuk menyelesaikan pekerjaan yang lambat, manual, atau sulit dipantau." },
  { title: "Informasi Lebih Jelas", description: "Dashboard membantu tim melihat angka penting tanpa menyusun laporan manual berulang kali." },
  { title: "Bisa Dikembangkan Bertahap", description: "Mulai dari kebutuhan paling penting, lalu sistem dapat ditambah ketika bisnis berkembang." },
  { title: "Dikerjakan Bersama Tim Anda", description: "Kami mempelajari proses kerja pengguna agar solusi yang dibuat benar-benar dapat digunakan." },
  { title: "Maintenance & Support", description: "Sistem dapat terus dipelihara, diperbaiki, dan dikembangkan setelah implementasi." },
] as const;
