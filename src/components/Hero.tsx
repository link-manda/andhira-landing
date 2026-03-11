"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #072b44 0%, #0B3C5D 45%, #006b6b 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00A8A8 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #4FC3F7 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "rgba(0,168,168,0.2)", color: "#4FC3F7" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#4FC3F7] animate-pulse" />
                {t.hero.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              {t.hero.headline.split("—")[0]}
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #00A8A8, #4FC3F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.hero.headline.includes("—") ? "— " + t.hero.headline.split("—")[1] : ""}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#00A8A8",
                  boxShadow: "0 8px 32px rgba(0,168,168,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007a7a")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00A8A8")}
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              >
                <MessageCircle size={18} />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex gap-8 flex-wrap"
            >
              {[
                { value: "500+", label: "Klinik Aktif" },
                { value: "99.9%", label: "Uptime" },
                { value: "< 1 Jam", label: "Setup Awal" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Laptop frame */}
            <div className="relative w-full max-w-lg">
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-30 blur-3xl rounded-3xl"
                style={{ backgroundColor: "#00A8A8" }}
              />

              {/* Browser frame */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {/* Browser top bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <div
                    className="flex-1 mx-3 h-5 rounded-md"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  />
                </div>
                {/* Dashboard screenshot */}
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/si-prima-dashboard.png"
                    alt={t.hero.imageAlt}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating phone mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 w-28 rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <Image
                  src="/si-prima-mobile.png"
                  alt="SI-PRIMA di perangkat mobile"
                  width={112}
                  height={200}
                  className="w-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        />
      </motion.div>
    </section>
  );
}
