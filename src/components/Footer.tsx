"use client";

import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter / X" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    {
      icon: Instagram,
      href: "https://instagram.com/andhira.tech",
      label: "Instagram",
    },
  ];

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: "#072b44" }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-block bg-white/10 rounded-xl p-2 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Logo SI-PRIMA"
                width={130}
                height={44}
                className="h-10 w-auto object-contain rounded-md"
                loading="lazy"
              />
            </div>
            <p className="text-white/40 text-sm font-medium mb-3 italic">
              {t.footer.tagline}
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(0,168,168,0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer.product.heading}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.product.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-[#4FC3F7] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer.company.heading}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.company.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 hover:text-[#4FC3F7] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">{t.footer.copyright}</p>
          <p className="text-white/25 text-xs">
            Dibangun dengan ❤️ oleh tim Andhira Teknologi
          </p>
        </div>
      </div>
    </footer>
  );
}
