"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="relative py-32 bg-brand overflow-hidden grain">
      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-white/40" />
              <span className="text-white/60 text-[13px] font-medium tracking-[0.2em] uppercase">
                Sobre nosotros
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-[3.5rem] font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
            >
              Diseñamos experiencias
              <br />
              que{" "}
              <span className="italic font-light text-white/80">
                dejan huella
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/75 leading-[1.8] mb-12 max-w-lg font-light"
            >
              En People&Taste diseñamos experiencias gastronómicas pensadas para
              empresas que buscan diferenciarse. Creamos regalos corporativos que
              combinan calidad, estética y practicidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { label: "Calidad", sub: "Premium" },
                { label: "Diseño", sub: "Cuidado" },
                { label: "Entrega", sub: "Nacional" },
              ].map((item) => (
                <div key={item.label} className="border-t border-white/20 pt-4">
                  <span className="block text-white font-bold text-lg">
                    {item.label}
                  </span>
                  <span className="text-white/50 text-sm">{item.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80"
                    alt="Vino premium"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80"
                    alt="Quesos artesanales"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80"
                    alt="Gin tonic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1543168256-418811576931?w=600&q=80"
                    alt="Productos gourmet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
