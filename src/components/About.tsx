"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";

const highlights = [
  "Berdedikasi penuh pada standar kualitas tertinggi di setiap proyek",
  "Mengutamakan kebutuhan spesifik & skala operasional klien",
  "Stack teknologi modern, aman, serta siap pakai jangka panjang",
  "Metodologi pengembangan terstruktur dan transparan",
  "Dukungan purna jual & maintenance berkesinambungan",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00c4b4]/10 rounded-full blur-[40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Glass Framed Image */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-card p-3 rounded-3xl border border-white/15 shadow-2xl relative">
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/ecosystem_tech.webp"
                  alt="Tim PT Andhira Teknologi Nusantara"
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Glass Badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#0b1329]/95 p-4 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-tr from-[#00c4b4] to-[#38bdf8] rounded-xl flex items-center justify-center text-[#030712] shrink-0 font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white font-display">
                  Standar Kualitas Tinggi
                </p>
                <p className="text-[11px] text-gray-400">
                  Solusi IT Handal & Aman
                </p>
              </div>
            </m.div>
          </m.div>

          {/* Right: Text Copy */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00c4b4]/10 border border-[#00c4b4]/20 text-[#00c4b4] text-xs font-semibold tracking-wide uppercase mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight font-display">
              Perangkat Lunak yang Didesain untuk <span className="text-gradient">Memudahkan Manusia</span>.
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              PT Andhira Teknologi Nusantara berfokus membangun sistem informasi operasional, aplikasi bisnis, dan produk digital yang langsung menyelesaikan masalah teknis di lapangan.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Kami percaya bahwa teknologi yang dirancang secara matang bukan sekadar keren secara visual, melainkan menjadi fondasi kokoh bagi efisiensi dan pertumbuhan bisnis Anda.
            </p>

            {/* Highlights */}
            <ul className="space-y-3.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00c4b4]/20 border border-[#00c4b4]/40 flex items-center justify-center text-[#00c4b4] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gray-300 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
