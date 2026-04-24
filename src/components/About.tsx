"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="relative py-32 md:py-40 bg-brand overflow-hidden grain">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-dark/15 skew-x-[-12deg] translate-x-24 hidden lg:block" />

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-white/30" />
              <span className="text-white/50 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Sobre nosotros
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-[3.2rem] font-black text-white leading-[1.08] tracking-[-0.02em] mb-8"
            >
              Diseñamos experiencias
              <br />
              que <em className="font-light not-italic text-white/70">dejan huella</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[17px] text-white/70 leading-[1.9] mb-6 font-light max-w-[480px]">
                En People&Taste diseñamos experiencias gastronómicas pensadas para
                empresas que buscan diferenciarse.
              </p>
              <p className="text-[17px] text-white/70 leading-[1.9] mb-14 font-light max-w-[480px]">
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
                  <div className="w-full h-[1px] bg-white/15 mb-5" />
                  <span className="block text-white font-bold text-[15px] mb-1">
                    {item.value}
                  </span>
                  <span className="text-white/40 text-[13px] font-light">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-3">
              {/* Tall left */}
              <div className="col-span-5 relative aspect-[3/4.5] rounded-xl overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80"
                  alt="Vino tinto argentino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
              {/* Right column */}
              <div className="col-span-7 flex flex-col gap-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80"
                    alt="Tabla de quesos gourmet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 55vw, 28vw"
                  />
                </div>
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=600&q=80"
                    alt="Gin artesanal con botánicos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 55vw, 28vw"
                  />
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-5 left-6 bg-white rounded-xl shadow-2xl shadow-dark/15 px-6 py-5"
            >
              <span className="block text-brand font-black text-2xl leading-none mb-1">
                +500
              </span>
              <span className="text-muted text-[12px] font-medium">
                Boxes entregadas
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
