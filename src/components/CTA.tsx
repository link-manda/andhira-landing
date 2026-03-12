"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_NUMBER = "62895623318351";
const WA_MESSAGE =
  "Halo Andhira, saya ingin konsultasi gratis mengenai pengembangan sistem untuk bisnis saya.";

export default function CTA() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00A8A8]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#4FC3F7]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-block px-3 py-1 bg-[#00A8A8]/25 border border-[#00A8A8]/40 text-[#4FC3F7] text-sm font-medium rounded-full mb-6">
            Mulai Perjalanan Digital Anda
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Siap Mengembangkan Sistem
            <br className="hidden sm:block" /> untuk Bisnis Anda?
          </h2>

          <p className="text-blue-100/75 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Konsultasikan kebutuhan sistem Anda bersama tim kami. Gratis, tanpa
            komitmen, dan kami siap membantu Anda menemukan solusi terbaik.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1dbc58] transition-all shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(37,211,102,0.5)",
                  "0 0 0 14px rgba(37,211,102,0)",
                  "0 0 0 0 rgba(37,211,102,0.5)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Gratis via WhatsApp
            </motion.a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/25"
            >
              Hubungi Kami
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
