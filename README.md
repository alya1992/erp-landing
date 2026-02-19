# 3DPrint ERP — Landing Page

Standalone landing page for 3DPrint ERP, extracted for designer collaboration.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **next-intl** — i18n (uk/en, default: uk)
- **lucide-react** — icons
- **react-hook-form + zod** — login form validation

## Quick Start

```bash
# 1. Install dependencies (--include=dev is required if npm has omit=dev in config)
npm install --include=dev

# 2. Start dev server
npm run dev
```

Dev server runs at **http://localhost:3000**.

## Pages

| Route | Description |
|---|---|
| `/` (`/uk`, `/en`) | Main landing page — 8 sections (hero, pain points, features, how it works, deep dive, integrations, why us, CTA) |
| `/login` (`/uk/login`, `/en/login`) | Login form (visual stub, no real auth backend) |
| `/try` (`/uk/try`, `/en/try`) | Request access form (stub, logs to console) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (Poppins font, metadata)
│   ├── globals.css                   # Tailwind v4 import
│   └── [locale]/
│       ├── layout.tsx                # Locale layout (NextIntlClientProvider)
│       ├── (landing)/
│       │   ├── layout.tsx            # Landing layout (Inter font, header + footer, gradient bg)
│       │   ├── landing.css           # Landing-scoped CSS
│       │   ├── page.tsx              # Main landing page
│       │   └── try/page.tsx          # Request access page
│       └── (auth)/
│           ├── layout.tsx            # Auth layout (gradient bg, centered, logo top-left)
│           └── login/page.tsx        # Login page
├── components/landing/               # All landing section components
│   ├── landing-header.tsx            # Sticky header with nav, lang switcher, login/try buttons
│   ├── landing-footer.tsx            # Footer
│   ├── landing-container.tsx         # Max-width container (1060px/1360px)
│   ├── landing-section.tsx           # Section wrapper with bg variants
│   ├── hero-section.tsx              # Hero with mock orders table
│   ├── pain-points-section.tsx       # 4 pain-point cards
│   ├── features-section.tsx          # 6 feature cards
│   ├── how-it-works-section.tsx      # 3-step flow
│   ├── deep-dive-section.tsx         # 3 module deep-dives with mock visuals
│   ├── integrations-section.tsx      # 4 integration cards (Monobank, NP, UP, Bambu)
│   ├── why-us-section.tsx            # 4 value-prop cards
│   ├── cta-section.tsx               # Final CTA
│   ├── mobile-menu.tsx               # Mobile hamburger menu (client component)
│   └── request-access-form.tsx       # Email form on /try (client component, stub)
├── i18n/
│   ├── routing.ts                    # Locale routing config
│   ├── navigation.ts                 # i18n-aware Link, redirect, etc.
│   └── request.ts                    # Server-side i18n config
├── lib/
│   └── utils.ts                      # cn() helper (clsx + tailwind-merge)
└── middleware.ts                      # Locale detection middleware
messages/
├── uk.json                           # Ukrainian translations (default)
└── en.json                           # English translations
public/logo/                          # Logos (ERP, Monobank, NP, Ukrposhta, Bambu Lab)
```

## i18n

- Default locale: `uk` (Ukrainian)
- Available: `uk`, `en`
- Translation files: `messages/uk.json`, `messages/en.json`
- Namespaces: `Landing`, `Auth`, `TryPage`

## Design Tokens

| Token | Value |
|---|---|
| Primary green | `#6AA570` |
| Green hover | `#5A9460` |
| Dark text | `#1F2937` |
| Muted text | `#6B7280` |
| Warm border | `#E9DCC6` |
| Warm bg | `#FFF7E8` |
| Accent copper | `#BF9773` |
| Page gradient | `#FFF9F2 → #FFFDF8 → #F7FAFF` |

## Fonts

- **Poppins** — headings, logo, branding
- **Inter** — body text within landing and auth pages

## Notes

- All forms are **visual stubs** — no backend, no database, no API routes
- The login form validates inputs client-side but always shows "invalid credentials" on submit
- The request access form logs to console and shows success state
- Header "Login" button links to `/login`
- This project mirrors the landing from the main ERP app (`sonyasha.erp`) for designer handoff
