"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[750px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?w=1920&q=85"
          alt="Botellas de vino y productos gourmet"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4))]" />
      </div>

      <div className="relative z-10 h-full flex items-end pb-24 md:items-center md:pb-0">
        <div className="max-w-[1400px] mx-auto px-8 w-full">
          <div className="max-w-[620px]">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-10 h-[1px] bg-brand-light/60" />
              <span className="text-white/40 text-[11px] font-semibold tracking-[0.25em] uppercase">
                Regalos Corporativos Gourmet
              </span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-black text-white leading-[0.92] tracking-[-0.035em]"
              >
                Boxes gourmet
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-black text-white leading-[0.92] tracking-[-0.035em]"
              >
                para <em className="font-light not-italic text-brand-light">sorprender</em>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-white/50 text-base md:text-lg leading-[1.8] mb-14 max-w-[440px] font-light"
            >
              Experiencias gastronómicas diseñadas para empresas que buscan
              diferenciarse. Para tus clientes, eventos y equipos.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#packs"
                className="group inline-flex items-center justify-center gap-3 bg-brand text-white px-9 py-[18px] rounded-full font-semibold text-[14px] tracking-wide hover:bg-brand-dark transition-all duration-500"
              >
                Explorar packs
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center text-white/60 px-9 py-[18px] rounded-full font-medium text-[14px] tracking-wide border border-white/10 hover:border-white/25 hover:text-white transition-all duration-500 backdrop-blur-sm"
              >
                Solicitar cotización
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06]"
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between py-5">
            <div className="hidden md:flex items-center gap-10">
              {["6 packs exclusivos", "Personalización total", "Envío nacional"].map(
                (item) => (
                  <span
                    key={item}
                    className="text-white/25 text-[12px] tracking-[0.1em] uppercase font-medium"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
            <a
              href="#nosotros"
              className="group flex items-center gap-3 text-white/25 hover:text-white/50 transition-colors ml-auto"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                Descubrí más
              </span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
