"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1920&q=80"
          alt="Selección gourmet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-brand-light text-[13px] font-medium tracking-[0.2em] uppercase">
                Regalos Corporativos
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[clamp(3rem,7vw,6rem)] font-black text-white leading-[0.92] tracking-[-0.03em] mb-8"
              >
                Boxes gourmet
                <br />
                para{" "}
                <span className="italic font-light text-brand-light">sorprender</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-md font-light"
            >
              Experiencias gastronómicas diseñadas para empresas que buscan
              diferenciarse. Para clientes, eventos y equipos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#packs"
                className="group bg-brand text-white px-9 py-4 rounded-full font-semibold text-[15px] hover:bg-brand-dark transition-all duration-500 inline-flex items-center gap-3"
              >
                Ver packs
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacto"
                className="text-white/70 px-9 py-4 rounded-full font-medium text-[15px] border border-white/15 hover:border-white/40 hover:text-white transition-all duration-500 backdrop-blur-sm text-center"
              >
                Solicitar cotización
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="max-w-[1400px] mx-auto px-8 pb-10">
          <div className="flex items-center gap-12 text-white/30 text-sm">
            <div className="hidden md:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand" />
              <span>6 packs disponibles</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand" />
              <span>Personalización total</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand" />
              <span>Entrega en todo el país</span>
            </div>
            <div className="flex-1" />
            <a href="#nosotros" className="group flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
              <span className="text-xs tracking-[0.15em] uppercase">Scroll</span>
              <motion.svg
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
              </motion.svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
