# SAKA Solusindo — Website v1.2

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Bilingual (ID default / EN toggle), Resend email notifications, AI Sales Assistant, production-ready for Vercel.

## 1. Setup

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev
```

## 2. Environment variables

| Variable | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | For email to work | From resend.com |
| `RESEND_FROM_EMAIL` | For email to work | Must be a verified sender/domain in Resend |
| `SALES_EMAIL` | For email to work | Inbox that receives inquiries/leads |
| `AI_API_KEY` | For AI assistant | Google Gemini API key (free tier, no credit card — get one at https://aistudio.google.com/app/apikey). Without it, the assistant shows a graceful "currently unavailable" message and the rest of the site still works. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Used for metadata/OG/sitemap |
| `NEXT_PUBLIC_SALES_EMAIL` | Recommended | Public contact email shown in footer/contact page |

Never commit `.env` or `.env.local` — only `.env.example` is included in this ZIP.

## 3. Deploy to Vercel

1. Push this project to a Git repo (GitHub/GitLab).
2. Import the repo in Vercel.
3. Add the environment variables above in Vercel → Project → Settings → Environment Variables.
4. Deploy. Build command `next build` and output are auto-detected — no extra config needed.

## 4. Editing content

- **Text (ID/EN):** `src/content/dictionary.ts`
- **Services (7 pillars):** `src/content/services.ts`
- **Industries:** `src/content/industries.ts`
- **AI assistant knowledge/behavior:** `src/lib/ai-knowledge.ts` — the assistant only uses what's written here. Add real client names, case studies, pricing, or certifications here **only once you have material you can stand behind** — the assistant is instructed never to invent anything beyond this file.
- **Brand colors/fonts:** `tailwind.config.ts` (`saka` color palette) and fonts in `src/app/layout.tsx`.
- **Logo/brand assets:** `public/brand/`.

## 4b. Visuals (v1.2.1)

There are no stock/AI-generated photos in this project (to avoid licensing issues and fabricated imagery). Instead, `src/components/CoverArt.tsx` generates deterministic abstract SVG cover art (navy/blue geometric pattern, unique per page) used in the hero, service cards, and Our Work cards. To swap in real photography later:
- Replace `<CoverArt seed="..." />` with a Next.js `<Image src="/photos/xxx.jpg" fill className="object-cover" />` in: `src/components/Hero.tsx`, `src/components/WorkGrid.tsx`, `src/app/services/[slug]/ServiceDetailClient.tsx`, `src/app/our-work/[slug]/IndustryDetailClient.tsx`.
- Drop real images into `public/photos/`.

Navigation is now 4 items: Home, Services, Our Work, Kontak (About content was folded into a section on the Home page; industries were renamed "Our Work" to read as a portfolio).

## 4c. Struktur navigasi (v1.2.2)

Nav sekarang 5 item ala bcg.com: **Our Services, Our Work, Client Impact, Our Company, Work With Us**. Tidak ada link "Home" eksplisit di nav — klik logo untuk kembali ke beranda (`/`), sama seperti BCG.

Routing lama tetap jalan lewat redirect otomatis di `next.config.mjs` (`/layanan → /services`, `/industri → /our-work`, `/kontak → /work-with-us`, dst) supaya tidak ada broken link.

**Client Impact** sengaja TIDAK berisi klaim hasil/klien spesifik — SAKA belum punya studi kasus publik yang bisa dipakai, jadi halaman ini berisi kerangka kerja & komitmen pengukuran dampak. Ganti isi `t.impact.*` di `src/content/dictionary.ts` begitu ada studi kasus nyata yang boleh dipublikasikan.

## 4d. AI Assistant — Google Gemini

`/api/chat` sudah pakai **Gemini API** (`gemini-2.5-flash`), bukan Anthropic. Env var: `AI_API_KEY` diisi dengan API key dari https://aistudio.google.com/app/apikey (gratis, tanpa kartu kredit).



## 5. What's intentionally NOT included

- No fabricated client names, project outcomes, or financial figures. Client Impact page states this explicitly and offers a measurement framework instead of invented results.
- No named "team" bios/photos — the source company-profile PDFs used placeholder names repeated across every industry deck (a template pattern), so they were not treated as verified real staff. Add real team members yourself in `our-company` when ready.
- No stock/AI-generated photography — see §4b for the abstract SVG placeholder system and where to swap in real images.
- No captcha/paid anti-spam service — uses a free honeypot field + time-trap, sufficient for a low/medium-traffic B2B site.

## 6. Suggested next content additions (manual, once available)

- Real case studies for the Client Impact page (client name or "Confidential Client", challenge, approach, outcome).
- Team members with real names/roles/photos on Our Company.
- Real photography to replace CoverArt placeholders.
- A real business domain for `RESEND_FROM_EMAIL` (Resend requires domain verification).
