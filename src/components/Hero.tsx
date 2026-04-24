"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left: Content on white */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-32 lg:py-0">
          <div className="max-w-[520px]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="leading-[0.85]">
                <span className="font-black text-[18px] tracking-[-0.02em] text-dark block">
                  PEOPLE
                </span>
                <span className="font-black text-[18px] tracking-[-0.02em] text-brand block">
                  &TASTE
                </span>
              </div>
            </motion.div>

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-muted text-[11px] font-semibold tracking-[0.25em] uppercase">
                Regalos Corporativos
              </span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-black text-dark leading-[0.95] tracking-[-0.035em]"
              >
                Boxes gourmet
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.6rem,5.5vw,4.5rem)] font-black text-dark leading-[0.95] tracking-[-0.035em]"
              >
                para <em className="font-light not-italic text-brand">sorprender</em>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-muted text-base md:text-[17px] leading-[1.8] mb-12 max-w-[400px] font-light"
            >
              Experiencias gastronómicas diseñadas para empresas que buscan
              diferenciarse. Para clientes, eventos y equipos.
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
                Ver nuestros packs
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                className="inline-flex items-center justify-center text-dark px-9 py-[18px] rounded-full font-medium text-[14px] tracking-wide border border-dark/15 hover:border-dark/40 transition-all duration-500 text-center"
              >
                Solicitar cotización
              </a>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex items-center gap-8 mt-16 pt-8 border-t border-dark/[0.06]"
            >
              {["6 packs exclusivos", "100% personalizable", "Envío nacional"].map(
                (item) => (
                  <span
                    key={item}
                    className="text-muted/50 text-[11px] tracking-[0.1em] uppercase font-medium"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Right: Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=1200&q=85"
            alt="Box gourmet con productos artesanales"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
        </motion.div>

        {/* Mobile image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[50vh] lg:hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=800&q=80"
            alt="Box gourmet con productos artesanales"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-8 md:left-16 z-10 group flex items-center gap-3 text-muted/40 hover:text-muted transition-colors"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
