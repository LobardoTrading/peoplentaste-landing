"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Branding en packaging",
    description: "Tu logo y colores corporativos integrados en cada detalle del empaque.",
  },
  {
    title: "Tarjetas personalizadas",
    description: "Mensajes a medida para cada destinatario, evento u ocasión especial.",
  },
  {
    title: "Selección de productos a medida",
    description: "Elegí los productos que mejor representen los valores de tu marca.",
  },
  {
    title: "Packs exclusivos",
    description: "Creamos combinaciones únicas diseñadas especialmente para tu empresa.",
  },
];

function FeatureItem({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 25 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex items-start gap-5 py-6 border-b border-dark/[0.06] last:border-0 cursor-default"
    >
      <div className="w-10 h-10 rounded-full bg-brand/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-500 mt-0.5">
        <svg
          className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-dark text-[15px] mb-1.5 group-hover:text-brand transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted text-[13px] font-light leading-[1.7]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Personalization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personalizacion" className="py-32 md:py-40 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80"
                  alt="Gift box packaging premium"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent" />
              </div>

              {/* Secondary image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-6 -right-4 md:right-6 w-[45%] aspect-square rounded-xl overflow-hidden shadow-2xl shadow-dark/20 ring-4 ring-white img-zoom"
              >
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80"
                  alt="Diseño personalizado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.25em] uppercase">
                Personalización
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-[3.2rem] font-black text-dark leading-[1.08] tracking-[-0.02em] mb-6"
            >
              Adaptamos cada
              <br />
              box a <em className="font-light not-italic text-brand">tu marca</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-[16px] font-light leading-[1.8] mb-10 max-w-[420px]"
            >
              Cada detalle cuenta. Desde el packaging hasta la selección de
              productos, personalizamos todo para que tu regalo represente a tu
              empresa.
            </motion.p>

            <div>
              {features.map((feature, i) => (
                <FeatureItem key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
