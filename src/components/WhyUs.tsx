"use client";

import { motion } from "framer-motion";
import { Users, Cpu, TrendingUp, Handshake, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Tim Profesional",
    description:
      "Didukung oleh tim developer, desainer, dan konsultan IT berpengalaman yang berkomitmen penuh terhadap kualitas dan kepuasan klien.",
  },
  {
    icon: Cpu,
    title: "Pengalaman Teknologi",
    description:
      "Kami menggunakan stack teknologi modern dan terbukti untuk menghadirkan solusi yang andal, aman, dan mudah dipelihara.",
  },
  {
    icon: TrendingUp,
    title: "Solusi Scalable",
    description:
      "Setiap sistem yang kami bangun dirancang untuk tumbuh bersama bisnis Anda — mulai dari startup kecil hingga enterprise besar.",
  },
  {
    icon: Handshake,
    title: "Pendekatan Kolaboratif",
    description:
      "Kami bekerja sebagai mitra, bukan sekadar vendor. Kami memahami kebutuhan bisnis Anda dan terlibat aktif dalam setiap tahap pengembangan.",
  },
  {
    icon: ShieldCheck,
    title: "Dukungan Jangka Panjang",
    description:
      "Komitmen kami tidak berhenti setelah peluncuran. Kami menyediakan maintenance, update, dan dukungan teknis berkelanjutan.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#f8fafc]">
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
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B3C5D] mb-4">
            Mengapa Memilih Andhira?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Kami hadir sebagai mitra teknologi yang dapat dipercaya untuk
            membantu bisnis Anda tumbuh secara berkelanjutan.
          </p>
        </motion.div>

        {/* Grid — 2 + 2 + 1 centered */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            const isLast = idx === reasons.length - 1;
            return (
              <motion.div
                key={r.title}
                variants={item}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group flex gap-4
                  ${isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                `}
              >
                <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#0B3C5D] to-[#00A8A8] rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B3C5D] mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
