"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Contanos tu necesidad", desc: "Cantidad de boxes, presupuesto, fecha de entrega y cualquier detalle relevante." },
  { num: "02", title: "Diseñamos tu pack", desc: "Seleccionamos productos y armamos una propuesta adaptada a tu marca y objetivo." },
  { num: "03", title: "Personalizamos", desc: "Branding en packaging, tarjetas personalizadas y selección de productos a medida." },
  { num: "04", title: "Entregamos", desc: "Nos encargamos del armado, packaging y logística. Vos solo sorprendés." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-28 md:py-36 bg-white">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-7 h-[1.5px] bg-brand" />
          <span className="text-brand text-[11px] font-semibold tracking-[0.2em] uppercase">Proceso</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[2rem] md:text-[2.6rem] font-semibold text-dark leading-[1.15] tracking-[-0.01em] max-w-lg mb-16"
        >
          De la idea al regalo perfecto en 4 pasos.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="group relative">
              {/* Connector line on desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-dark/[0.06] z-0" />
              )}

              <div className="relative z-10">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full border-[1.5px] border-dark/10 flex items-center justify-center mb-6 group-hover:border-brand group-hover:bg-brand/[0.04] transition-all duration-400">
                  <span className="text-[12px] font-bold text-brand tracking-tight">{s.num}</span>
                </div>

                <h3 className="text-[16px] font-semibold text-dark mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-muted text-[13px] font-light leading-[1.75]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
