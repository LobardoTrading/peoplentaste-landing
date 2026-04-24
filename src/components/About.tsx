"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/20 skew-x-[-10deg] translate-x-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-white/60 text-sm font-medium uppercase tracking-widest"
            >
              Sobre nosotros
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-white mt-4 mb-8 leading-tight"
            >
              Creamos regalos que
              <br />
              <span className="text-dark/80">dejan huella</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg"
            >
              En People&Taste diseñamos experiencias gastronómicas pensadas para
              empresas que buscan diferenciarse. Creamos regalos corporativos que
              combinan calidad, estética y practicidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8"
            >
              {[
                { icon: "✦", text: "Calidad premium" },
                { icon: "✦", text: "Diseño cuidado" },
                { icon: "✦", text: "Entrega simple" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-dark/70 text-lg">{item.icon}</span>
                  <span className="text-white/80 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">100+</div>
                <div className="text-white/60 text-sm">Empresas confían</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mt-8">
                <div className="text-4xl font-black text-white mb-2">6</div>
                <div className="text-white/60 text-sm">Boxes exclusivas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">★</div>
                <div className="text-white/60 text-sm">Productos seleccionados</div>
              </div>
              <div className="bg-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8">
                <div className="text-4xl font-black text-brand-light mb-2">∞</div>
                <div className="text-white/60 text-sm">Personalización total</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
