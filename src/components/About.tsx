"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="nosotros" className="py-28 md:py-36 bg-warm">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-7 h-[1.5px] bg-brand" />
          <span className="text-brand text-[11px] font-semibold tracking-[0.2em] uppercase">Sobre nosotros</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[2rem] md:text-[2.6rem] font-semibold text-dark leading-[1.15] tracking-[-0.01em] mb-8"
            >
              Creamos regalos corporativos que combinan calidad, estética y practicidad.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="text-muted text-[15px] leading-[1.85] mb-5 font-light">
                En People&Taste diseñamos experiencias gastronómicas pensadas para empresas que buscan diferenciarse. Seleccionamos los mejores productos de productores argentinos.
              </p>
              <p className="text-muted text-[15px] leading-[1.85] font-light">
                Cada box es una invitación a disfrutar. Nos ocupamos de todo: selección, armado, branding y logística para que vos solo te preocupes por sorprender.
              </p>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dark/[0.06]"
            >
              {[
                { big: "6", label: "Packs\ndisponibles" },
                { big: "+500", label: "Boxes\nentregadas" },
                { big: "100%", label: "Personalizable" },
              ].map((m) => (
                <div key={m.big}>
                  <span className="font-serif text-brand text-[1.8rem] font-semibold leading-none">{m.big}</span>
                  <span className="block text-muted/60 text-[12px] mt-2 leading-[1.5] whitespace-pre-line">{m.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-hover">
              <Image
                src="https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?w=800&q=80"
                alt="Canasta regalo gourmet con productos artesanales"
                fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
