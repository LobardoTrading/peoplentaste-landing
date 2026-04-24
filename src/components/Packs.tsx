"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const packs = [
  {
    name: "Box Clásica",
    price: "32.000",
    products: "3 Salsas Arytza",
    description: "Opción accesible y versátil para regalos masivos.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=600&q=80",
    badge: null,
  },
  {
    name: "Pack Básica Gin",
    price: "49.000",
    products: "Gin + Especias + Copa",
    description: "Una experiencia lista para disfrutar.",
    image: "https://images.unsplash.com/photo-1482012792084-a0c3725f289f?w=600&q=80",
    badge: null,
  },
  {
    name: "Box Gourmet",
    price: "55.000",
    products: "Vermouth o vino + Copa + Salsa Arytza",
    description: "El equilibrio perfecto entre precio y percepción de valor.",
    image: "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?w=600&q=80",
    badge: "Popular",
  },
  {
    name: "Box Deluxe N°1",
    price: "69.000",
    products: "Vermouth + Quesos y fiambres + Salsa Arytza + Pepinillos",
    description: "Experiencia gourmet completa para ocasiones especiales.",
    image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=600&q=80",
    badge: null,
  },
  {
    name: "Box Deluxe N°2",
    price: "69.000",
    products: "Vino + Quesos y fiambres + Salsa Arytza + Pepinillos",
    description: "Ideal para sorprender con una experiencia compartible.",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=600&q=80",
    badge: null,
  },
  {
    name: "Box Signature",
    price: "89.000",
    products: "Vermouth + Vino + Quesos + Sopresatta + Aceitunas + Pepinillos + Salsa Arytza",
    description: "Nuestra propuesta más completa. Impacto asegurado.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    badge: "Exclusivo",
  },
];

function Card({ pack, i }: { pack: (typeof packs)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const dark = pack.badge === "Exclusivo";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
      className={`group flex flex-col rounded-2xl overflow-hidden transition-shadow duration-700 ${
        dark
          ? "bg-dark-soft ring-1 ring-white/[0.06] shadow-2xl shadow-dark/20"
          : "bg-white ring-1 ring-black/[0.04] hover:shadow-xl hover:shadow-dark/[0.06]"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[5/3.5] overflow-hidden">
        <Image
          src={pack.image} alt={pack.name} fill
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-dark-soft/80 via-transparent to-transparent" : "bg-gradient-to-t from-black/20 via-transparent to-transparent"}`} />

        {/* Price chip */}
        <div className="absolute bottom-4 left-4 bg-white text-dark px-4 py-2 rounded-lg shadow-lg shadow-black/10">
          <span className="font-bold text-[16px] tracking-tight">${pack.price}</span>
          <span className="text-[10px] text-muted ml-1 font-medium">+ IVA</span>
        </div>

        {/* Badge */}
        {pack.badge && (
          <div className={`absolute top-4 right-4 text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-md ${
            dark ? "bg-brand text-white" : "bg-dark text-white"
          }`}>
            {pack.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className={`text-[17px] font-semibold mb-3 ${dark ? "text-white" : "text-dark"}`}>
          {pack.name}
        </h3>

        <div className="mb-4">
          <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${dark ? "text-brand-light" : "text-brand"}`}>
            Incluye
          </span>
          <div className={`h-[1px] my-2.5 ${dark ? "bg-white/[0.06]" : "bg-dark/[0.05]"}`} />
          <p className={`text-[13px] leading-[1.6] ${dark ? "text-white/50" : "text-muted"}`}>
            {pack.products}
          </p>
        </div>

        <p className={`text-[13px] leading-[1.65] mb-6 ${dark ? "text-white/65" : "text-dark/55"} font-light flex-1`}>
          {pack.description}
        </p>

        <a
          href="#contacto"
          className={`block text-center py-3 rounded-lg text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-400 ${
            dark
              ? "bg-brand text-white hover:bg-brand-light"
              : "bg-warm text-dark hover:bg-brand hover:text-white"
          }`}
        >
          Consultar
        </a>
      </div>
    </motion.article>
  );
}

export default function Packs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="packs" className="py-28 md:py-36 bg-warm">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-7 h-[1.5px] bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.2em] uppercase">Catálogo</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[2rem] md:text-[2.6rem] font-semibold text-dark leading-[1.15] tracking-[-0.01em]"
            >
              Nuestros packs
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted text-[14px] font-light leading-[1.75] max-w-sm"
          >
            Desde opciones accesibles hasta propuestas premium. Boxes que se adaptan a distintos presupuestos y momentos de regalo.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packs.map((p, i) => <Card key={p.name} pack={p} i={i} />)}
        </div>

        {/* Bottom CTA */}
        <div className="divider-fade mt-14" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-muted/60 text-[14px] font-light">¿Necesitás algo diferente?</span>
          <a href="#contacto" className="group inline-flex items-center gap-2 text-brand text-[14px] font-semibold hover:gap-3 transition-all duration-300">
            Armamos packs a medida
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
