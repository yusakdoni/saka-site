export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  icon: "layout-dashboard" | "code" | "bar-chart-3" | "bot" | "network" | "compass" | "life-buoy" | "package";
  title: string;
  shortDescription: string;
  heroDescription: string;
  problem: string;
  whoFor: string[];
  solution: string;
  capabilities: string[];
  process: { step: string; description: string }[];
  benefit: string;
  faq: ServiceFAQ[];
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "erp",
    icon: "layout-dashboard",
    title: "Sistem ERP",
    shortDescription:
      "Sistem manajemen bisnis terintegrasi untuk operasional, keuangan, dan proses lintas divisi.",
    heroDescription:
      "Satukan data operasional, keuangan, dan proses kerja dalam satu sistem yang bisa diandalkan.",
    problem:
      "Banyak perusahaan masih mengandalkan spreadsheet terpisah dan komunikasi manual antar divisi, sehingga data sering tidak sinkron dan keputusan diambil terlambat.",
    whoFor: [
      "Perusahaan manufaktur dan distribusi dengan proses multi-divisi",
      "Bisnis yang sedang tumbuh dan mulai kesulitan mengelola data secara manual",
      "Tim yang butuh visibilitas real-time atas operasional",
    ],
    solution:
      "SAKA merancang sistem ERP modular — mulai dari inventori, procurement, penjualan, hingga laporan manajemen — yang disesuaikan dengan alur kerja aktual perusahaan Anda.",
    capabilities: [
      "Manajemen inventori & procurement",
      "Modul penjualan & CRM dasar",
      "Approval & workflow internal",
      "Dashboard manajemen dan laporan",
      "Integrasi dengan sistem yang sudah berjalan",
    ],
    process: [
      { step: "Discovery", description: "Memetakan proses bisnis dan titik masalah utama." },
      { step: "Solution Design", description: "Merancang arsitektur modul sesuai kebutuhan." },
      { step: "Delivery", description: "Pengembangan, migrasi data, dan pengujian." },
      { step: "Go-Live & Support", description: "Pelatihan tim dan pendampingan pasca-implementasi." },
    ],
    benefit:
      "Data yang konsisten, proses yang lebih cepat, dan pengambilan keputusan yang didukung informasi real-time.",
    faq: [
      {
        question: "Apakah sistem ERP dari SAKA harus dibangun dari nol?",
        answer:
          "Tidak selalu. Kami mengevaluasi apakah build custom atau integrasi dengan platform yang sudah ada (seperti Odoo) lebih sesuai dengan kebutuhan dan anggaran Anda.",
      },
      {
        question: "Berapa lama proses implementasi?",
        answer:
          "Bergantung pada cakupan modul dan kompleksitas proses bisnis. Timeline detail ditentukan setelah tahap discovery.",
      },
    ],
    featured: true,
  },
  {
    slug: "web-development",
    icon: "code",
    title: "Web Development",
    shortDescription:
      "Website korporat dan aplikasi web yang dirancang untuk konversi, kecepatan, dan kredibilitas.",
    heroDescription:
      "Website bukan sekadar company profile — ini adalah mesin penjualan digital pertama Anda.",
    problem:
      "Banyak website perusahaan hanya menjadi brosur digital: lambat, tidak SEO-friendly, dan tidak menghasilkan lead.",
    whoFor: [
      "Perusahaan yang butuh kehadiran digital profesional",
      "Bisnis yang ingin website menghasilkan leads, bukan sekadar informasi",
      "Tim yang butuh sistem konten mudah dikelola",
    ],
    solution:
      "Kami membangun website dengan arsitektur modern (Next.js), performa cepat, SEO yang solid, dan formulir lead yang benar-benar terhubung ke proses penjualan Anda.",
    capabilities: [
      "Corporate website & landing page",
      "SEO teknis dan on-page",
      "Formulir lead dan integrasi email",
      "AI Sales Assistant (opsional)",
      "Konten dwibahasa (ID/EN)",
    ],
    process: [
      { step: "Discovery", description: "Memahami target audiens dan tujuan konversi." },
      { step: "Design", description: "Merancang struktur halaman dan identitas visual." },
      { step: "Build & QA", description: "Pengembangan, pengujian performa, dan SEO." },
      { step: "Launch", description: "Deploy, monitoring, dan dukungan pasca-peluncuran." },
    ],
    benefit: "Website yang cepat, kredibel, dan secara aktif menghasilkan calon pelanggan.",
    faq: [
      {
        question: "Apakah website bisa dwibahasa?",
        answer: "Ya, struktur konten kami mendukung Bahasa Indonesia sebagai default dengan opsi Bahasa Inggris.",
      },
      {
        question: "Apakah termasuk hosting?",
        answer:
          "Kami merekomendasikan deployment di Vercel. Biaya hosting dan domain terpisah dari biaya pengembangan, kecuali disepakati lain dalam SOW.",
      },
    ],
    featured: true,
  },
  {
    slug: "business-intelligence",
    icon: "bar-chart-3",
    title: "Business Intelligence",
    shortDescription: "Dashboard dan analitik data untuk memahami performa bisnis secara real-time.",
    heroDescription: "Ubah data yang tersebar menjadi insight yang bisa langsung ditindaklanjuti.",
    problem:
      "Data tersebar di berbagai sistem dan spreadsheet, sehingga laporan manajemen memakan waktu dan sering terlambat.",
    whoFor: [
      "Manajemen yang butuh visibilitas performa secara real-time",
      "Tim yang masih menyusun laporan manual setiap bulan",
      "Perusahaan dengan banyak sumber data yang belum terhubung",
    ],
    solution:
      "SAKA membangun data pipeline dan dashboard yang menggabungkan sumber data Anda menjadi satu tampilan yang jelas dan mudah dipahami oleh pengambil keputusan.",
    capabilities: [
      "Konsolidasi data dari berbagai sumber",
      "Dashboard eksekutif & operasional",
      "KPI tracking otomatis",
      "Laporan terjadwal",
      "Forecasting dasar",
    ],
    process: [
      { step: "Audit Data", description: "Memetakan sumber data dan kualitasnya." },
      { step: "Modeling", description: "Menyusun struktur data dan metrik utama." },
      { step: "Dashboard Build", description: "Membangun visualisasi yang relevan untuk pengguna." },
      { step: "Adoption", description: "Pelatihan tim agar dashboard benar-benar dipakai." },
    ],
    benefit: "Keputusan bisnis yang lebih cepat dan berbasis data, bukan asumsi.",
    faq: [
      {
        question: "Apakah butuh data warehouse terlebih dahulu?",
        answer:
          "Tergantung skala data. Untuk kebutuhan awal, kami bisa membangun dashboard langsung dari sumber data yang ada sebelum mempertimbangkan data warehouse.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-automation",
    icon: "bot",
    title: "AI & Business Automation",
    shortDescription: "Otomatisasi proses berulang dan asisten AI untuk efisiensi operasional.",
    heroDescription: "Bebaskan tim Anda dari pekerjaan repetitif dengan otomatisasi yang tepat sasaran.",
    problem:
      "Proses manual seperti follow-up pelanggan, entri data, dan dokumentasi menghabiskan waktu tim yang seharusnya bisa fokus ke hal yang lebih strategis.",
    whoFor: [
      "Tim sales yang butuh follow-up otomatis",
      "Operasional dengan proses input data berulang",
      "Perusahaan yang ingin mulai mengadopsi AI secara praktis",
    ],
    solution:
      "Kami merancang alur otomatisasi dan AI agent yang terintegrasi dengan sistem yang sudah Anda pakai — mulai dari WhatsApp, CRM, hingga dokumen internal.",
    capabilities: [
      "Automasi workflow lintas sistem",
      "AI agent untuk kualifikasi lead",
      "Ekstraksi & pemrosesan dokumen otomatis",
      "Asisten pengetahuan internal",
      "Integrasi WhatsApp & CRM",
    ],
    process: [
      { step: "Identifikasi Proses", description: "Menentukan proses repetitif yang layak diotomasi." },
      { step: "Desain Alur", description: "Merancang logika otomasi dan titik integrasi." },
      { step: "Implementasi", description: "Membangun dan menguji alur otomasi." },
      { step: "Monitoring", description: "Memastikan otomasi berjalan stabil dan akurat." },
    ],
    benefit: "Waktu tim lebih efisien dan proses berjalan konsisten tanpa human error.",
    faq: [
      {
        question: "Apakah AI bisa menggantikan tim sales sepenuhnya?",
        answer:
          "Tidak. AI kami dirancang untuk membantu kualifikasi awal dan follow-up, bukan menggantikan hubungan manusia dalam closing.",
      },
    ],
    featured: true,
  },
  {
    slug: "system-integration",
    icon: "network",
    title: "System Integration",
    shortDescription: "Menghubungkan sistem yang berjalan terpisah menjadi satu alur kerja yang mulus.",
    heroDescription: "Sistem yang baik bukan yang paling banyak, tapi yang paling terhubung.",
    problem:
      "Perusahaan sering menggunakan banyak software berbeda yang tidak saling bicara, sehingga data harus dipindahkan manual.",
    whoFor: [
      "Perusahaan dengan banyak sistem/software berbeda",
      "Tim yang melakukan entri data ganda antar sistem",
      "Bisnis yang ingin API terhubung tanpa membangun ulang semuanya",
    ],
    solution:
      "SAKA memetakan integrasi antar sistem menggunakan API dan middleware, sehingga data mengalir otomatis tanpa proses manual.",
    capabilities: [
      "Integrasi API antar platform",
      "Sinkronisasi data otomatis",
      "Middleware & webhook",
      "Migrasi data terkontrol",
    ],
    process: [
      { step: "Pemetaan Sistem", description: "Mendata sistem yang perlu terhubung." },
      { step: "Arsitektur Integrasi", description: "Merancang alur data dan API yang dibutuhkan." },
      { step: "Build & Test", description: "Implementasi dan pengujian integrasi." },
      { step: "Handover", description: "Dokumentasi dan pelatihan tim teknis internal." },
    ],
    benefit: "Data yang konsisten di semua sistem tanpa kerja input ganda.",
    faq: [],
    featured: false,
  },
  {
    slug: "it-consulting",
    icon: "compass",
    title: "IT Consulting",
    shortDescription: "Konsultasi strategi teknologi, audit sistem, dan pendampingan adopsi digital.",
    heroDescription: "Sebelum membangun sistem baru, pastikan arahnya benar terlebih dahulu.",
    problem:
      "Investasi teknologi sering gagal karena tidak dimulai dari pemahaman proses bisnis yang jelas.",
    whoFor: [
      "Perusahaan yang mempertimbangkan investasi sistem baru",
      "Tim yang butuh audit atas sistem yang sudah berjalan",
      "Organisasi yang mulai merencanakan adopsi AI",
    ],
    solution:
      "Kami membantu memetakan proses bisnis, mengevaluasi opsi teknologi, dan menyusun roadmap implementasi yang realistis.",
    capabilities: [
      "Business process mapping",
      "Audit sistem & data",
      "Roadmap adopsi teknologi/AI",
      "Rekomendasi build vs buy",
    ],
    process: [
      { step: "Assessment", description: "Meninjau proses dan sistem yang berjalan saat ini." },
      { step: "Rekomendasi", description: "Menyusun opsi solusi beserta trade-off-nya." },
      { step: "Roadmap", description: "Menentukan prioritas dan tahapan implementasi." },
    ],
    benefit: "Keputusan teknologi yang lebih terarah dan sesuai kapasitas bisnis.",
    faq: [],
    featured: false,
  },
  {
    slug: "managed-it",
    icon: "life-buoy",
    title: "Managed IT Services",
    shortDescription: "Maintenance, monitoring, dan dukungan berkelanjutan untuk sistem Anda.",
    heroDescription: "Sistem yang sudah berjalan tetap butuh yang menjaganya.",
    problem:
      "Setelah sistem go-live, banyak perusahaan tidak punya kapasitas internal untuk maintenance, monitoring, dan penanganan masalah harian.",
    whoFor: [
      "Perusahaan yang baru saja go-live dengan sistem baru",
      "Tim tanpa divisi IT internal yang memadai",
      "Bisnis yang butuh SLA dukungan yang jelas",
    ],
    solution:
      "SAKA menyediakan layanan managed service — mulai dari hosting, monitoring, backup, hingga perbaikan dan enhancement kecil — dengan SLA yang jelas.",
    capabilities: ["Hosting & monitoring", "Backup terjadwal", "Bug fixing & minor enhancement", "Dukungan pengguna"],
    process: [
      { step: "Onboarding", description: "Memahami sistem yang akan didukung." },
      { step: "Monitoring Aktif", description: "Memantau performa dan stabilitas sistem." },
      { step: "Dukungan Rutin", description: "Menangani isu dan permintaan perubahan kecil." },
    ],
    benefit: "Sistem tetap stabil dan berjalan tanpa membebani tim internal Anda.",
    faq: [],
    featured: false,
  },
  {
    slug: "it-procurement",
    icon: "package",
    title: "IT Procurement",
    shortDescription: "Pengadaan perangkat keras, lunak, dan infrastruktur teknologi berbasis kebutuhan proyek.",
    heroDescription: "Pengadaan teknologi yang tepat, tanpa proses berbelit.",
    problem:
      "Pengadaan perangkat IT sering melibatkan banyak vendor terpisah tanpa satu pihak yang bertanggung jawab atas keseluruhan implementasi.",
    whoFor: [
      "Perusahaan yang butuh pengadaan hardware/software terintegrasi dengan proyek sistem",
      "Tim yang ingin satu penanggung jawab untuk pengadaan dan implementasi",
    ],
    solution:
      "SAKA mengelola pengadaan berbasis order — dari hardware, lisensi software, hingga jaringan — terhubung langsung dengan implementasi proyek Anda.",
    capabilities: ["Pengadaan hardware & network", "Lisensi software", "Instalasi & konfigurasi", "Koordinasi dengan partner teknis"],
    process: [
      { step: "Kebutuhan", description: "Menentukan spesifikasi dan anggaran." },
      { step: "Pengadaan", description: "Proses order ke supplier terpercaya." },
      { step: "Instalasi", description: "Pemasangan dan konfigurasi di lokasi Anda." },
    ],
    benefit: "Satu mitra yang bertanggung jawab, dari pengadaan hingga implementasi.",
    faq: [],
    featured: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
