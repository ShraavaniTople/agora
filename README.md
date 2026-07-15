# AGORA Marketing Site

Marketing website for AGORA, a two-sided sales marketplace connecting companies with proven outbound agents.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages as a static export.

Live: https://shraavanitople.github.io/agora

---

## Tech stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router) | Static export, file-based routing, Metadata API |
| Language | TypeScript (strict mode) | Type safety across all components |
| Styling | Tailwind CSS v3 | Utility-first, no runtime overhead |
| Animation | Framer Motion v11 | Scroll-triggered reveals, counter animations |
| Fonts | Geist (via `geist` package) | Self-hosted, no external request |
| Linting | ESLint + eslint-config-next | Next.js recommended rules |
| Formatting | Prettier | Consistent code style |
| Validation | Zod | Schema-based form validation |
| Deployment | GitHub Pages (static export) | Zero-cost, version-controlled deploys |
| CI | GitHub Actions | Lint, type-check, and deploy on every push to main |

---

## Prerequisites

- Node.js 20 or later
- npm 10 or later

---

## Setup

```bash
git clone https://github.com/ShraavaniTople/agora.git
cd agora
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical base URL. Defaults to the GitHub Pages URL. |

No secrets should be added to `NEXT_PUBLIC_` prefixed variables since they are inlined into the client bundle.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Production build (static export to `/out`) |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check without emitting files |
| `npx prettier --write .` | Format all files |

---

## Project structure

```
src/
  app/                    Next.js App Router pages
    page.tsx              Home page
    layout.tsx            Root layout, metadata base, JSON-LD
    sitemap.ts            Auto-generated sitemap.xml
    robots.ts             Auto-generated robots.txt
    error.tsx             Global error boundary
    not-found.tsx         Custom 404 page
    contact/              Contact hub and sub-routes
    services/
    pricing/
    careers/
    privacy-policy/
    terms-conditions/
    security-policy/
    abuse-policy/
  components/
    sections/             Page sections (Hero, Stats, Services, etc.)
    ui/                   Shared UI (Navbar, Footer, Button, etc.)
    forms/                Form field components
    legal/                Legal page layout and helpers
  lib/
    utils.ts              Shared utilities
    validation.ts         Zod schemas for all forms
```

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow which:

1. Runs type-check (`tsc --noEmit`)
2. Runs lint (`next lint`)
3. Builds a static export (`next build` with `output: 'export'`)
4. Deploys the `/out` directory to GitHub Pages

Pull requests run quality checks only (no deploy).

---

## SEO

- Unique `title` and `description` on every page via Next.js Metadata API
- Open Graph and Twitter card tags on all public pages
- `sitemap.xml` generated at build time via `src/app/sitemap.ts`
- `robots.txt` generated at build time via `src/app/robots.ts`
- JSON-LD Organization schema in root layout
- Legal pages (`privacy-policy`, `terms-conditions`, etc.) are marked `noindex`
- `metadataBase` set in root layout so relative URLs resolve correctly

After launch, submit the sitemap URL to Google Search Console:
`https://shraavanitople.github.io/agora/sitemap.xml`

---

## Security

Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS, CSP, Permissions-Policy) are defined in `next.config.ts`. They apply when running Next.js as a Node.js server.

On GitHub Pages (static export), HTTP headers cannot be set by the application. The headers in `next.config.ts` are intentionally kept so they activate automatically if the site is moved to a server-based deployment (Vercel, Railway, etc.).

For static deployments, `X-Frame-Options` and `X-Content-Type-Options` are also set via `<meta http-equiv>` tags in `src/app/layout.tsx` as a partial mitigation.

---

## Forms

Contact forms use Zod schemas (`src/lib/validation.ts`) for client-side validation. Each form includes a hidden honeypot field (`name="website"`) that spam bots tend to fill. Submissions with a non-empty honeypot value are silently discarded.

Server-side validation and rate limiting require a backend API endpoint. Set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` when the API is ready and remove the mock submission delay in the form client files.

---

## Before launch checklist

- [ ] Replace mock form submission with real API endpoint
- [ ] Add Sentry DSN to environment variables and initialise `@sentry/nextjs`
- [ ] Choose one analytics tool (Plausible recommended for privacy) and add the snippet
- [ ] Create a 1200x630 `public/og-image.png` for social sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Run Lighthouse audit and fix any red scores
- [ ] Configure a custom domain and update `NEXT_PUBLIC_SITE_URL`
- [ ] Set up UptimeRobot (free tier) for uptime monitoring

---

## Contributing

1. Create a branch from `main`
2. Make changes
3. Run `npx tsc --noEmit` and `npm run lint` locally before pushing
4. Open a pull request; CI will run quality checks automatically
