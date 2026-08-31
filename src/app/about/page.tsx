import type { Metadata } from "next";
import { credibilityPillars } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "SAKA Ananta Solusindo — perusahaan solusi teknologi bisnis yang lean, modern, dan berorientasi hasil.",
};

const principles = [
  {
    title: "Business-First",
    description:
      "Setiap solusi teknologi yang kami bangun dimulai dari pertanyaan: masalah bisnis apa yang sedang diselesaikan?",
  },
  {
    title: "Lean & AI-Assisted",
    description:
      "Kami menjaga struktur tetap ramping dan memanfaatkan AI untuk mempercepat delivery, sehingga proses kerja tetap efisien tanpa mengorbankan standar kualitas.",
  },
  {
    title: "Specialist Scope Management",
    description:
      "Untuk kebutuhan spesialis seperti cybersecurity, cloud, atau infrastruktur kompleks, kebutuhan tersebut dipetakan sejak awal. Jika memerlukan pihak spesialis atau vendor eksternal, opsi dan tanggung jawabnya dibahas transparan bersama klien.",
  },
  {
    title: "Transparan & Bertanggung Jawab",
    description:
      "Kami tidak membesar-besarkan kapasitas atau hasil. Informasi proyek dan kapabilitas disampaikan sesuai implementasi dan ruang lingkup yang dapat dipertanggungjawabkan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <div className="container-page py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Tentang Kami</p>
          <h1 className="mb-6 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Kami membantu bisnis menyelesaikan masalah menggunakan teknologi yang tepat.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            SAKA tidak sekadar membuat teknologi. Kami membantu bisnis menyelesaikan masalah
            menggunakan teknologi yang tepat — mulai dari sistem operasional, data, hingga otomasi.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink">Siapa Kami</h2>
            <p className="mb-4 leading-relaxed text-muted">
              SAKA Ananta Solusindo adalah perusahaan solusi teknologi bisnis yang berfokus pada
              penyelesaian masalah operasional, data, dan pertumbuhan melalui pendekatan yang praktis
              dan terukur.
            </p>
            <p className="leading-relaxed text-muted">
              Kami beroperasi secara lean dan memanfaatkan AI untuk membantu mempercepat proses
              analisis, pengembangan, dokumentasi, dan delivery. Kebutuhan yang berada di luar scope
              utama akan dipetakan dan dibahas transparan sebelum masuk ke cakupan proyek.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-ink">Bagaimana Kami Bekerja</h2>
            <p className="mb-4 leading-relaxed text-muted">
              Proses kerja kami dimulai dari discovery untuk memahami proses bisnis Anda secara
              menyeluruh, dilanjutkan dengan perancangan solusi, delivery bertahap, dan dukungan
              berkelanjutan setelah sistem berjalan.
            </p>
            <p className="leading-relaxed text-muted">
              Kami menghindari pendekatan satu ukuran untuk semua — setiap solusi disesuaikan dengan
              skala dan kompleksitas bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-soft">
        <div className="container-page">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-ink">Prinsip Operasional</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-xl2 border border-line bg-white p-6">
                <h3 className="mb-2 text-base font-semibold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-ink">Yang Kami Pegang Teguh</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityPillars.map((p) => (
              <div key={p.title}>
                <h3 className="mb-2 text-base font-semibold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
