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
| `AI_API_KEY` | For AI assistant | Anthropic API key. Without it, the assistant shows a graceful "currently unavailable" message and the rest of the site still works. |
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

## 5. What's intentionally NOT included

- No fabricated client names, project outcomes, or financial figures. The previous v1 static site included illustrative/placeholder numbers presented as real case studies — these were removed. Add real case studies once you have material that can be published safely (see §6).
- No named "team" bios/photos — the source company-profile PDFs used placeholder names repeated across every industry deck (a template pattern), so they were not treated as verified real staff. Add real team members yourself in `tentang-kami` when ready.
- No captcha/paid anti-spam service — uses a free honeypot field + time-trap, sufficient for a low/medium-traffic B2B site.

## 6. Suggested next content additions (manual, once available)

- Real case studies (client name or "Confidential Client", challenge, approach, outcome).
- Team members with real names/roles/photos.
- A real business domain for `RESEND_FROM_EMAIL` (Resend requires domain verification).
