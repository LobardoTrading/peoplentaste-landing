"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Experiencias",
    highlight: ", no solo regalos",
    description:
      "Cada box está pensada para generar un momento memorable, no solo entregar un producto.",
    icon: "🎁",
  },
  {
    number: "02",
    title: "Selección ",
    highlight: "gourmet cuidada",
    description:
      "Trabajamos con productores locales premium y marcas reconocidas de gastronomía argentina.",
    icon: "🍷",
  },
  {
    number: "03",
    title: "Logística ",
    highlight: "simple y escalable",
    description:
      "Nos encargamos de todo: armado, packaging y entrega. Desde 10 hasta 1000 boxes.",
    icon: "📦",
  },
  {
    number: "04",
    title: "Personalización ",
    highlight: "de productos",
    description:
      "Adaptamos cada box a tu marca con branding en packaging y selección a medida.",
    icon: "✨",
  },
  {
    number: "05",
    title: "Para clientes, ",
    highlight: "eventos y equipos",
    description:
      "Regalos para fin de año, onboarding, eventos corporativos, fidelización y más.",
    icon: "👥",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-start">
          {/* Left: Title */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand text-sm font-medium uppercase tracking-widest"
            >
              Diferencial
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mt-4 leading-tight"
            >
              ¿Por qué
              <br />
              <span className="text-brand">People&Taste</span>?
            </motion.h2>
          </div>

          {/* Right: Reasons list */}
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="group relative bg-warm/50 hover:bg-warm rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-brand/5 border border-transparent hover:border-brand/10 cursor-default"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 border-2 border-brand/20 rounded-xl flex items-center justify-center text-brand font-black text-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                      {reason.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {reason.title}
                      <span className="text-brand">{reason.highlight}</span>
                    </h3>
                    <p className="text-dark/60 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {reason.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
