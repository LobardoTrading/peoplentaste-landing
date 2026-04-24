"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "📦",
    title: "Branding en packaging",
    description: "Tu logo y colores corporativos en cada caja que enviamos.",
  },
  {
    icon: "💌",
    title: "Tarjetas personalizadas",
    description: "Mensajes a medida para cada destinatario o evento.",
  },
  {
    icon: "🎯",
    title: "Selección de productos a medida",
    description: "Elegí los productos que mejor representen tu marca.",
  },
  {
    icon: "⭐",
    title: "Packs exclusivos",
    description: "Creamos boxes únicas diseñadas especialmente para vos.",
  },
];

export default function Personalization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personalizacion" className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-brand/[0.03] to-transparent -translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-brand text-sm font-medium uppercase tracking-widest"
            >
              Personalización
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-dark mt-4 mb-6 leading-tight"
            >
              Adaptamos cada
              <br />
              box a{" "}
              <span className="text-brand">tu marca</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-dark/60 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Cada detalle cuenta. Desde el packaging hasta la selección de
              productos, personalizamos todo para que tu regalo hable por tu marca.
            </motion.p>

            <div className="space-y-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1 group-hover:text-brand transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-dark/50 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Product grid visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-4 gap-3">
              {[
                { emoji: "🍷", bg: "bg-red-50" },
                { emoji: "🍾", bg: "bg-amber-50" },
                { emoji: "🫒", bg: "bg-green-50" },
                { emoji: "🧂", bg: "bg-orange-50" },
                { emoji: "🫙", bg: "bg-yellow-50" },
                { emoji: "🧀", bg: "bg-amber-50" },
                { emoji: "🥖", bg: "bg-orange-50" },
                { emoji: "🍯", bg: "bg-yellow-50" },
                { emoji: "🫕", bg: "bg-red-50" },
                { emoji: "🥃", bg: "bg-amber-50" },
                { emoji: "🍸", bg: "bg-green-50" },
                { emoji: "🫐", bg: "bg-purple-50" },
                { emoji: "🥜", bg: "bg-orange-50" },
                { emoji: "🍶", bg: "bg-amber-50" },
                { emoji: "🥂", bg: "bg-yellow-50" },
                { emoji: "🫒", bg: "bg-green-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.05,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className={`${item.bg} rounded-2xl aspect-square flex items-center justify-center text-3xl cursor-pointer hover:shadow-lg transition-shadow duration-300`}
                >
                  {item.emoji}
                </motion.div>
              ))}
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-brand text-white px-5 py-3 rounded-2xl shadow-xl shadow-brand/30"
            >
              <span className="font-bold text-sm">Tu logo aquí</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
