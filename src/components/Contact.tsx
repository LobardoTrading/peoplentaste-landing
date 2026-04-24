"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=1920&q=80"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/92 backdrop-blur-sm" />
      </div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="leading-[0.85] mb-10">
                <span className="font-black text-2xl text-white block">
                  PEOPLE
                </span>
                <span className="font-black text-2xl text-brand-light block">
                  &TASTE
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-[-0.02em] mb-6">
                Contanos tu necesidad
                <br />y te ayudamos a diseñar
                <br />
                <span className="text-brand-light italic font-light">
                  el regalo perfecto.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  label: "Teléfono",
                  value: "+54 9 1234 56789",
                  href: "tel:+5491234567890",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                },
                {
                  label: "Email",
                  value: "contacto@peopleandtaste.com",
                  href: "mailto:contacto@peopleandtaste.com",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  label: "Web",
                  value: "www.peopleandtaste.com",
                  href: "https://www.peopleandtaste.com",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  ),
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                    <svg
                      className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {contact.icon}
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/30 text-[11px] font-medium tracking-[0.15em] uppercase block mb-1">
                      {contact.label}
                    </span>
                    <span className="text-white/80 font-medium group-hover:text-brand-light transition-colors duration-300">
                      {contact.value}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/[0.06]">
              <h3 className="text-2xl font-bold text-white mb-1">
                Solicitá tu cotización
              </h3>
              <p className="text-white/40 text-sm mb-10 font-light">
                Completá el formulario y te respondemos en menos de 24hs.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-3 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand transition-colors text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-3 block">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand transition-colors text-[15px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-3 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@empresa.com"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand transition-colors text-[15px]"
                  />
                </div>

                <div>
                  <label className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-3 block">
                    Cantidad estimada
                  </label>
                  <select className="w-full bg-transparent border-b border-white/10 pb-3 text-white/50 focus:outline-none focus:border-brand transition-colors text-[15px] appearance-none cursor-pointer">
                    <option value="" className="bg-dark-soft">
                      Seleccioná un rango
                    </option>
                    <option value="10-50" className="bg-dark-soft">
                      10 — 50 boxes
                    </option>
                    <option value="50-100" className="bg-dark-soft">
                      50 — 100 boxes
                    </option>
                    <option value="100-500" className="bg-dark-soft">
                      100 — 500 boxes
                    </option>
                    <option value="500+" className="bg-dark-soft">
                      500+ boxes
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-white/40 text-[11px] font-medium tracking-[0.15em] uppercase mb-3 block">
                    Mensaje
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos qué necesitás..."
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand transition-colors resize-none text-[15px]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand text-white py-4 rounded-xl font-semibold text-[15px] tracking-wide hover:bg-brand-dark transition-all duration-500 hover:shadow-xl hover:shadow-brand/20"
                  >
                    Enviar consulta
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
