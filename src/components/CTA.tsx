"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const WA_NUMBER = "62895623318351";
const WA_MESSAGE =
  "Halo Andhira, saya ingin konsultasi gratis mengenai pengembangan sistem untuk bisnis saya.";

export default function CTA() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <section className="section-padding bg-[#030712] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/15 relative overflow-hidden text-center shadow-2xl">
          {/* Ambient Glow Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00c4b4]/20 via-[#38bdf8]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00c4b4]/10 border border-[#00c4b4]/20 text-[#00c4b4] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Mulai Konsultasi Digital
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-5 font-display">
              Ingin Diskusi Mengenai Kebutuhan Sistem Anda?
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-sans">
              Tim analis kami siap mendengarkan tantangan bisnis Anda dan memberikan rekomendasi solusi teknis. 100% bebas biaya konsultasi awal.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-[#030712] font-bold text-sm rounded-2xl hover:bg-[#20bd5a] transition-all shadow-[0_0_30px_rgba(37,211,102,0.35)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5 fill-[#030712]" />
                Konsultasi WhatsApp Sekarang
              </motion.a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold text-sm rounded-2xl hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all"
              >
                Isi Form Kontak
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
