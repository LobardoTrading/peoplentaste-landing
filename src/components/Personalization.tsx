"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Branding en packaging",
    description:
      "Tu logo y colores corporativos integrados en cada detalle del empaque.",
  },
  {
    title: "Tarjetas personalizadas",
    description:
      "Mensajes a medida para cada destinatario, evento u ocasión especial.",
  },
  {
    title: "Selección de productos a medida",
    description:
      "Elegí los productos que mejor representen los valores de tu marca.",
  },
  {
    title: "Packs exclusivos",
    description:
      "Creamos combinaciones únicas diseñadas especialmente para tu empresa.",
  },
];

export default function Personalization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personalizacion" className="py-32 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1607473129014-0afb7ed09c3a?w=800&q=80"
                  alt="Packaging personalizado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl shadow-2xl shadow-dark/10 p-6 max-w-[200px]"
              >
                <div className="text-brand font-black text-3xl mb-1">100%</div>
                <div className="text-muted text-sm font-light">
                  Personalizable a tu marca
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[1px] bg-brand" />
              <span className="text-brand text-[13px] font-medium tracking-[0.2em] uppercase">
                Personalización
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-[3.5rem] font-black text-dark leading-[1.05] tracking-[-0.02em] mb-6"
            >
              Adaptamos cada
              <br />
              box a{" "}
              <span className="text-brand italic font-light">tu marca</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-lg font-light leading-relaxed mb-12 max-w-md"
            >
              Cada detalle cuenta. Desde el packaging hasta la selección de
              productos, personalizamos todo para que tu regalo represente a tu
              empresa.
            </motion.p>

            <div className="space-y-0">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="group flex items-start gap-5 py-6 border-b border-dark/5 last:border-0 cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-brand/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-500">
                    <svg
                      className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1 group-hover:text-brand transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
