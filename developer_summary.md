# Developer Summary — SI-PRIMA Landing Page

## Cara Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → /out
npm run check:responsive  # screenshot QA
```

---

## Ganti Gambar & Logo

| File | Lokasi | Keterangan |
|------|--------|------------|
| Logo | `public/logo.png` | Tampil di Navbar & Footer; rekomendasi PNG transparan |
| Dashboard screenshot | `public/si-prima-dashboard.png` | Dipakai di Hero + ProductPreview |
| Mobile screenshot | `public/si-prima-mobile.png` | Dipakai di Hero (floating) + ProductPreview |
| Workspace photo | `public/workspace.png` | Dipakai di Benefits section |

---

## Edit Konten & Teks

**Semua teks ada di satu file:** `src/lib/i18n.ts`

```
src/lib/i18n.ts → object content.id  (Bahasa Indonesia)
                → object content.en  (Bahasa Inggris)
```

Struktur per section:
- `nav` → Label navigasi & tombol
- `hero` → Headline, subheadline, CTA
- `problem` → 3 pain point cards
- `features` → 6 fitur grid
- `product` → Judul + alt text mockup
- `benefits` → 3 manfaat utama
- `pricing` → 3 tier cards (nama, harga, bullets)
- `cta` → Headline section akhir
- `contact` → Form labels + info kontak
- `footer` → Links + copyright

---

## Nomor WhatsApp

Ganti di `src/components/CTA.tsx`, baris:
```ts
const WA_NUMBER = "628xxxxxxxxx";
```

---

## Ubah Warna Brand

Edit di `src/app/globals.css`, dalam blok `@theme`:

```css
@theme {
  --color-primary:   #0B3C5D;   /* Navy biru */
  --color-secondary: #00A8A8;   /* Teal hijau */
  --color-accent:    #4FC3F7;   /* Biru muda */
}
```

---

## Konfigurasi Harga

Edit di `src/lib/i18n.ts` → `pricing.tiers[]`:
- `name` → Nama paket
- `price` → Harga (teks bebas)
- `period` → Periode (mis. "/bulan")
- `features` → Array bullet poin
- Tier ke-2 (index 1) otomatis jadi "Paling Populer"

---

## Deploy

**Netlify** (recommended):
1. Push ke GitHub
2. Netlify → New site from Git
3. Build command: `npm run build`
4. Publish dir: `out`

`netlify.toml` sudah dikonfigurasi di root project.
