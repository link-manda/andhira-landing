"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

export default function ProductPreview() {
  const { t } = useLang();

  return (
    <section
      id="product"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0B3C5D" }}>
            {t.product.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.product.subheading}
          </p>
        </motion.div>

        {/* Mockup layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Laptop mockup — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid rgba(11,60,93,0.1)" }}
            >
              {/* Browser bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ backgroundColor: "#0B3C5D" }}
              >
                <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
                <div className="flex-1 mx-3 h-5 rounded-full px-3 flex items-center">
                  <span className="text-white/50 text-xs">app.si-prima.id</span>
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src="/si-prima-dashboard.png"
                  alt={t.product.dashboardAlt}
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Phone mockup + Badges — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col items-center gap-8"
          >
            {/* Phone */}
            <div
              className="relative w-52 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                border: "3px solid #0B3C5D",
                background: "#0B3C5D",
              }}
            >
              {/* Notch */}
              <div className="flex justify-center pt-2 pb-1">
                <div className="w-16 h-1.5 rounded-full bg-white/20" />
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[9/19] bg-slate-100 rounded-2xl overflow-hidden mx-1 mb-1">
                <Image
                  src="/si-prima-mobile.png"
                  alt={t.product.mobileAlt}
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                  sizes="208px"
                />
              </div>
            </div>

            {/* Feature badges */}
            <div className="flex flex-col gap-3 w-full">
              {t.product.badges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border"
                  style={{ borderColor: "rgba(0,168,168,0.2)" }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#00A8A8" }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#0B3C5D" }}>
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
