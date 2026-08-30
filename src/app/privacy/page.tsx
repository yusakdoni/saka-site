import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi SAKA Ananta Solusindo mengenai pengumpulan dan penggunaan data pengguna.",
};

export default function PrivacyPage() {
  return (
    <div className="section-y">
      <div className="container-page max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-ink">Kebijakan Privasi</h1>

        <div className="space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Terakhir diperbarui: Januari 2026. Kebijakan ini menjelaskan bagaimana {site.name}{" "}
            (&quot;SAKA&quot;, &quot;kami&quot;) mengumpulkan, menggunakan, dan melindungi informasi
            yang Anda berikan melalui {site.domain}.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami mengumpulkan informasi yang Anda berikan secara langsung melalui formulir kontak,
              seperti nama, nama perusahaan, email, nomor WhatsApp, dan detail kebutuhan bisnis Anda.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">2. Penggunaan Informasi</h2>
            <p>
              Informasi yang Anda berikan digunakan semata-mata untuk merespons pertanyaan Anda,
              menjadwalkan konsultasi, dan menyampaikan penawaran layanan yang relevan. Kami tidak
              menjual data Anda kepada pihak ketiga.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">3. Penyimpanan &amp; Keamanan</h2>
            <p>
              Data dikirim melalui penyedia layanan email pihak ketiga (Resend) secara terenkripsi.
              Kami menerapkan praktik keamanan wajar untuk melindungi informasi Anda, termasuk validasi
              formulir dan perlindungan anti-spam.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">4. Cookie &amp; Analitik</h2>
            <p>
              Situs ini dapat menggunakan alat analitik (seperti Vercel Analytics atau Google
              Analytics) untuk memahami penggunaan situs secara agregat dan anonim.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">5. Hak Anda</h2>
            <p>
              Anda dapat meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi
              kami melalui {site.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink">6. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan dipublikasikan
              di halaman ini.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
