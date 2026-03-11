import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const BASE_URL = "https://si-prima.andhira.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SI-PRIMA — Sistem Informasi Klinik | PT Andhira Teknologi Nusantara",
  description:
    "SI-PRIMA membantu klinik dan praktisi mengelola rekam medis, jadwal, dan laporan secara cepat dan aman. Digitalisasi klinik Anda sekarang — mudah, aman, terintegrasi.",
  keywords: [
    "sistem informasi klinik",
    "rekam medik elektronik",
    "aplikasi klinik",
    "SaaS kesehatan",
    "manajemen klinik",
    "SI-PRIMA",
    "Andhira Teknologi",
  ],
  authors: [{ name: "PT Andhira Teknologi Nusantara", url: BASE_URL }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "SI-PRIMA — Sistem Informasi Klinik Indonesia",
    description:
      "SI-PRIMA membantu klinik dan praktisi mengelola rekam medis, jadwal, dan laporan secara cepat dan aman.",
    siteName: "SI-PRIMA by Andhira Teknologi",
    images: [
      {
        url: "/si-prima-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Dashboard SI-PRIMA — Sistem Informasi Klinik",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI-PRIMA — Sistem Informasi Klinik | PT Andhira Teknologi Nusantara",
    description:
      "Digitalisasi klinik Anda dengan SI-PRIMA — mudah, aman, terintegrasi.",
    images: ["/si-prima-dashboard.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
