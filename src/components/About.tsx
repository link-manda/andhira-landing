"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Berdedikasi penuh pada kualitas di setiap proyek",
  "Mengutamakan kebutuhan dan kepuasan klien",
  "Menggunakan teknologi modern dan terpercaya",
  "Proses pengembangan yang transparan dan terstruktur",
  "Mitra teknologi jangka panjang yang bisa diandalkan",
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* ── Left: image — order-2 on mobile so text renders first ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/workspace.webp"
                alt="Tim PT Andhira Teknologi Nusantara"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative — hidden on mobile to prevent horizontal overflow */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#00A8A8]/15 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-20 h-20 bg-[#4FC3F7]/20 rounded-xl -z-10" />

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0B3C5D] to-[#00A8A8] rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0B3C5D]">
                  Terpercaya & Profesional
                </p>
                <p className="text-xs text-gray-500">
                  Solusi IT terbaik untuk bisnis Anda
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: text — order-1 on mobile so it shows first ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 bg-[#0B3C5D]/10 text-[#0B3C5D] text-sm font-semibold rounded-full mb-5">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-5 leading-tight">
              Teknologi sebagai Fondasi{" "}
              <span className="text-gradient">Pertumbuhan Bisnis</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              PT Andhira Teknologi Nusantara adalah perusahaan teknologi yang
              berfokus pada pengembangan sistem informasi, aplikasi bisnis, dan
              solusi digital yang membantu organisasi bekerja lebih efisien.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Sejak berdiri, kami telah mendampingi berbagai klinik, bisnis
              kecil-menengah, dan organisasi dalam proses digitalisasi mereka.
              Kami percaya bahwa teknologi yang tepat dapat menjadi pembeda
              kompetitif yang signifikan.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A8A8] shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
