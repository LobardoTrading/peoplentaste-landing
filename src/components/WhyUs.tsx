"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Experiencias, no solo regalos",
    description:
      "Cada box está pensada para generar un momento memorable, no solo entregar un producto.",
  },
  {
    number: "02",
    title: "Selección gourmet cuidada",
    description:
      "Trabajamos con productores locales premium y marcas reconocidas de gastronomía argentina.",
  },
  {
    number: "03",
    title: "Logística simple y escalable",
    description:
      "Nos encargamos de todo: armado, packaging y entrega. Desde 10 hasta 1000 boxes.",
  },
  {
    number: "04",
    title: "Personalización de productos",
    description:
      "Adaptamos cada box a tu marca con branding en packaging y selección a medida.",
  },
  {
    number: "05",
    title: "Para clientes, eventos y equipos",
    description:
      "Regalos para fin de año, onboarding, eventos corporativos, fidelización y más.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="por-que" className="py-32 bg-white relative">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-brand text-[13px] font-medium tracking-[0.2em] uppercase">
                Diferencial
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-[3.5rem] font-black text-dark leading-[1.05] tracking-[-0.02em]"
            >
              ¿Por qué
              <br />
              <span className="text-brand">People&Taste</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted mt-6 text-lg font-light leading-relaxed max-w-sm"
            >
              Cinco razones por las que las mejores empresas nos eligen para sus
              regalos corporativos.
            </motion.p>
          </div>

          {/* Right: Reasons */}
          <div>
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="group border-b border-dark/8 last:border-0"
              >
                <div className="py-8 md:py-10 flex items-start gap-8 cursor-default">
                  <span className="text-brand/30 font-black text-[2.5rem] leading-none tracking-tighter group-hover:text-brand transition-colors duration-500 flex-shrink-0 w-16">
                    {reason.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 group-hover:text-brand transition-colors duration-500">
                      {reason.title}
                    </h3>
                    <p className="text-muted font-light leading-relaxed max-w-md">
                      {reason.description}
                    </p>
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
