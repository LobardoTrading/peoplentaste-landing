"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  { title: "Branding en packaging", desc: "Tu logo y colores corporativos integrados en cada detalle." },
  { title: "Tarjetas personalizadas", desc: "Mensajes a medida para cada destinatario." },
  { title: "Selección de productos a medida", desc: "Elegí los productos que representen tu marca." },
  { title: "Packs exclusivos", desc: "Combinaciones únicas diseñadas para tu empresa." },
];

export default function Personalization() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personalizacion" className="py-28 md:py-36 bg-warm">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7 relative aspect-[3/4] rounded-xl overflow-hidden img-hover">
                <Image
                  src="https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=700&q=80"
                  alt="Box de regalo corporativo personalizado"
                  fill className="object-cover" sizes="(max-width:768px) 60vw, 30vw"
                />
              </div>
              <div className="col-span-5 relative aspect-[3/4] rounded-xl overflow-hidden img-hover mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1482012792084-a0c3725f289f?w=500&q=80"
                  alt="Producto artesanal para gift box"
                  fill className="object-cover" sizes="(max-width:768px) 40vw, 20vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-7 h-[1.5px] bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.2em] uppercase">Personalización</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[2rem] md:text-[2.6rem] font-semibold text-dark leading-[1.15] tracking-[-0.01em] mb-6"
            >
              Adaptamos cada box a tu marca.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-[15px] font-light leading-[1.85] mb-10 max-w-md"
            >
              Cada detalle cuenta. Personalizamos todo para que tu regalo hable por tu empresa.
            </motion.p>

            <div className="space-y-0">
              {features.map((f, i) => (
                <div key={i} className="group flex items-start gap-4 py-5 border-t border-dark/[0.05] last:border-b cursor-default">
                  <div className="w-8 h-8 rounded-full bg-brand/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand transition-colors duration-400">
                    <svg className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-dark mb-1 group-hover:text-brand transition-colors duration-300">{f.title}</h3>
                    <p className="text-muted text-[13px] font-light leading-[1.65]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
