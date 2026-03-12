import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const BASE_URL = "https://andhira-tech.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "PT Andhira Teknologi Nusantara — Solusi Digital untuk Bisnis Modern",
  description:
    "Andhira membantu bisnis dan organisasi mengembangkan sistem informasi, aplikasi web, dan solusi digital yang efisien dan scalable. Konsultasi gratis.",
  keywords: [
    "PT Andhira Teknologi Nusantara",
    "pengembangan sistem informasi",
    "pembuatan aplikasi web",
    "solusi SaaS Indonesia",
    "konsultasi transformasi digital",
    "integrasi sistem",
    "IT support",
    "software house Indonesia",
    "SI-PRIMA",
  ],
  authors: [{ name: "PT Andhira Teknologi Nusantara", url: BASE_URL }],
  openGraph: {
    type: "website",
    url: BASE_URL,
    title:
      "PT Andhira Teknologi Nusantara — Solusi Digital untuk Bisnis Modern",
    description:
      "Andhira membantu bisnis dan organisasi mengembangkan sistem informasi, aplikasi, dan solusi digital yang efisien dan scalable.",
    siteName: "PT Andhira Teknologi Nusantara",
    images: [
      {
        url: "/workspace.png",
        width: 1200,
        height: 630,
        alt: "PT Andhira Teknologi Nusantara",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Andhira Teknologi Nusantara",
    description: "Solusi Digital untuk Bisnis Modern",
    images: ["/workspace.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
