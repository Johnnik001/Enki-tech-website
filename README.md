# Enki Tech Website

Professional static Next.js website for **Enki Tech EOOD**.

## Purpose

This website is designed as a B2B credibility and sales asset for Enki Tech: Microsoft Cloud, Digital Collaboration, Azure, Identity, Endpoint, Security, Automation and AI-enhanced IT Operations consulting across Europe.

## Pages included

- `/` — Home
- `/services/` — Service lines and engagement models
- `/experience/` — Sanitized enterprise experience cards
- `/about/` — Company and founder positioning
- `/insights/` — Planned thought-leadership topics
- `/contact/` — Email, LinkedIn and qualification prompts
- `/legal/privacy/` — Starter privacy notice

## Tech stack

- Next.js App Router
- TypeScript
- Static export via `output: 'export'`
- No external UI framework
- No tracking scripts by default
- Fully responsive CSS

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Because `output: 'export'` is enabled in `next.config.mjs`, the static site will be generated into the `out/` folder.

## Deployment options

Recommended options:

1. **Vercel** — simplest for Next.js.
2. **Netlify** — good for static hosting and form handling.
3. **Cloudflare Pages** — strong performance and security.
4. **Static hosting** — upload the `out/` folder to any static web host.

## Before launch checklist

1. Domain configured in `data/site.ts`: `https://enki-tech.eu`.
2. Temporary contact email configured in `data/site.ts`: `ytsvetov@hotmail.com`. Replace with `contact@enki-tech.eu` after the Microsoft 365 mailbox is created and tested.
3. Confirm the LinkedIn Company Page URL after creation. Current planned URL: `https://www.linkedin.com/company/enki-tech-eood/`.
4. Review all NATO/NCIA-related wording for confidentiality and endorsement risk.
5. Decide whether to add analytics. If yes, update privacy/cookie text.
6. Add a real contact form provider if required: Netlify Forms, Formspree, HubSpot, Zoho or custom API.
7. Add company logo when the final logo is approved.
8. Connect domain and SSL.
9. Submit sitemap to Google Search Console.

## Important wording rule

Do not use phrases such as:

- “Trusted by NATO”
- “Official NATO partner”
- “NATO consultant”

Use safer language such as:

- “Experience in NATO/NCIA-related digital collaboration environments through established contracting channels.”
- “Secure collaboration operations experience in highly regulated environments.”

## Next recommended assets

- Capability Statement PDF
- Company Profile PDF
- LinkedIn company page content
- Case study one-pagers
- Blog article drafts
- Outreach email sequences


## Temporary launch note

The official mailbox `contact@enki-tech.eu` is planned but not active yet. Until it is created and tested, the website uses `ytsvetov@hotmail.com` as the contact email.


## Design v2 update

- Reduced oversized H1 typography on Home and inner pages.
- Reduced hero/page hero vertical spacing.
- Added separate desktop/mobile typography rules for a more premium enterprise layout.
- Kept the site as JS-only, no-alias imports, static export compatible.


## Logo assets

The approved Enki Tech logo concept is included under `public/logo/`:

- `enki-tech-logo-horizontal.svg`
- `enki-tech-logo-horizontal-white.svg`
- `enki-tech-logo-monochrome.svg`
- `enki-tech-mark.svg`
- `enki-tech-mark-white.svg`
- PNG exports for LinkedIn and general use

The website header/footer currently use `enki-tech-logo-horizontal-white.svg`.


## Brand system v1

Approved Enki Tech brand direction is based on the primary geometric ET mark and Inter typography.

Core assets:
- `/public/logo/enki-tech-logo-horizontal.svg` — primary light-background logo
- `/public/logo/enki-tech-logo-horizontal-white.svg` — primary dark-background logo
- `/public/logo/enki-tech-mark.svg` — compact mark / favicon source
- `/public/logo/linkedin-company-logo.png` — LinkedIn company avatar
- `/public/logo/linkedin-cover.png` — LinkedIn company cover image

Core palette:
- Deep navy: `#0B1D3A`
- Corporate blue: `#143A6B`
- Accent blue: `#2563EB`
- Cool gray: `#8A919C`
- Silver: `#D9DDE3`
- Light background: `#F2F4F7`

Typography: Inter, with system sans-serif fallback.

## Approved logo source

The website now uses the exact approved first logo variant selected from the brand board, exported as raster assets from the approved reference image:

- `/public/logo/enki-tech-logo-horizontal-white-exact.png` — header/footer on dark backgrounds
- `/public/logo/enki-tech-logo-horizontal-exact.png` — horizontal color logo for white backgrounds/documents
- `/public/logo/enki-tech-mark-exact.png` — compact mark for LinkedIn/favicon-style usage
- `/public/logo/linkedin-company-logo.png` — LinkedIn company profile logo
- `/public/logo/linkedin-cover.png` — LinkedIn cover image

Do not replace these with the earlier generated SVG variants unless a new logo version is explicitly approved.
