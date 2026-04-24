"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const packs = [
  {
    name: "Box Clásica",
    price: "32.000",
    products: "3 Salsas Arytza",
    description: "Una opción accesible y versátil para regalos masivos.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80",
    tag: null,
  },
  {
    name: "Pack Básica Gin",
    price: "49.000",
    products: "Gin + Especias + Copa",
    description: "Ideal para sorprender con una experiencia lista para disfrutar.",
    image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=700&q=80",
    tag: null,
  },
  {
    name: "Box Gourmet",
    price: "55.000",
    products: "Vermouth o vino + Copa + Salsa Arytza",
    description: "Balance perfecto entre experiencia y valor percibido.",
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=700&q=80",
    tag: "Recomendado",
  },
  {
    name: "Box Deluxe N°1",
    price: "69.000",
    products: "Vermouth + Quesos y fiambres + Salsa Arytza + Pepinillos",
    description: "Una experiencia gourmet completa para ocasiones especiales.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=700&q=80",
    tag: null,
  },
  {
    name: "Box Deluxe N°2",
    price: "69.000",
    products: "Vino + Quesos y fiambres + Salsa Arytza + Pepinillos",
    description: "Ideal para sorprender con una experiencia lista para disfrutar.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80",
    tag: null,
  },
  {
    name: "Box Signature",
    price: "89.000",
    products: "Vermouth + Vino + Quesos + Sopresatta + Aceitunas + Pepinillos + Salsa Arytza",
    description: "Nuestra propuesta más completa. Impacto asegurado.",
    image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=700&q=80",
    tag: "Exclusivo",
  },
];

function PackCard({ pack, index }: { pack: (typeof packs)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isSignature = pack.tag === "Exclusivo";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index % 3 * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
        isSignature
          ? "bg-dark-soft ring-1 ring-white/8"
          : "bg-white ring-1 ring-dark/[0.04] hover:ring-dark/10"
      } hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pack.image}
          alt={pack.name}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${
          isSignature
            ? "bg-gradient-to-t from-dark-soft via-dark-soft/20 to-transparent"
            : "bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        }`} />

        {/* Price */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-brand text-white px-4 py-2 rounded-lg">
            <span className="font-bold text-[17px] tracking-tight">${pack.price}</span>
            <span className="text-[10px] font-medium text-white/60 ml-1">+ IVA</span>
          </div>
        </div>

        {/* Tag */}
        {pack.tag && (
          <div className="absolute top-4 right-4 z-10">
            <div className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-[0.15em] uppercase ${
              isSignature
                ? "bg-white text-dark"
                : "bg-dark/70 text-white backdrop-blur-md"
            }`}>
              {pack.tag}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className={`text-[19px] font-bold mb-5 tracking-tight ${
          isSignature ? "text-white" : "text-dark"
        }`}>
          {pack.name}
        </h3>

        <div className="mb-5">
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
            isSignature ? "text-brand-light" : "text-brand"
          }`}>
            Incluye
          </span>
          <div className={`w-full h-[1px] my-3 ${
            isSignature ? "bg-white/8" : "bg-dark/[0.06]"
          }`} />
          <p className={`text-[13px] leading-[1.7] ${
            isSignature ? "text-white/50" : "text-muted"
          }`}>
            {pack.products}
          </p>
        </div>

        <p className={`text-[14px] leading-[1.6] mb-7 font-medium ${
          isSignature ? "text-white/75" : "text-dark/65"
        }`}>
          {pack.description}
        </p>

        <a
          href="#contacto"
          className={`group/btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[12px] font-bold tracking-[0.12em] uppercase transition-all duration-500 ${
            isSignature
              ? "bg-brand text-white hover:bg-brand-light"
              : "bg-dark text-white hover:bg-brand"
          }`}
        >
          Consultar
          <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Packs() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="packs" className="py-32 md:py-40 bg-warm relative overflow-hidden grain">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.25em] uppercase">
                Catálogo
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-[3.2rem] font-black text-dark leading-[1.08] tracking-[-0.02em]"
            >
              Nuestros packs
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-[16px] font-light leading-[1.8] max-w-md"
          >
            Desde opciones accesibles hasta propuestas premium. Boxes que se
            adaptan a distintos objetivos, presupuestos y momentos de regalo.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packs.map((pack, i) => (
            <PackCard key={pack.name} pack={pack} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="divider-fade mt-16 mb-10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-muted/70 font-light text-[15px]">
            ¿Necesitás algo diferente? Armamos packs a medida.
          </span>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 text-brand font-semibold text-[14px] tracking-wide hover:gap-4 transition-all duration-300"
          >
            Contactanos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
