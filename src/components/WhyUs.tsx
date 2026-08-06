"use client";

import { motion } from "framer-motion";
import { Users, Cpu, TrendingUp, Handshake, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Tim Profesional Berdedikasi",
    description:
      "Tim software engineer, UI/UX designer, dan IT consultant berpengalaman yang berdedikasi penuh menjaga standar kualitas tertinggi.",
    badge: "Expertise",
  },
  {
    icon: Cpu,
    title: "Stack Teknologi Teruji",
    description:
      "Memanfaatkan ekosistem teknologi modern, aman, dan berkinerja tinggi yang siap menopang pertumbuhan skala besar.",
    badge: "Modern Stack",
  },
  {
    icon: TrendingUp,
    title: "Arsitektur Scalable",
    description:
      "Sistem dirancang modular untuk tumbuh berdampingan dengan skala bisnis Anda — dari solusi startup hingga tingkat enterprise.",
    badge: "High Scalability",
  },
  {
    icon: Handshake,
    title: "Pendekatan Kolaboratif & Transparan",
    description:
      "Kami bertindak sebagai mitra strategis, berkolaborasi secara intensif dan memberikan pelaporan transparan di setiap fase proyek.",
    badge: "Strategic Partner",
  },
  {
    icon: ShieldCheck,
    title: "Dukungan & Garansi Jangka Panjang",
    description:
      "Layanan purna jual menyeluruh meliputi pemeliharaan sistem, keamanan jaringan, dan pembaruan berkala.",
    badge: "Long-term SLA",
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#070e1b] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-semibold tracking-wide uppercase mb-4">
            Komitmen Kami
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">
            Alasan Klien Mempercayakan Pengembangan Sistem pada Andhira
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Kami bertindak sebagai mitra teknis yang mendampingi perencanaan arsitektur hingga pemeliharaan jangka panjang.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
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
                variants={itemVariants}
                className={`glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between group relative ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00c4b4]/20 to-[#38bdf8]/20 border border-[#00c4b4]/30 flex items-center justify-center text-[#00c4b4] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#38bdf8] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-[#00c4b4] transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
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
