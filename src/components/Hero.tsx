"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyek Digital" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "30+", label: "Klien Puas" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center bg-[#030712] overflow-hidden pt-28 pb-16"
      aria-label="Hero — PT Andhira Teknologi Nusantara"
    >
      {/* Dynamic Background Spotlights & Noise Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#00c4b4]/20 via-[#38bdf8]/15 to-transparent rounded-full blur-[40px]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#0b1329]/60 rounded-full blur-[40px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-medium mb-6 hover:border-[#00c4b4]/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c4b4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c4b4]"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#00c4b4]" />
              <span className="tracking-wide">PT Andhira Teknologi Nusantara</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 font-display">
              Sistem Informasi & <span className="text-gradient">Aplikasi Web</span> <br />
              yang Tepat Guna.
            </h1>

            <p className="text-base sm:text-lg text-gray-300/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Kami bantu perusahaan, klinik, dan instansi merancang perangkat lunak yang stabil, aman, dan mudah dioperasikan sehari-hari.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#00c4b4] to-[#38bdf8] text-[#030712] font-bold text-sm rounded-2xl hover:shadow-[0_0_35px_rgba(0,196,180,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 text-gray-200 hover:text-white font-semibold text-sm rounded-2xl hover:bg-white/10 border border-white/10 transition-all duration-200"
              >
                Jelajahi Portofolio
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display font-variant-numeric tabular-nums">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </m.div>

          {/* Right Floating Image & Glass Cards */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Ambient Backlight Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00c4b4]/30 to-[#38bdf8]/20 rounded-3xl blur-xl scale-95" />

            {/* Hero Main Mockup Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-white/15 shadow-2xl">
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/hero-img.webp"
                  alt="Tim PT Andhira Teknologi Nusantara"
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating Glass Badges */}
            <m.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#0b1329]/95 p-4 rounded-2xl border border-white/15 shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00c4b4]/20 border border-[#00c4b4]/30 flex items-center justify-center text-[#00c4b4]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Enterprise Scalable</p>
                <p className="text-[11px] text-gray-400">Arsitektur Teruji & Safe</p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <m.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold text-gray-400 group-hover:text-[#00c4b4] transition-colors">
          Jelajahi
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#00c4b4]" />
      </m.a>
    </section>
  );
}
