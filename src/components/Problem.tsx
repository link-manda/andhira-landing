"use client";

import { motion } from "framer-motion";
import { Clock, Database, FileBarChart } from "lucide-react";
import { useLang } from "@/context/LangContext";

const icons = [Clock, Database, FileBarChart];

export default function Problem() {
  const { t } = useLang();

  return (
    <section id="problem" className="py-20 lg:py-28" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0B3C5D" }}>
            {t.problem.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.problem.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problem.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl p-7 shadow-sm border-l-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ borderLeftColor: "#00A8A8" }}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(0,168,168,0.1)" }}
                >
                  <Icon size={24} style={{ color: "#00A8A8" }} />
                </div>

                <h3
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{ color: "#0B3C5D" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

                {/* Subtle hover accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-0"
                  style={{ backgroundColor: "#00A8A8", transform: "translate(30%, -30%)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
