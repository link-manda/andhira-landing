"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    clinic: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Pertanyaan dari ${form.name} - ${form.clinic}`;
    const body = `Nama: ${form.name}\nEmail: ${form.email}\nInstansi: ${form.clinic}\n\nPesan:\n${form.message}`;
    const mailtoLink = `mailto:info@andhira.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const infoItems = [
    { icon: Mail, label: t.contact.info.emailLabel, value: t.contact.info.email },
    { icon: Phone, label: t.contact.info.phoneLabel, value: t.contact.info.phone },
    { icon: MapPin, label: t.contact.info.addressLabel, value: t.contact.info.address },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-white focus:outline-none focus:border-[#00A8A8] focus:ring-2 focus:ring-[#00A8A8]/20 placeholder-slate-400 text-slate-800";

  return (
    <section
      id="contact"
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#0B3C5D" }}>
            {t.contact.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            {t.contact.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
              >
                <CheckCircle2 size={56} style={{ color: "#00A8A8" }} />
                <h3 className="text-xl font-bold" style={{ color: "#0B3C5D" }}>
                  Terima kasih!
                </h3>
                <p className="text-slate-600 text-sm max-w-xs">
                  Email client Anda akan terbuka. Pesan Anda segera kami tindaklanjuti.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      {t.contact.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className={inputClass}
                      placeholder={t.contact.form.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ borderColor: "#e2e8f0" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      {t.contact.form.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder={t.contact.form.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{ borderColor: "#e2e8f0" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-clinic"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    {t.contact.form.clinic}
                  </label>
                  <input
                    id="contact-clinic"
                    type="text"
                    className={inputClass}
                    placeholder={t.contact.form.clinicPlaceholder}
                    value={form.clinic}
                    onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                    style={{ borderColor: "#e2e8f0" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    {t.contact.form.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className={inputClass}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical", borderColor: "#e2e8f0" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  style={{
                    backgroundColor: "#0B3C5D",
                    boxShadow: "0 8px 24px rgba(11,60,93,0.3)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#00A8A8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0B3C5D")
                  }
                >
                  <Send size={18} />
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div
              className="rounded-3xl p-8 lg:p-10 h-full"
              style={{
                background: "linear-gradient(135deg, #0B3C5D 0%, #1a5276 100%)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Informasi Kontak
              </h3>
              <p className="text-white/60 text-sm mb-8">
                Atau langsung hubungi kami melalui saluran berikut.
              </p>

              <div className="space-y-6">
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(0,168,168,0.2)" }}
                    >
                      <Icon size={20} style={{ color: "#4FC3F7" }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-white font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="my-8 border-t"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              />

              <p className="text-white/50 text-xs leading-relaxed">
                Kami biasanya membalas dalam 1×24 jam di hari kerja.
                Untuk respons lebih cepat, gunakan tombol WhatsApp di atas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
