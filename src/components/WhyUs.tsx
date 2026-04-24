"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  { title: "Experiencias, no solo regalos", description: "Cada box está pensada para generar un momento memorable, no solo entregar un producto." },
  { title: "Selección gourmet cuidada", description: "Trabajamos con productores locales premium y marcas reconocidas de gastronomía argentina." },
  { title: "Logística simple y escalable", description: "Nos encargamos de todo: armado, packaging y entrega. Desde 10 hasta 1000 boxes." },
  { title: "Personalización de productos", description: "Adaptamos cada box a tu marca con branding en packaging y selección a medida." },
  { title: "Para clientes, eventos y equipos", description: "Regalos para fin de año, onboarding, eventos corporativos, fidelización y más." },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que" className="py-28 md:py-36 bg-white">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-7 h-[1.5px] bg-brand" />
          <span className="text-brand text-[11px] font-semibold tracking-[0.2em] uppercase">
            ¿Por qué elegirnos?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[2rem] md:text-[2.6rem] font-semibold text-dark leading-[1.15] tracking-[-0.01em] max-w-xl mb-16"
        >
          Cinco razones por las que las mejores empresas nos eligen.
        </motion.h2>

        {/* Grid de razones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {reasons.map((r, i) => (
            <div key={i} className="group py-8 border-t border-dark/[0.06]">
              <span className="text-brand/30 text-[11px] font-bold tracking-[0.15em] block mb-4">
                0{i + 1}
              </span>
              <h3 className="text-[17px] font-semibold text-dark mb-3 group-hover:text-brand transition-colors duration-400 leading-snug">
                {r.title}
              </h3>
              <p className="text-muted text-[14px] font-light leading-[1.75]">
                {r.description}
              </p>
            </div>
          ))}
          {/* Empty cell for visual balance on 3-col */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
