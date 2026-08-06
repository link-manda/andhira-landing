"use client";

import Image from "next/image";
import { Instagram, Mail, MessageSquare, Globe, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#contact", label: "Kontak" },
];

const services = [
  "Pengembangan Sistem Informasi",
  "Pembuatan Aplikasi Web",
  "Solusi SaaS Custom",
  "Integrasi API & Sistem",
  "Konsultasi Transformasi Digital",
  "Maintenance & IT Support 24/7",
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/andhira.tech",
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
    <footer className="bg-[#030712] text-white border-t border-white/10" aria-label="Footer">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & System Status */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#home" className="inline-block mb-5">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 p-2 border border-white/10 hover:border-[#00c4b4]/40 transition-all duration-300">
                <Image
                  src="/logo-footer.webp"
                  alt="PT Andhira Teknologi Nusantara"
                  width={140}
                  height={40}
                  className="h-9 w-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
            </a>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Rekayasa teknologi digital enterprise yang efisien, aman, dan scalable untuk akselerasi bisnis di Indonesia.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00c4b4] animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-[#00c4b4]" />
              <span>Sistem Operasional 100% Normal</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#00c4b4]/40 hover:bg-[#00c4b4]/10 text-gray-300 hover:text-[#00c4b4] flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#00c4b4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-5">
              Layanan Utama
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-[#00c4b4] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-5">
              Kantor & Kontak
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:sales@andhira-tech.my.id"
                  className="hover:text-[#00c4b4] transition-colors break-all"
                >
                  sales@andhira-tech.my.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/62895623318351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00c4b4] transition-colors"
                >
                  +62 895 6233 18351
                </a>
              </li>
              <li className="leading-relaxed text-xs text-gray-400">
                Jl. Cempaka GG.II, Sukawati,
                <br />
                Gianyar, Bali 80582
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/5 bg-[#01040a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {year} PT Andhira Teknologi Nusantara. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <span>Dirancang & Dikembangkan di Bali, Indonesia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
