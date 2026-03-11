"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Pricing() {
  const { t } = useLang();

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0B3C5D" }}>
            {t.pricing.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.pricing.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {t.pricing.tiers.map((tier, index) => {
            const isPopular = index === 1;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  isPopular
                    ? "shadow-2xl ring-2"
                    : "bg-white shadow-sm border border-slate-100 hover:shadow-lg"
                }`}
                style={
                  isPopular
                    ? {
                        background: "linear-gradient(135deg, #0B3C5D 0%, #1a5276 100%)",
                        boxShadow: "0 0 0 2px #00A8A8",
                      }
                    : {}
                }
              >
                {/* Popular badge */}
                {isPopular && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: "#00A8A8" }}
                  >
                    ⭐ {t.pricing.popular}
                  </span>
                )}

                <h3
                  className={`text-xl font-extrabold mb-1 ${
                    isPopular ? "text-white" : "text-[#0B3C5D]"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${isPopular ? "text-white/70" : "text-slate-500"}`}>
                  {tier.description}
                </p>

                <div className={`mb-6 ${isPopular ? "text-white" : "text-[#0B3C5D]"}`}>
                  <span className="text-2xl font-extrabold">{tier.price}</span>
                  <span className={`text-sm ml-1 ${isPopular ? "text-white/60" : "text-slate-500"}`}>
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={18}
                        className="shrink-0 mt-0.5"
                        style={{ color: isPopular ? "#4FC3F7" : "#00A8A8" }}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          isPopular ? "text-white/85" : "text-slate-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isPopular
                      ? "bg-white text-[#0B3C5D] hover:bg-[#4FC3F7] hover:text-white"
                      : "bg-[#0B3C5D] text-white hover:bg-[#00A8A8]"
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          Semua paket sudah termasuk onboarding gratis dan garansi uang kembali 14 hari. Butuh demo?{" "}
          <a href="#contact" className="font-semibold underline" style={{ color: "#00A8A8" }}>
            Hubungi tim kami.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
