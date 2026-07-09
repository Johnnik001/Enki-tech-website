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
