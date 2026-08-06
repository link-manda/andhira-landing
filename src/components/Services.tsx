"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Cloud,
  GitMerge,
  Lightbulb,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Pengembangan Sistem Informasi",
    description:
      "Sistem operasional khusus (ERP/CRM/Klinik) yang disesuaikan presisi dengan alur kerja internal dan kebutuhan tim Anda.",
    tag: "Enterprise Core",
    colSpan: "lg:col-span-2",
    accentColor: "from-[#00c4b4] to-[#38bdf8]",
  },
  {
    icon: Globe,
    title: "Pembuatan Aplikasi Web",
    description:
      "Aplikasi web berkecepatan tinggi yang intuitif digunakan oleh pelanggan maupun tim internal di berbagai perangkat.",
    tag: "High Performance",
    colSpan: "lg:col-span-1",
    accentColor: "from-[#38bdf8] to-[#818cf8]",
  },
  {
    icon: Cloud,
    title: "Solusi SaaS Custom",
    description:
      "Kembangkan ide produk berbasis berlangganan dengan arsitektur multi-tenant modern yang siap dipasarkan.",
    tag: "Scalable Platform",
    colSpan: "lg:col-span-1",
    accentColor: "from-[#818cf8] to-[#c084fc]",
  },
  {
    icon: GitMerge,
    title: "Integrasi Sistem & API",
    description:
      "Hubungkan software lama dan layanan cloud baru agar pertukaran data berjalan otomatis tanpa rekap manual.",
    tag: "Automated Data Flow",
    colSpan: "lg:col-span-1",
    accentColor: "from-[#00c4b4] to-[#34d399]",
  },
  {
    icon: Lightbulb,
    title: "Konsultasi Transformasi Digital",
    description:
      "Pendampingan penyusunan roadmap arsitektur IT dan audit efisiensi sistem tanpa istilah teknis yang membingungkan.",
    tag: "Strategic Roadmap",
    colSpan: "lg:col-span-1",
    accentColor: "from-[#fbbf24] to-[#f59e0b]",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support 24/7",
    description:
      "Dukungan teknis proaktif, pemantauan uptime, dan pembaruan keamanan berkala agar bisnis Anda berjalan tanpa henti.",
    tag: "SLA Guaranteed",
    colSpan: "lg:col-span-3",
    accentColor: "from-[#00c4b4] to-[#38bdf8]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#030712] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00c4b4]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00c4b4]/10 border border-[#00c4b4]/20 text-[#00c4b4] text-xs font-semibold tracking-wide uppercase mb-4">
            Layanan Utama
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">
            Layanan Rekayasa Perangkat Lunak untuk Kebutuhan Riil Bisnis
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Kami bangun sistem operasional yang spesifik untuk memangkas tugas berulang dan meningkatkan akurasi data tim Anda.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={itemVariants}
                className={`glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden ${svc.colSpan}`}
              >
                {/* Accent Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00c4b4] group-hover:scale-110 group-hover:bg-[#00c4b4]/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-[#00c4b4] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#00c4b4] group-hover:text-[#38bdf8] transition-colors">
                  <span>Konsultasi Fitur Ini</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
