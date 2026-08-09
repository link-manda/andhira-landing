"use client";

import { m } from "framer-motion";
import { Mail, MessageSquare, Instagram, Globe, MapPin, CheckCircle2 } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email Resmi",
    value: "sales@andhira-tech.my.id",
    href: "mailto:sales@andhira-tech.my.id",
    external: false,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp Direct",
    value: "+62 895 6233 18351",
    href: "https://wa.me/62895623318351?text=Halo%20Andhira%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda.",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram Official",
    value: "@andhira.tech",
    href: "https://instagram.com/andhira.tech",
    external: true,
  },
  {
    icon: Globe,
    label: "Domain Website",
    value: "andhira-tech.my.id",
    href: "https://andhira-tech.my.id",
    external: true,
  },
  {
    icon: MapPin,
    label: "Kantor Operasional",
    value: "Jl. Cempaka GG.II, Sukawati, Gianyar, Bali 80582",
    href: "https://maps.google.com/?q=Sukawati+Gianyar+Bali",
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#070e1b] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#00c4b4]/10 rounded-full blur-[40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Heading Column */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00c4b4]/10 border border-[#00c4b4]/20 text-[#00c4b4] text-xs font-semibold tracking-wide uppercase mb-4">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight font-display">
              Siap Mentransformasi Sistem Anda? <span className="text-gradient">Mari Berdiskusi.</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              Sampaikan kebutuhan sistem atau gagasan produk Anda. Tim spesialis kami siap mendampingi perencanaan dan arsitektur IT terbaik tanpa biaya awal.
            </p>

            {/* Guarantees */}
            <div className="flex flex-col gap-3.5 pt-4 border-t border-white/10">
              {[
                "Respons cepat dalam 1×24 jam kerja",
                "Konsultasi awal 100% gratis",
                "Tanpa keterikatan atau komitmen awal",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00c4b4]/20 border border-[#00c4b4]/40 flex items-center justify-center text-[#00c4b4] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Right Cards Column */}
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {contactItems.map((c) => {
              const Icon = c.icon;
              return (
                <m.a
                  key={c.label}
                  variants={itemVariants}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00c4b4] group-hover:bg-[#00c4b4]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-400 font-medium mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-white group-hover:text-[#00c4b4] transition-colors truncate">
                      {c.value}
                    </p>
                  </div>
                </m.a>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
}
