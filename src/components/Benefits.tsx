"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Benefits() {
  const { t } = useLang();

  return (
    <section id="benefits" className="py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
                style={{ color: "#0B3C5D" }}
              >
                {t.benefits.heading}
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t.benefits.subheading}
              </p>
            </motion.div>

            <div className="space-y-6">
              {t.benefits.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2
                      size={28}
                      style={{ color: "#00A8A8" }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "#0B3C5D" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorator number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="h-px flex-1" style={{ backgroundColor: "#e2e8f0" }} />
              <span className="text-sm text-slate-500 font-medium">
                Dipercaya oleh 500+ klinik di Indonesia
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: "#e2e8f0" }} />
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/workspace.png"
                alt={t.benefits.workspaceAlt}
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(to top right, #0B3C5D 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4"
              style={{ border: "1px solid rgba(0,168,168,0.2)" }}
            >
              <p className="text-2xl font-extrabold" style={{ color: "#00A8A8" }}>
                98%
              </p>
              <p className="text-xs text-slate-500 font-medium">Tingkat Kepuasan Pengguna</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
