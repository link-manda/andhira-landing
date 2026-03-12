"use client";

import Image from "next/image";
import { Instagram, Mail, MessageSquare, Globe } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Pengembangan Sistem Informasi",
  "Pembuatan Aplikasi Web",
  "Solusi SaaS",
  "Integrasi Sistem",
  "Konsultasi Digital",
  "Maintenance & Support",
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/andhira_teknologi",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:sales@andhira-tech.my.id", label: "Email" },
  {
    icon: MessageSquare,
    href: "https://wa.me/62895623318351",
    label: "WhatsApp",
  },
  { icon: Globe, href: "https://andhira-tech.my.id", label: "Website" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#072b44] text-white" aria-label="Footer">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <div className="inline-flex items-center rounded-xl py-2">
                <Image
                  src="/logo-footer.webp"
                  alt="PT Andhira Teknologi Nusantara"
                  width={130}
                  height={40}
                  className="h-13 w-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </a>
            <p className="text-sm text-blue-200/60 leading-relaxed mb-6 max-w-xs">
              Membangun solusi digital yang efisien dan scalable untuk bisnis
              dan organisasi di Indonesia.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#00A8A8] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200/60 hover:text-[#4FC3F7] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-blue-200/60 hover:text-[#4FC3F7] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-blue-200/60">
              <li>
                <a
                  href="mailto:sales@andhira-tech.my.id"
                  className="hover:text-[#4FC3F7] transition-colors break-all"
                >
                  sales@andhira-tech.my.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/62895623318351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4FC3F7] transition-colors"
                >
                  +62 895 6233 18351
                </a>
              </li>
              <li className="leading-relaxed">
                Jl. Cempaka GG.II, Sukawati,
                <br />
                Gianyar, Bali 80582
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-200/40 text-center sm:text-left">
            © {year} PT Andhira Teknologi Nusantara. Hak cipta dilindungi.
          </p>
          <p className="text-xs text-blue-200/30">
            Dibangun dengan ❤ di Bali, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
