"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-brand/20" />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <span className="font-black text-3xl text-white leading-none">
                  PEOPLE
                </span>
                <br />
                <span className="font-black text-3xl text-brand-light leading-none">
                  &TASTE
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Contanos tu necesidad
                <br />
                y te ayudamos a diseñar
                <br />
                <span className="text-brand-light">el regalo perfecto.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 mt-10"
            >
              <a
                href="tel:+5491234567890"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-brand-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wider">
                    Teléfono
                  </span>
                  <div className="text-white font-medium group-hover:text-brand-light transition-colors">
                    +54 9 1234 56789
                  </div>
                </div>
              </a>

              <a
                href="mailto:contacto@peopleandtaste.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-brand-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wider">
                    Email
                  </span>
                  <div className="text-white font-medium group-hover:text-brand-light transition-colors">
                    contacto@peopleandtaste.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.peopleandtaste.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-brand-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-white/50 text-xs uppercase tracking-wider">
                    Web
                  </span>
                  <div className="text-white font-medium group-hover:text-brand-light transition-colors">
                    www.peopleandtaste.com
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicitá tu cotización
              </h3>
              <p className="text-white/50 text-sm mb-8">
                Completá el formulario y te respondemos en menos de 24hs.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Cantidad estimada
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none">
                    <option value="" className="bg-dark">
                      Seleccioná un rango
                    </option>
                    <option value="10-50" className="bg-dark">
                      10 - 50 boxes
                    </option>
                    <option value="50-100" className="bg-dark">
                      50 - 100 boxes
                    </option>
                    <option value="100-500" className="bg-dark">
                      100 - 500 boxes
                    </option>
                    <option value="500+" className="bg-dark">
                      500+ boxes
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Contanos qué necesitás..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/30"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
