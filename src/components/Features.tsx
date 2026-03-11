"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CalendarCheck,
  BarChart3,
  Pill,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { useLang } from "@/context/LangContext";

const icons = [FileText, CalendarCheck, BarChart3, Pill, FlaskConical, ShieldCheck];

export default function Features() {
  const { t } = useLang();

  return (
    <section
      id="features"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: "rgba(0,168,168,0.1)", color: "#00A8A8" }}
          >
            Fitur Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0B3C5D" }}>
            {t.features.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.features.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-slate-100 rounded-2xl p-7 hover:border-[#00A8A8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #0B3C5D 0%, #00A8A8 100%)",
                  }}
                >
                  <Icon size={26} className="text-white" />
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0B3C5D" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

                {/* Arrow indicator on hover */}
                <div
                  className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#00A8A8" }}
                >
                  <span>Pelajari lebih lanjut</span>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
