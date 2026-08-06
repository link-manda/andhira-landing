"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    image: "/si-prima-dashboard.webp",
    badge: "Sistem Informasi Klinik",
    name: "SI-PRIMA",
    description:
      "Platform Sistem Informasi Klinik modern untuk manajemen pasien, rekam medis digital (EMR), dan operasional pelayanan kesehatan terpadu.",
    tags: ["Healthcare IT", "SaaS", "Rekam Medis Digital"],
    cta: "Kunjungi SI-PRIMA",
    href: "https://si-prima.id",
    external: true,
  },
  {
    image: "/atcs-dashboard.png",
    badge: "Smart City & Traffic Control",
    name: "BALI COMMAND CENTER ATCS",
    description:
      "Platform command center Area Traffic Control System Provinsi Bali — pemantauan 255 CCTV real-time, peta interaktif, dan analitik data 8 wilayah.",
    tags: ["Smart City", "ATCS", "Real-time Monitoring"],
    cta: "Buka Live Portal",
    href: "https://atcs.andhira-tech.my.id/",
    external: true,
  },
  {
    image: "/asset-management.png",
    badge: "Enterprise Resource Management",
    name: "Enterprise Asset Management",
    description:
      "Sistem pengelolaan siklus hidup aset perusahaan — pelacakan katalog master, audit unit fisik, distribusi, hingga otomatisasi penyusutan nilai aset.",
    tags: ["Asset Lifecycle", "Enterprise", "RBAC Security"],
    cta: "Detail Platform",
    href: "#contact",
    external: false,
  },
  {
    image: "/ulasduk-app.png",
    badge: "Healthcare & Hospital SaaS",
    name: "UlasDuk (Ulasan Dinas Kependudukan & Pencatatan Sipil Kab. Badung",
    description:
      "Platform online publik berbasis web yang dirancang agar masyarakat dapat memberikan ulasan (rating dan komentar) terkait pelayanan Dukcapil dengan mudah, cepat, dan transparan.",
    tags: ["Government SaaS", "Public Feedback"],
    cta: "Buka UlasDuk",
    href: "https://ulasduk.andhira-tech.web.id/",
    external: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isCarousel = products.length > 3;

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), products.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isCarousel) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [isCarousel, updateScrollState]);

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Background Ambient Halo */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00c4b4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Adaptive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00c4b4]/10 border border-[#00c4b4]/20 text-[#00c4b4] text-xs font-semibold tracking-wide uppercase mb-4">
              Portofolio & Rekam Jejak
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">
              Portofolio Sistem & Produk Digital
            </h2>
            <p className="text-gray-400 max-w-xl text-base sm:text-lg mt-3">
              Beberapa contoh sistem dan aplikasi nyata yang kami kembangkan untuk efisiensi operasional klien.
            </p>
          </div>

          {/* Carousel Navigation Buttons & Counter */}
          {isCarousel && (
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs font-semibold text-gray-400 font-display tabular-nums hidden sm:inline-block">
                {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollLeft}
                  aria-label="Proyek Sebelumnya"
                  className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00c4b4]/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollRight}
                  aria-label="Proyek Berikutnya"
                  className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-gray-300 hover:text-white hover:border-[#00c4b4]/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Portfolio Cards Container */}
        {isCarousel ? (
          /* Carousel Layout (> 3 Items) */
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((p, idx) => (
              <motion.div
                key={p.name + idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-[88%] sm:w-[48%] lg:w-[31%] shrink-0 snap-start glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group relative"
              >
                {/* Media Preview Frame */}
                <div className="relative aspect-[16/10] bg-[#0b1329] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 88vw, (max-width: 1200px) 48vw, 31vw"
                    className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md text-[#38bdf8] border border-white/10">
                    {p.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#00c4b4] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium bg-white/5 text-gray-300 rounded-lg border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <a
                      href={p.href}
                      target={p.external ? "_blank" : undefined}
                      rel={p.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00c4b4] group-hover:text-[#38bdf8] transition-colors"
                    >
                      <span>{p.cta}</span>
                      {p.external ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Standard Grid Layout (<= 3 Items) */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={itemVariants}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group relative"
              >
                {/* Media Preview Frame */}
                <div className="relative aspect-[16/10] bg-[#0b1329] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md text-[#38bdf8] border border-white/10">
                    {p.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#00c4b4] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium bg-white/5 text-gray-300 rounded-lg border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <a
                      href={p.href}
                      target={p.external ? "_blank" : undefined}
                      rel={p.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#00c4b4] group-hover:text-[#38bdf8] transition-colors"
                    >
                      <span>{p.cta}</span>
                      {p.external ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Carousel Bottom Progress Indicator */}
        {isCarousel && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {products.map((p, idx) => (
              <button
                key={p.name + idx}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const cardWidth = scrollRef.current.clientWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
                  scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
                }}
                aria-label={`Ke Proyek ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-gradient-to-r from-[#00c4b4] to-[#38bdf8]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
