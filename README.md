# SI-PRIMA Landing Page

Landing page statis untuk produk **SI-PRIMA** (SaaS Sistem Informasi Klinik) oleh PT Andhira Teknologi Nusantara.

**Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
# Buka http://localhost:3000
```

## 🏗️ Build & Export Statis

```bash
# Build & export ke folder /out
npm run build

# Cek responsivitas (butuh Puppeteer)
npm run check:responsive
```

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx        ← Metadata, OG tags, font, LangProvider
│   ├── page.tsx          ← Menggabungkan semua komponen
│   └── globals.css       ← Brand tokens (Tailwind v4 @theme)
├── components/           ← 10 TSX components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Features.tsx
│   ├── ProductPreview.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/
│   └── LangContext.tsx   ← Language toggle (id/en)
└── lib/
    └── i18n.ts           ← Semua konten teks
```

## ☁️ Deploy ke Netlify

1. Push repo ke GitHub.
2. Login [Netlify](https://netlify.com) → **New site from Git**.
3. Pilih repo → Build command: `npm run build` → Publish directory: `out`.
4. Klik **Deploy site**.

Atau gunakan `netlify.toml` yang sudah ada di root proyek.

## ✅ Checklist QA Manual

- [ ] Tab navigation dari atas ke bawah (keyboard a11y)
- [ ] Language toggle ID ↔ EN berfungsi di semua section
- [ ] Navbar blur muncul saat scroll
- [ ] Mobile menu buka/tutup di viewport ≤ 768px
- [ ] Gambar tampil benar (dashboard, mobile, workspace)
- [ ] Tombol WhatsApp membuka `wa.me` link
- [ ] Form kontak membuka email client saat submit
- [ ] Semua anchor link scroll ke section yang benar
- [ ] Google Chrome DevTools → iPhone 12 emulation (390px)

## 🔧 Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Development server |
| `npm run build` | Build & static export |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run check:responsive` | Screenshot mobile/desktop via Puppeteer |
