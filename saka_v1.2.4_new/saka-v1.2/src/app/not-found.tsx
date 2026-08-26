import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-head text-3xl font-bold text-saka-navy">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-md text-saka-gray">
        Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link href="/" className="btn-primary mt-6">
        Kembali ke Beranda
      </Link>
    </section>
  );
}
