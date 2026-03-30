You are a senior fullstack frontend engineer + designer agent. Your task: generate a **production-ready, static Next.js (App Router) + TypeScript + Tailwind CSS** one-page landing site for **PT Andhira Teknologi Nusantara** promoting product **SI-PRIMA** (SaaS Sistem Informasi Klinik). Produce ~90% of the work automatically: scaffolding, components, pages, styles, config, sample images placeholders, README, and deploy config for Netlify. Do not ask clarifying questions; assume defaults described below.

PROJECT CONSTRAINTS

- Next.js 14+ App Router, TypeScript.
- Tailwind CSS for styling.
- Mobile-first responsive design.
- Static export (output folder `/out`) ready for Netlify.
- Minimal JS for performance; use Framer Motion only for subtle animations (optional).
- Accessibility (a11y) and SEO best practices.
- Natural Indonesian copy (marketing tone, friendly-professional, not stiff).
- Use the following brand tokens:
  - primary: #0B3C5D
  - secondary: #00A8A8
  - accent: #4FC3F7
- Logo path: `/public/logo.png`
- Screenshots path: `/public/si-prima-dashboard.png`, `/public/si-prima-mobile.png`
- Placeholder workspace image: `/public/workspace.jpg`
- Provide `package.json` scripts: `dev`, `build`, `start`, `export`, `lint`, `format`.
- Create `netlify.toml` with publish = "out" and build command set.

OUTPUT REQUIREMENTS (files to create)

- `app/layout.tsx` with metadata and global layout.
- `app/page.tsx` main landing page that composes components.
- `app/globals.css` (Tailwind import) or `styles/globals.css`.
- `components/` folder with typed TSX components:
  - `Navbar.tsx` (sticky, rounded, mobile menu)
  - `Hero.tsx` (hero mockup with laptop and CTA)
  - `Problem.tsx` (pain points)
  - `Features.tsx` (grid icons + short copy)
  - `ProductPreview.tsx` (device mockups using provided screenshots)
  - `Benefits.tsx` (benefit bullets)
  - `Pricing.tsx` (3-tier simple cards — include contact CTA)
  - `CTA.tsx` (final CTA with WhatsApp link)
  - `Contact.tsx` (email, phone, address placeholders, contact form that posts to a static endpoint or launches mailto)
  - `Footer.tsx` (social links, copyright)
- `next.config.js` configured for static export (`output: "export"` and `images.unoptimized: true`).
- `tailwind.config.js` configured for app and components directory, theme extension for brand colors.
- `postcss.config.js` if needed.
- `netlify.toml`.
- `README.md` with run & deploy steps and Netlify instructions.
- `public/` placeholder assets if provided files missing.
- `tsconfig.json` basic config.

DESIGN & UX RULES

- Mobile-first. Ensure font sizes scale: base 16px, headings using responsive sizes.
- Use semantic HTML (header, main, section, footer).
- Ensure keyboard navigation (menu toggles with aria attributes).
- Hero: headline in Indonesian (natural tone) + subheadline + two CTAs: "Demo Gratis" and "Konsultasi".
- CTA primary uses primary color; secondary uses outline with secondary color.
- Product preview: show laptop mockup with `/public/si-prima-dashboard.png` and phone mockup with `/public/si-prima-mobile.png`.
- Include an overlay gradient behind hero mockup for legibility of hero text.
- Use icons from `lucide-react`. Agent should add the dependency and import icons.

COPYWRITING RULES (critical: use natural Indonesian, not literal translation)

- Tone: profesional namun ramah, entri singkat, manfaat-first (what they get).
- Keep sentences short (<= 18 words ideal), active voice.
- Avoid bureaucratic phrases. Use examples targeted at klinik/UMKM.
- Keep taglines:
  - Primary tagline (English allowed): “Integrating Technology, Empowering Future”
  - Headline and body content must be Indonesian natural-sounding.
- Provide copy for every section, including microcopy for CTA buttons, nav labels, alt text for images, and Open Graph metadata.

PERFORMANCE & SEO

- Include `<meta name="description">` in layout with Indonesian description.
- Add Open Graph tags (og:title, og:description, og:image -> `/public/si-prima-dashboard.png`).
- Generate simple sitemap.xml at `/public/sitemap.xml`.
- Optimize images by creating webp placeholders in `/public` and using `<img>` with `loading="lazy"`.

DEVELOPER EXPERIENCE

- Provide `README.md` describing:
  - How to run locally (`npm install`, `npm run dev`)
  - How to build & export (`npm run build` then `npm run export`)
  - Netlify deployment steps (add site, set build command `npm run build && npm run export`, publish dir `out`)
- Create `LICENSE` as MIT.

TESTS & QA

- Add a lightweight script `npm run check:responsive` that uses `playwright` or `puppeteer` to render `/out/index.html` in mobile and desktop viewports and take screenshots into `/screenshots`. (Agent may scaffold a simple Node script; heavy CI not required.)
- Provide a short checklist in README for manual QA: accessibility (tab navigation), mobile check (iPhone 12 emulation), link check.

POLISH & LOCALIZATION

- Include an `i18n` toggle file with text keys for `id` and `en`. Make default language Indonesian, but add a top-right language toggle that only changes text (no routing).
- Ensure copy for Indonesian side is natural; include sample translated English copy too.

GIT & COMMIT

- Create initial commits and a clear git-friendly README.
- Add `.gitignore` (node_modules, .next, out, .env).

DELIVERABLE: after generating code, produce a short "developer_summary.md" in the project root that lists:

- how to run
- where to replace images & logo
- which files to edit for copy (components/\* files)
- how to change primary colors (tailwind.config.js)

QUALITY EXPECTED FROM AGENT:

- All TypeScript TSX files compile (no type errors).
- Tailwind classes valid.
- No external CSS frameworks besides Tailwind.
- Pages are accessible, responsive, SEO-minded, static-exportable, and visually aligned with brand tokens.

Finally: include sample content in Indonesian (not stiff). Use the following examples for the sections:

Hero:

- Headline: "Digitalisasi Klinik Anda — Mudah, Aman, Terintegrasi."
- Sub: "SI-PRIMA membantu klinik dan praktisi mengelola rekam medis, jadwal, dan laporan secara cepat dan aman."
- CTA primary: "Demo Gratis"
- CTA secondary: "Konsultasi"

Problem bullets:

- "Pencatatan manual memakan waktu"
- "Data pasien tersebar"
- "Pelaporan rumit dan lambat"

Feature short items:

- "Rekam Medik Elektronik"
- "Manajemen Janji & Dokter"
- "Laporan & Analitik"
- "Manajemen Persediaan Obat"
- "Integrasi Lab & Billing"
- "Backup & Keamanan Data"

Benefits:

- "Hemat Waktu Operasional"
- "Akses Data Real-time"
- "Laporan Otomatis untuk Pengambilan Keputusan"

Pricing: create 3 sample tiers (Basic / Klinik / Enterprise) with sample bullets and a CTA "Hubungi Sales".

END PROMPT.
