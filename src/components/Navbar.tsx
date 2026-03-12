"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-md"
    : "bg-transparent";
  const textCol = scrolled ? "text-[#1e293b]" : "text-white";
  const hoverCol = "hover:text-[#00A8A8]";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center shrink-0"
            aria-label="PT Andhira Teknologi Nusantara - Beranda"
          >
            <Image
              src="/logo.png"
              alt="PT Andhira Teknologi Nusantara"
              width={150}
              height={44}
              className="h-9 w-auto rounded-xl"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${textCol} ${hoverCol}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#00A8A8] text-white rounded-xl text-sm font-semibold hover:bg-[#007a7a] transition-all shadow-sm hover:shadow-md"
          >
            Konsultasi Sekarang
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={`md:hidden p-2 rounded-lg transition-colors ${textCol} hover:bg-white/10`}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#1e293b] hover:text-[#00A8A8] hover:bg-[#00A8A8]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full px-5 py-2.5 bg-[#00A8A8] text-white rounded-xl text-sm font-semibold hover:bg-[#007a7a] transition-colors"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
