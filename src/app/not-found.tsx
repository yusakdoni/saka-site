import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">404</p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mb-8 max-w-md text-base leading-relaxed text-muted">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-cobalt"
      >
        Kembali ke Beranda
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
