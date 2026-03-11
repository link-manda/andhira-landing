"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useLang } from "@/context/LangContext";

const WA_NUMBER = "62895623318351";
const WA_MESSAGE =
  "Halo, saya tertarik dengan SI-PRIMA dan ingin mengetahui lebih lanjut tentang fitur dan harga.";

export default function CTA() {
  const { t } = useLang();
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <section
      id="cta"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #072b44 0%, #0B3C5D 50%, #006b6b 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #00A8A8 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #4FC3F7 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {t.cta.heading}
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subheading}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* WhatsApp CTA */}
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-200 shadow-lg"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 0 0 0 rgba(37,211,102,0.5)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(37,211,102,0.5)",
                  "0 0 0 12px rgba(37,211,102,0)",
                  "0 0 0 0 rgba(37,211,102,0.5)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={22} />
              {t.cta.whatsapp}
            </motion.a>

            {/* Demo CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.cta.demo}
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
