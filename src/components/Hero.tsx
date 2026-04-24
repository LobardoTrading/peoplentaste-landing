"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-white pt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Top section */}
        <div className="pt-16 md:pt-24 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-7 h-[1.5px] bg-brand" />
            <span className="text-muted text-[11px] font-semibold tracking-[0.2em] uppercase">
              Regalos Corporativos
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-[clamp(2.6rem,6vw,5.2rem)] font-semibold text-dark leading-[1.05] tracking-[-0.02em] max-w-3xl"
            >
              Boxes gourmet para sorprender a clientes y equipos
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a href="#packs" className="group inline-flex items-center gap-3 bg-brand text-white pl-8 pr-6 py-4 rounded-full font-medium text-[14px] hover:bg-brand-dark transition-all duration-400">
              Ver nuestros packs
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" /></svg>
              </span>
            </a>
            <a href="#contacto" className="text-muted text-[14px] font-medium hover:text-dark transition-colors border-b border-muted/30 pb-0.5 hover:border-dark/40">
              Solicitar cotización
            </a>
          </motion.div>
        </div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-3 md:gap-4 pb-4"
        >
          <div className="col-span-12 md:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden img-hover">
            <Image
              src="https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=1000&q=85"
              alt="Box regalo gourmet con productos artesanales"
              fill className="object-cover" priority sizes="(max-width:768px) 100vw, 58vw"
            />
          </div>
          <div className="col-span-6 md:col-span-2 relative aspect-[3/4] rounded-xl overflow-hidden img-hover">
            <Image
              src="https://images.unsplash.com/photo-1482012792084-a0c3725f289f?w=500&q=80"
              alt="Botella de gin artesanal"
              fill className="object-cover" priority sizes="(max-width:768px) 50vw, 17vw"
            />
          </div>
          <div className="col-span-6 md:col-span-3 relative aspect-[3/4] rounded-xl overflow-hidden img-hover">
            <Image
              src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=500&q=80"
              alt="Caja de regalo elegante"
              fill className="object-cover" priority sizes="(max-width:768px) 50vw, 25vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
