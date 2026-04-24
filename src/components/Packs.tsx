"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const packs = [
  {
    id: 1,
    name: "Box Clásica",
    price: "$32.000",
    products: "3 Salsas Arytza",
    description: "Una opción accesible y versátil para regalos masivos.",
    tier: "accesible",
    gradient: "from-warm-dark to-warm",
    emoji: "🫙",
  },
  {
    id: 2,
    name: "Pack Básica Gin",
    price: "$49.000",
    products: "Gin + Especias + Copa",
    description: "Ideal para sorprender con una experiencia lista para disfrutar.",
    tier: "popular",
    gradient: "from-brand/10 to-warm",
    emoji: "🍸",
  },
  {
    id: 3,
    name: "Box Gourmet",
    price: "$55.000",
    products: "Vermouth o vino + Copa + Salsa Arytza",
    description: "Balance perfecto entre experiencia y valor percibido.",
    tier: "recomendado",
    gradient: "from-brand/10 to-brand/5",
    emoji: "🍷",
  },
  {
    id: 4,
    name: "Box Deluxe N°1",
    price: "$69.000",
    products: "Vermouth + Quesos y fiambres seleccionados + Salsa Arytza + Pepinillos",
    description: "Una experiencia gourmet completa para ocasiones especiales.",
    tier: "premium",
    gradient: "from-dark/5 to-warm",
    emoji: "🧀",
  },
  {
    id: 5,
    name: "Box Deluxe N°2",
    price: "$69.000",
    products: "Vino + Quesos y fiambres seleccionados + Salsa Arytza + Pepinillos",
    description: "Ideal para sorprender con una experiencia lista para disfrutar.",
    tier: "premium",
    gradient: "from-dark/5 to-warm",
    emoji: "🥂",
  },
  {
    id: 6,
    name: "Box Signature",
    price: "$89.000",
    products:
      "Vermouth + Vino + Quesos + Sopresatta + Aceitunas + Pepinillos + Salsa Arytza",
    description: "Nuestra propuesta más completa. Impacto asegurado.",
    tier: "exclusivo",
    gradient: "from-dark to-dark/90",
    emoji: "👑",
  },
];

function PackCard({
  pack,
  index,
  isInView,
}: {
  pack: (typeof packs)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const isSignature = pack.tier === "exclusivo";
  const isRecommended = pack.tier === "recomendado";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-3xl overflow-hidden transition-all duration-500 card-shine ${
        isSignature
          ? "bg-dark text-white shadow-2xl shadow-dark/30 lg:scale-105"
          : "bg-white shadow-lg hover:shadow-xl"
      } ${isRecommended ? "ring-2 ring-brand" : ""}`}
    >
      {/* Badge */}
      {(isRecommended || isSignature) && (
        <div
          className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${
            isSignature
              ? "bg-brand text-white"
              : "bg-brand/10 text-brand border border-brand/20"
          }`}
        >
          {isSignature ? "MÁS EXCLUSIVO" : "RECOMENDADO"}
        </div>
      )}

      {/* Header with emoji */}
      <div
        className={`relative h-48 flex items-center justify-center ${
          isSignature ? "bg-gradient-to-br from-brand/30 to-dark" : `bg-gradient-to-br ${pack.gradient}`
        }`}
      >
        <motion.span
          animate={hovered ? { scale: 1.3, rotate: 10 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-7xl"
        >
          {pack.emoji}
        </motion.span>

        {/* Price tag */}
        <div
          className={`absolute top-4 left-4 px-4 py-2 rounded-xl font-black text-lg ${
            isSignature
              ? "bg-brand text-white"
              : "bg-brand text-white shadow-lg shadow-brand/30"
          }`}
        >
          {pack.price}
          <span className="text-[10px] font-medium opacity-80 ml-1">+ IVA</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={`text-xl font-black mb-3 ${
            isSignature ? "text-white" : "text-dark"
          }`}
        >
          {pack.name}
        </h3>

        <div
          className={`text-sm mb-4 ${
            isSignature ? "text-white/60" : "text-dark/50"
          }`}
        >
          <span className="font-semibold text-brand text-xs uppercase tracking-wider">
            Productos
          </span>
          <div
            className={`w-full h-px my-2 ${
              isSignature ? "bg-white/10" : "bg-dark/10"
            }`}
          />
          <span className={isSignature ? "text-white/80" : "text-dark/70"}>
            {pack.products}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed mb-6 ${
            isSignature ? "text-white/70" : "text-dark/60"
          }`}
        >
          {pack.description}
        </p>

        <a
          href="#contacto"
          className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isSignature
              ? "bg-brand text-white hover:bg-brand-light"
              : "bg-dark text-white hover:bg-brand"
          } hover:scale-[1.02] hover:shadow-lg`}
        >
          Consultar
        </a>
      </div>
    </motion.div>
  );
}

export default function Packs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="packs" className="py-28 bg-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-brand text-sm font-medium uppercase tracking-widest"
          >
            Catálogo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mt-4 mb-6"
          >
            Nuestros packs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-dark/60 text-lg max-w-2xl mx-auto"
          >
            Desde opciones accesibles hasta propuestas premium, diseñamos boxes
            que se adaptan a distintos objetivos, presupuestos y momentos de
            regalo.
          </motion.p>
        </div>

        {/* Pack cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, i) => (
            <PackCard key={pack.id} pack={pack} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-dark/50 mb-4">
            ¿Necesitás algo diferente? Armamos packs a medida.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors group"
          >
            Consultanos
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
