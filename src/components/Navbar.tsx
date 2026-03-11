"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LangContext";

const navLinks = [
  { key: "features", href: "#features" },
  { key: "product", href: "#product" },
  { key: "benefits", href: "#benefits" },
  { key: "pricing", href: "#pricing" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "id" ? "en" : "id");

  const navLabels: Record<string, string> = {
    features: t.nav.features,
    product: t.nav.product,
    benefits: t.nav.benefits,
    pricing: t.nav.pricing,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 px-4" : "py-4 px-0"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-2xl px-6"
            : "bg-transparent px-4 sm:px-6 lg:px-8"
        }`}
        aria-label="Navigasi utama"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 shrink-0"
            aria-label="SI-PRIMA - Beranda"
          >
            <Image
              src="/logo.png"
              alt="Logo SI-PRIMA PT Andhira Teknologi Nusantara"
              width={120}
              height={40}
              className="h-10 w-auto object-contain rounded-sm"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? "text-slate-700 hover:text-[#0B3C5D] hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {navLabels[key]}
              </a>
            ))}
          </div>

          {/* CTA + Lang Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                scrolled
                  ? "border-slate-300 text-slate-600 hover:border-[#00A8A8] hover:text-[#00A8A8]"
                  : "border-white/40 text-white/80 hover:border-white hover:text-white"
              }`}
              aria-label={`Ganti bahasa ke ${lang === "id" ? "English" : "Indonesia"}`}
            >
              {t.nav.langToggle}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-xl transition-all duration-200"
              style={{ backgroundColor: "#00A8A8" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#007a7a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00A8A8")
              }
            >
              {t.nav.demo}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg border border-white/40 text-white/80"
            >
              {t.nav.langToggle}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-3 bg-white rounded-b-2xl">
            {navLinks.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#0B3C5D] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {navLabels[key]}
              </a>
            ))}
            <div className="mt-2 px-4 pb-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2.5 text-sm font-semibold text-white rounded-xl"
                style={{ backgroundColor: "#00A8A8" }}
              >
                {t.nav.demo}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
