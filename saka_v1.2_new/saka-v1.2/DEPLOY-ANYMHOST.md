# Panduan Deploy ke AnymHost — Cheap Hosting (cPanel)

## Langkah 0 — Cek dulu apakah paketmu support Node.js

1. Login ke **cPanel** AnymHost kamu.
2. Cari di bagian **Software** apakah ada ikon **"Setup Node.js App"**.
   - **Ada** → lanjut ke Langkah 1.
   - **Tidak ada** → hubungi Support AnymHost, tanyakan "apakah paket Cheap Hosting saya support Node.js App / CloudLinux Node.js Selector?". Kalau tidak, kamu perlu upgrade ke Developer Hosting/Cloud Hosting, atau sebagai alternatif gratis, deploy ke **Vercel** (situs ini memang dioptimalkan untuk Vercel — tinggal import project ke vercel.com, gratis untuk pemakaian ini, dan semua fitur otomatis jalan tanpa langkah manual di bawah).

Cheap Hosting biasanya **tidak** menyediakan SSH Terminal, jadi kita build project di komputer kamu dulu, baru upload hasil build-nya.

## Langkah 1 — Build project di komputer kamu

Di komputer kamu (bukan di server):

1. Install Node.js versi 18 atau 20 dari https://nodejs.org (pilih versi **LTS**).
2. Extract `saka_v1.2.zip`.
3. Buka folder itu di Terminal/Command Prompt, lalu jalankan:
   ```bash
   npm install
   npm run build
   ```
4. Buat file `.env.local` (copy dari `.env.example`) dan isi:
   - `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `SALES_EMAIL` (dari akun Resend kamu)
   - `AI_API_KEY` (dari console.anthropic.com — opsional, situs tetap jalan tanpa ini)
   - `NEXT_PUBLIC_SITE_URL` (isi dengan domainmu, misal `https://sakasolusindo.com`)
   - `NEXT_PUBLIC_SALES_EMAIL`
5. Jalankan ulang `npm run build` setelah `.env.local` diisi (supaya `NEXT_PUBLIC_*` ter-embed dengan benar).

Setelah ini, folder project kamu sudah punya `node_modules/` dan `.next/` — ini yang akan diupload.

## Langkah 2 — Buat Node.js App di cPanel

1. cPanel → **Setup Node.js App** → **Create Application**.
2. Isi:
   - **Node.js version**: pilih 18.x atau 20.x (samakan dengan yang kamu pakai di komputer).
   - **Application mode**: Production.
   - **Application root**: misal `saka-app` (JANGAN taruh di folder `public_html` langsung).
   - **Application URL**: pilih domain/subdomain kamu (misal domain utama).
   - **Application startup file**: ketik `server.js`.
3. Klik **Create**. cPanel akan membuatkan folder aplikasi di `/home/USERNAME/saka-app`.

## Langkah 3 — Upload file project

1. Di cPanel → **File Manager**, masuk ke folder `saka-app` (Application root tadi).
2. Upload **seluruh isi** folder project (termasuk `node_modules/`, `.next/`, `server.js`, `package.json`, `.env.local` — rename `.env.local` jadi `.env` setelah upload) — paling gampang: zip seluruh isi folder project di komputer kamu jadi satu file, upload lewat File Manager, lalu klik kanan → **Extract**.
3. Pastikan struktur akhirnya: `saka-app/server.js`, `saka-app/package.json`, `saka-app/.next/`, `saka-app/node_modules/`, `saka-app/.env`, dst — bukan `saka-app/saka-v1.2/server.js` (kalau ke-nested, pindahkan isinya naik satu level).

## Langkah 4 — Environment variables via cPanel (opsional tapi disarankan)

Di halaman **Setup Node.js App**, buka aplikasi kamu → bagian **Environment Variables** → tambahkan satu-satu:
`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `SALES_EMAIL`, `AI_API_KEY`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SALES_EMAIL`.

(File `.env` yang diupload di Langkah 3 sudah cukup untuk sebagian besar setup, tapi mengisi juga di sini lebih aman karena dibaca langsung oleh Passenger.)

## Langkah 5 — Jalankan aplikasi

1. Kembali ke **Setup Node.js App**, klik **Restart** pada aplikasi kamu.
2. Buka domain kamu di browser. Kalau muncul error, cek **Errors log** di halaman yang sama (ikon di app kamu) untuk lihat pesan errornya.

## Troubleshooting singkat

- **502/503 error**: biasanya startup file salah atau `node_modules` tidak lengkap — cek log, pastikan upload tidak terputus.
- **Halaman blank/putih**: cek apakah Node version di cPanel sama dengan yang dipakai saat `npm run build` di komputer.
- **Form/AI tidak jalan tapi halaman lain normal**: cek Environment Variables di Langkah 4, pastikan tidak ada typo.
- **Setiap update konten**: ulangi Langkah 1 (build ulang di komputer) → upload ulang folder `.next/` yang baru → Restart app di cPanel.

## Alternatif yang jauh lebih simpel

Karena situs ini memang dirancang untuk Vercel (zero-config, gratis untuk skala ini, auto-build, auto-HTTPS): kamu bisa pakai Vercel untuk hosting aplikasi, lalu tetap pakai domain yang kamu beli di AnymHost dengan mengarahkan DNS domain tersebut ke Vercel. Ini menghindari semua langkah manual di atas.
