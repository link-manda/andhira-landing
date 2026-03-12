"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Globe, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@andhira-tech.my.id",
    href: "mailto:sales@andhira-tech.my.id",
    iconBg: "bg-[#0B3C5D]/10",
    iconColor: "text-[#0B3C5D]",
    external: false,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+62 895 6233 18351",
    href: "https://wa.me/62895623318351?text=Halo%20Andhira%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20Anda.",
    iconBg: "bg-[#25D366]/10",
    iconColor: "text-[#25D366]",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@andhira.tech",
    href: "https://instagram.com/andhira.tech",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
    external: true,
  },
  {
    icon: Globe,
    label: "Website",
    value: "andhira-tech.my.id",
    href: "https://andhira-tech.my.id",
    iconBg: "bg-[#00A8A8]/10",
    iconColor: "text-[#00A8A8]",
    external: true,
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Cempaka GG.II, Sukawati, Gianyar, Bali 80582",
    href: "https://maps.google.com/?q=Sukawati+Gianyar+Bali",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    external: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* ── Left: heading ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-5">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-5 leading-tight">
              Siap Berdiskusi?
              <br />
              <span className="text-gradient">Kami Siap Membantu.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Ceritakan kebutuhan bisnis Anda kepada kami. Tim kami akan
              menghubungi Anda dan memberikan konsultasi terbaik tanpa biaya.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-col gap-3">
              {[
                "Respons cepat dalam 1×24 jam",
                "Konsultasi awal gratis",
                "Tidak ada komitmen",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-[#00A8A8]/15 flex items-center justify-center text-[#00A8A8] text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: contact cards ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {contactItems.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  variants={item}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00A8A8]/20 transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.iconBg} ${c.iconColor} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-[#1e293b] group-hover:text-[#00A8A8] transition-colors">
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
