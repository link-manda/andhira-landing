"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#services", label: "Layanan" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/95 border border-white/10 shadow-2xl py-3 px-4 sm:px-6"
            : "bg-transparent py-4 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="PT Andhira Teknologi Nusantara - Beranda"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/5 p-1.5 border border-white/10 group-hover:border-[#00c4b4]/40 transition-all duration-300">
              <Image
                src="/logo.webp"
                alt="PT Andhira Teknologi Nusantara"
                width={140}
                height={40}
                className="h-8 w-auto object-contain rounded-xl"
                priority
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-[#00c4b4] to-[#38bdf8] text-[#030712] font-semibold text-xs rounded-full hover:shadow-[0_0_25px_rgba(0,196,180,0.4)] hover:scale-105 transition-all duration-300"
            >
              Konsultasi Gratis
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0b1329] border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-[#00c4b4] hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#00c4b4] to-[#38bdf8] text-[#030712] font-bold text-xs rounded-xl shadow-lg"
              >
                Konsultasi Gratis
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
