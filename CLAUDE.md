# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server at localhost:3000
npm run build        # static export to /out (Next.js output: "export")
npm run lint         # eslint src/**/*.{ts,tsx}
npm run format       # prettier src/**/*.{ts,tsx,css}
npm run check:responsive  # puppeteer screenshot check (scripts/check-responsive.js)
```

Deploy target: Netlify. Build output dir: `out/`.

## Architecture

Single-page static site. Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion.

**Content layer** — all copy lives in `src/lib/i18n.ts`. Bilingual (ID/EN). Structure mirrors component sections. Never hardcode strings in components.

**Lang system** — `src/context/LangContext.tsx` wraps the app. Components consume via `useLang()` hook → `{ t, lang, setLang }`. `t` is typed as `typeof content.id`.

**Components** — `src/components/*.tsx`, one file per section. Order on page: `Navbar → Hero → Problem → Features → ProductPreview → Benefits → WhyUs → Portfolio → Services → Pricing → About → CTA → Contact → Footer`.

**Image assets** — in `public/`. Next.js `Image` component used with `unoptimized: true` (required for static export).

**No backend, no API routes, no dynamic routes.** Pure static export.

## Key constraints

- `output: "export"` in next.config.ts — no server features (no `getServerSideProps`, no API routes, no middleware).
- Tailwind v4 — config via CSS (`globals.css`), no `tailwind.config.js`.
- Framer Motion used for animations; keep imports client-component-only.
- `trailingSlash: true` in next.config.ts — affects internal links.
- Brand: PT Andhira Teknologi Nusantara / product SI-PRIMA (klinik SaaS). Primary tagline: "Integrating Technology, Empowering Future". Copy must be natural Indonesian, not literal translation.
