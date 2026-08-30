export interface Article {
  slug: string;
  title: string;
  category:
    | "Business Technology"
    | "ERP"
    | "Data & BI"
    | "AI & Automation"
    | "Digital Transformation"
    | "Business Operations";
  excerpt: string;
  content: string[];
  publishedAt: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "kapan-bisnis-butuh-erp",
    title: "Kapan Bisnis Anda Sebenarnya Butuh Sistem ERP?",
    category: "ERP",
    excerpt:
      "Tidak semua bisnis butuh ERP di tahap awal. Berikut tanda-tanda proses bisnis Anda sudah siap untuk sistem yang lebih terintegrasi.",
    content: [
      "Banyak perusahaan tergesa-gesa membeli sistem ERP sebelum benar-benar memahami proses bisnis mereka sendiri. Akibatnya, sistem yang dibeli sering tidak terpakai maksimal.",
      "Tanda paling jelas bahwa bisnis Anda butuh ERP adalah ketika data mulai tidak sinkron antar divisi — misalnya tim gudang dan tim keuangan memiliki angka stok yang berbeda.",
      "Tanda lain adalah ketika laporan manajemen memakan waktu lebih dari beberapa hari untuk disusun secara manual, atau ketika keputusan bisnis penting harus menunggu rekonsiliasi data.",
      "Sebelum membangun ERP, langkah pertama yang lebih murah dan cepat adalah memetakan proses bisnis Anda saat ini. Dari situ, baru bisa ditentukan modul apa yang benar-benar dibutuhkan.",
    ],
    publishedAt: "2026-01-15",
    image: "/images/insights/kapan-bisnis-butuh-erp.svg",
  },
  {
    slug: "dashboard-vs-laporan-manual",
    title: "Dashboard vs Laporan Manual: Mana yang Benar-Benar Dibutuhkan Tim Anda?",
    category: "Data & BI",
    excerpt:
      "Dashboard yang bagus bukan yang paling banyak grafiknya, tapi yang benar-benar dipakai untuk mengambil keputusan.",
    content: [
      "Banyak perusahaan membangun dashboard yang penuh dengan grafik, tapi jarang dibuka oleh manajemen karena tidak menjawab pertanyaan bisnis yang sebenarnya.",
      "Dashboard yang efektif dimulai dari pertanyaan, bukan dari data. Sebelum membangun visualisasi, tentukan dulu keputusan apa yang ingin diambil dari data tersebut.",
      "Laporan manual masih relevan untuk kebutuhan ad-hoc, tetapi untuk metrik yang dipantau rutin — seperti penjualan harian atau status inventori — dashboard otomatis jauh lebih efisien.",
    ],
    publishedAt: "2026-01-22",
    image: "/images/insights/dashboard-vs-laporan-manual.svg",
  },
  {
    slug: "mulai-otomasi-tanpa-tim-teknis-besar",
    title: "Cara Memulai Otomasi Bisnis Tanpa Tim Teknis Besar",
    category: "AI & Automation",
    excerpt:
      "Anda tidak perlu tim engineering besar untuk mulai mengotomasi proses bisnis yang repetitif.",
    content: [
      "Otomasi tidak harus dimulai dari proyek besar. Mulailah dari satu proses repetitif yang paling banyak menghabiskan waktu tim — misalnya follow-up pelanggan atau input data manual.",
      "Banyak alat otomasi modern bisa terhubung langsung dengan WhatsApp, email, dan spreadsheet tanpa perlu membangun sistem dari nol.",
      "Yang lebih penting dari alat adalah kejelasan alur kerja. Petakan dulu langkah-langkah proses secara manual sebelum menentukan bagian mana yang bisa diotomasi.",
    ],
    publishedAt: "2026-02-03",
    image: "/images/insights/mulai-otomasi-tanpa-tim-teknis-besar.svg",
  },
  {
    slug: "tanda-website-tidak-menghasilkan-lead",
    title: "5 Tanda Website Perusahaan Anda Tidak Menghasilkan Lead",
    category: "Digital Transformation",
    excerpt: "Website yang terlihat bagus belum tentu efektif menghasilkan calon pelanggan.",
    content: [
      "Tanda pertama adalah tidak adanya formulir atau CTA yang jelas di setiap halaman utama.",
      "Tanda kedua adalah waktu muat halaman yang lambat, yang membuat calon pelanggan meninggalkan situs sebelum sempat membaca konten.",
      "Tanda ketiga adalah konten yang terlalu umum sehingga tidak menjawab masalah spesifik calon pelanggan.",
      "Tanda keempat adalah tidak adanya struktur SEO yang jelas, sehingga website sulit ditemukan di pencarian.",
      "Tanda kelima adalah tidak adanya proses tindak lanjut setelah lead masuk — formulir terisi tapi tidak ada yang menghubungi dalam waktu wajar.",
    ],
    publishedAt: "2026-02-10",
    image: "/images/insights/tanda-website-tidak-menghasilkan-lead.svg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
