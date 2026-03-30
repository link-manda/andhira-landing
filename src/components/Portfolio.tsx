"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const products = [
  {
    image: "/si-prima-dashboard.webp",
    badge: "Sistem Informasi Klinik",
    badgeColor: "bg-[#00A8A8]/10 text-[#00A8A8]",
    name: "SI-PRIMA",
    description:
      "Sistem Informasi Klinik modern untuk manajemen pasien, rekam medis digital, dan operasional klinik yang terintegrasi dan mudah digunakan.",
    tags: ["Healthcare IT", "SaaS", "Rekam Medis"],
    cta: "Lihat Produk",
    href: "https://si-prima.id",
    external: true,
  },
  {
    image: "/atcs-dashboard.png",
    badge: "Sistem Manajemen Lalu Lintas",
    badgeColor: "bg-[#0B3C5D]/10 text-[#0B3C5D]",
    name: "BALI COMMAND CENTER",
    description:
      "Platform command center ATCS (Area Traffic Control System) Provinsi Bali — monitoring 92 kamera CCTV secara real-time, peta persebaran interaktif, dan analitik lalu lintas 8 kabupaten/kota.",
    tags: ["ATCS", "Smart City", "Real-time Monitoring"],
    cta: "Lihat Produk",
    href: "https://atcs.andhira-tech.my.id/",
    external: true,
  },
];

const placeholder = {
  name: "Produk Berikutnya",
  description:
    "Kami terus berinovasi mengembangkan solusi digital baru. Tetap pantau untuk mengetahui produk terbaru kami.",
  comingSoon: true,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#0B3C5D]/10 text-[#0B3C5D] text-sm font-semibold rounded-full mb-4">
            Portfolio & Produk
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-4">
            Produk yang Kami Kembangkan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Kami membangun produk digital yang menjawab kebutuhan nyata industri
            dan membantu organisasi bekerja lebih efisien.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Real products */}
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 card-hover flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-[#0B3C5D] to-[#00A8A8] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/50 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                <span
                  className={`self-start px-2.5 py-1 text-xs font-semibold rounded-full mb-3 ${p.badgeColor}`}
                >
                  {p.badge}
                </span>

                <h3 className="text-xl font-bold text-[#0B3C5D] mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-[#00A8A8] font-semibold text-sm hover:gap-2.5 transition-all group"
                >
                  {p.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Coming soon placeholder */}
          <motion.div
            variants={item}
            className="bg-[#f8fafc] rounded-2xl overflow-hidden border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 sm:p-10 text-center min-h-[260px] sm:min-h-[360px]"
          >
            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-400 mb-2">
              {placeholder.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {placeholder.description}
            </p>
            <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-semibold rounded-full">
              Coming Soon
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
