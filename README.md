# Reem Borrows — Author Website

Next.js 14 + Tailwind CSS, built from the official "Reem Borrows Author Website
Content Strategy" doc and the DREEM 2025 brand styleguide. Ready to deploy on Vercel.

## Pages included (Phase 1 + 2 of the build roadmap)

- `/` — Home
- `/about-reem-borrows` — About
- `/unfollow-the-leader` — Book page
- `/health-head-heart-framework` — Framework page
- `/speaking` — Speaking / keynotes
- `/work-with-reem` — Coaching, programs, consulting (includes For Individuals
  and For Businesses & Teams sections)
- `/insights` — Insights hub (12 article placeholders from the content strategy)
- `/media` — Media kit / press
- `/resources` — Free resources
- `/contact` — Contact form

Person, Book and Organization schema (GEO/SEO) are injected in `app/layout.tsx`
per the GEO Strategy section of the content doc.

## Brand tokens (from DREEM 2025 styleguide PDF)

| Token | Hex | Use |
|---|---|---|
| `ocean` | #3B5065 | Primary — headers, dark sections, CTAs |
| `oceandark` | #283848 | Footer, deepest contrast sections |
| `cream` | #DBC6AD | Warm background accent |
| `creamlight` | #F4EDE2 | Page background |
| `rose` | #DAB1AD | Accent, secondary CTAs |
| `rosedeep` | #BD8C88 | Hover states, links |

Fonts: Fraunces (display/serif) + Inter (body), loaded via next/font/google.

## Images

`public/images/` contains cropped assets sourced from the supplied key visual
and brand PDF: `reem-portrait.png`, `unfollow-book-cover.png`,
`reem-speaking.jpg`. Replace with final retouched/high-res files when available.

## Videos NOT included

The uploaded .mp4/.MOV files (About_change, About_control, Goal_achieving,
SM_Clip series, etc.) were not embedded — they total several hundred MB,
which is impractical for a git repo / Vercel deploy. Recommended approach:
upload them to YouTube/Vimeo (unlisted or public) and embed via iframe, or
host on a CDN (e.g. Vercel Blob, Mux, Cloudflare Stream) and reference by URL.
Happy to wire up an embed once you confirm hosting.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```
or import the repo at vercel.com → New Project (Next.js auto-detected).

## Next steps / customization

- Swap placeholder images for final retouched photography.
- Connect the contact form (`app/contact/page.tsx`) and newsletter capture to
  an email/CRM provider (Mailchimp, ConvertKit, HubSpot, etc.) — currently
  posts to `#`.
- Write and publish the 12 Insights articles (slugs ready to add under
  `app/insights/[slug]/page.tsx`).
- Add real retailer link for Barnes & Noble.
- Wire up video embeds (see note above).
