"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-brand/30 animate-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block bg-brand/20 text-brand-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-brand/20">
                Regalos Corporativos Gourmet
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6"
            >
              Boxes gourmet
              <br />
              para{" "}
              <span className="text-brand-light relative">
                sorprender
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 298 8"
                    stroke="#E86A3A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
            >
              Diseñamos experiencias gastronómicas pensadas para empresas que
              buscan diferenciarse. Para clientes, eventos y equipos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#packs"
                className="bg-brand text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/30 text-center"
              >
                Ver nuestros packs
              </a>
              <a
                href="#contacto"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white/60 text-center backdrop-blur-sm"
              >
                Contactanos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-10 mt-14"
            >
              {[
                { value: "6", label: "Packs disponibles" },
                { value: "100%", label: "Personalizable" },
                { value: "B2B", label: "Enfoque corporativo" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-black text-brand-light">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side decorative box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main card */}
              <div className="w-80 h-96 bg-gradient-to-br from-brand to-brand-dark rounded-3xl shadow-2xl shadow-brand/20 flex items-center justify-center p-8 animate-float">
                <div className="text-center">
                  <div className="text-white font-black text-4xl leading-none mb-2">
                    PEOPLE
                  </div>
                  <div className="text-white/80 font-black text-4xl leading-none">
                    &TASTE
                  </div>
                  <div className="w-16 h-0.5 bg-white/40 mx-auto my-6" />
                  <div className="text-white/60 text-sm">
                    Experiencias gastronómicas corporativas
                  </div>
                </div>
              </div>
              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-light/20 rounded-2xl backdrop-blur-sm border border-brand-light/30 flex items-center justify-center">
                <span className="text-3xl">🍷</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-2xl">🧀</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#nosotros" className="flex flex-col items-center gap-2 group">
          <span className="text-white/40 text-xs tracking-widest uppercase group-hover:text-white/70 transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 group-hover:border-white/60 transition-colors"
          >
            <div className="w-1 h-2 bg-brand-light rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
