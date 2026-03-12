"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe,
  Cloud,
  GitMerge,
  Lightbulb,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Pengembangan Sistem Informasi",
    description:
      "Kami merancang dan membangun sistem informasi yang terintegrasi, scalable, dan disesuaikan dengan kebutuhan operasional bisnis Anda.",
    color: "bg-[#0B3C5D]",
    lightColor: "bg-[#0B3C5D]/10",
    textColor: "text-[#0B3C5D]",
  },
  {
    icon: Globe,
    title: "Pembuatan Aplikasi Web",
    description:
      "Pengembangan aplikasi web modern yang responsif, cepat, dan mudah digunakan — dari landing page hingga platform bisnis kompleks.",
    color: "bg-[#00A8A8]",
    lightColor: "bg-[#00A8A8]/10",
    textColor: "text-[#00A8A8]",
  },
  {
    icon: Cloud,
    title: "Solusi SaaS",
    description:
      "Membangun produk SaaS yang siap pakai untuk menjangkau lebih banyak pengguna dengan model berlangganan yang fleksibel.",
    color: "bg-[#4FC3F7]",
    lightColor: "bg-[#4FC3F7]/10",
    textColor: "text-[#0288d1]",
  },
  {
    icon: GitMerge,
    title: "Integrasi Sistem",
    description:
      "Menghubungkan berbagai sistem dan layanan yang sudah ada agar data mengalir lancar dan proses bisnis berjalan efisien.",
    color: "bg-[#0B3C5D]",
    lightColor: "bg-[#0B3C5D]/10",
    textColor: "text-[#0B3C5D]",
  },
  {
    icon: Lightbulb,
    title: "Konsultasi Transformasi Digital",
    description:
      "Kami membantu organisasi menyusun roadmap digital, memilih teknologi yang tepat, dan mengimplementasikan strategi transformasi.",
    color: "bg-[#00A8A8]",
    lightColor: "bg-[#00A8A8]/10",
    textColor: "text-[#00A8A8]",
  },
  {
    icon: Wrench,
    title: "Maintenance & IT Support",
    description:
      "Layanan dukungan teknis berkelanjutan untuk memastikan sistem Anda selalu berjalan optimal, aman, dan up-to-date.",
    color: "bg-[#4FC3F7]",
    lightColor: "bg-[#4FC3F7]/10",
    textColor: "text-[#0288d1]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#00A8A8]/10 text-[#00A8A8] text-sm font-semibold rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-4">
            Apa yang Kami Tawarkan
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Kami menyediakan berbagai layanan teknologi untuk membantu bisnis
            Anda bertumbuh dan berkembang di era digital.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
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
                variants={item}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 ${svc.lightColor} rounded-xl mb-5 transition-transform group-hover:scale-110`}
                >
                  <Icon className={`w-6 h-6 ${svc.textColor}`} />
                </div>
                <h3 className={`text-lg font-bold ${svc.textColor} mb-2`}>
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
