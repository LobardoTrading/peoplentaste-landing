"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="relative py-32 md:py-40 bg-warm overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?w=800&q=80"
                alt="Canasta regalo gourmet con productos artesanales"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-6 w-[50%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-dark/15 ring-4 ring-warm img-zoom"
            >
              <Image
                src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500&q=80"
                alt="Gift box elegante con productos seleccionados"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.25em] uppercase">
                Sobre nosotros
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-[3.2rem] font-black text-dark leading-[1.08] tracking-[-0.02em] mb-8"
            >
              Diseñamos experiencias
              <br />
              que <em className="font-light not-italic text-brand">dejan huella</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[17px] text-muted leading-[1.9] mb-6 font-light max-w-[480px]">
                En People&Taste diseñamos experiencias gastronómicas pensadas para
                empresas que buscan diferenciarse.
              </p>
              <p className="text-[17px] text-muted leading-[1.9] mb-14 font-light max-w-[480px]">
                Creamos regalos corporativos que combinan calidad, estética y
                practicidad. Cada box es una invitación a disfrutar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "Calidad", label: "Premium" },
                { value: "Diseño", label: "Cuidado" },
                { value: "Entrega", label: "Nacional" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-full h-[1px] bg-dark/10 mb-5" />
                  <span className="block text-dark font-bold text-[15px] mb-1">
                    {item.value}
                  </span>
                  <span className="text-muted/60 text-[13px] font-light">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
