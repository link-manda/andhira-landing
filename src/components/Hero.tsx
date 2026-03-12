"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "30+", label: "Klien Puas" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center gradient-hero overflow-hidden pt-16"
      aria-label="Hero — PT Andhira Teknologi Nusantara"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00A8A8]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#4FC3F7]/10 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-14 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00A8A8]/20 border border-[#00A8A8]/30 rounded-full text-[#4FC3F7] text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#00A8A8] rounded-full animate-pulse" />
              PT Andhira Teknologi Nusantara
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Membangun <span className="text-gradient">Solusi Digital</span>
              <br />
              untuk Bisnis Modern
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
              Andhira membantu bisnis dan organisasi mengembangkan sistem
              informasi, aplikasi, dan solusi digital yang efisien dan scalable.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00A8A8] text-white font-semibold rounded-xl hover:bg-[#007a7a] transition-all hover:scale-105 shadow-lg glow-secondary"
              >
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Lihat Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-sm text-blue-200/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#00A8A8]/20 rounded-2xl blur-3xl scale-95" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/hero-img.webp"
                alt="Tim PT Andhira Teknologi Nusantara"
                width={640}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/30 via-transparent to-[#00A8A8]/10" />
            </div>

            {/* Floating: projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3.5 shadow-2xl"
            >
              <p className="text-2xl font-bold text-[#0B3C5D]">50+</p>
              <p className="text-xs text-gray-500 mt-0.5">Proyek Berhasil</p>
            </motion.div>

            {/* Floating: experience */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-5 -right-5 bg-[#00A8A8] rounded-2xl px-5 py-3.5 shadow-2xl"
            >
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="text-xs text-white/80 mt-0.5">Tahun Pengalaman</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
