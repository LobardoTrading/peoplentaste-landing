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
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=80",
    tag: null,
  },
  {
    name: "Pack Básica Gin",
    price: "49.000",
    products: "Gin + Especias + Copa",
    description:
      "Ideal para sorprender con una experiencia lista para disfrutar.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    tag: null,
  },
  {
    name: "Box Gourmet",
    price: "55.000",
    products: "Vermouth o vino + Copa + Salsa Arytza",
    description: "Balance perfecto entre experiencia y valor percibido.",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
    tag: "Recomendado",
  },
  {
    name: "Box Deluxe N°1",
    price: "69.000",
    products:
      "Vermouth + Quesos y fiambres seleccionados + Salsa Arytza + Pepinillos",
    description: "Una experiencia gourmet completa para ocasiones especiales.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    tag: null,
  },
  {
    name: "Box Deluxe N°2",
    price: "69.000",
    products:
      "Vino + Quesos y fiambres seleccionados + Salsa Arytza + Pepinillos",
    description:
      "Ideal para sorprender con una experiencia lista para disfrutar.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
    tag: null,
  },
  {
    name: "Box Signature",
    price: "89.000",
    products:
      "Vermouth + Vino + Quesos + Sopresatta + Aceitunas + Pepinillos + Salsa Arytza",
    description: "Nuestra propuesta más completa. Impacto asegurado.",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=600&q=80",
    tag: "Más exclusivo",
  },
];

export default function Packs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="packs" className="py-32 bg-warm relative overflow-hidden grain">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-brand" />
            <span className="text-brand text-[13px] font-medium tracking-[0.2em] uppercase">
              Catálogo
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-[3.5rem] font-black text-dark leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Nuestros packs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-lg font-light leading-relaxed"
          >
            Desde opciones accesibles hasta propuestas premium, diseñamos boxes
            que se adaptan a distintos objetivos, presupuestos y momentos de
            regalo.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, i) => {
            const isSignature = pack.tag === "Más exclusivo";
            return (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                  isSignature
                    ? "bg-dark-soft text-white ring-1 ring-white/10"
                    : "bg-white ring-1 ring-dark/5 hover:ring-brand/20"
                } hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isSignature
                        ? "bg-gradient-to-t from-dark-soft via-dark-soft/30 to-transparent"
                        : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    }`}
                  />

                  {/* Price */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-brand text-white px-4 py-2 rounded-lg font-bold text-lg tracking-tight">
                      ${pack.price}
                      <span className="text-[10px] font-normal text-white/70 ml-1">
                        + IVA
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  {pack.tag && (
                    <div className="absolute top-5 right-5">
                      <div
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide uppercase ${
                          isSignature
                            ? "bg-white text-dark"
                            : "bg-dark/80 text-white backdrop-blur-sm"
                        }`}
                      >
                        {pack.tag}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      isSignature ? "text-white" : "text-dark"
                    }`}
                  >
                    {pack.name}
                  </h3>

                  <div className="mb-5">
                    <span
                      className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${
                        isSignature ? "text-brand-light" : "text-brand"
                      }`}
                    >
                      Incluye
                    </span>
                    <div
                      className={`w-full h-[1px] my-3 ${
                        isSignature ? "bg-white/10" : "bg-dark/8"
                      }`}
                    />
                    <p
                      className={`text-sm leading-relaxed ${
                        isSignature ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {pack.products}
                    </p>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-7 font-medium ${
                      isSignature ? "text-white/80" : "text-dark/70"
                    }`}
                  >
                    {pack.description}
                  </p>

                  <a
                    href="#contacto"
                    className={`block w-full text-center py-3.5 rounded-xl text-[13px] font-semibold tracking-wide uppercase transition-all duration-500 ${
                      isSignature
                        ? "bg-brand text-white hover:bg-brand-light"
                        : "bg-dark text-white hover:bg-brand"
                    }`}
                  >
                    Consultar
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-16 pt-10 border-t border-dark/5"
        >
          <span className="text-muted font-light">
            ¿Necesitás algo diferente?
          </span>
          <a
            href="#contacto"
            className="group text-brand font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Armamos packs a medida
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
