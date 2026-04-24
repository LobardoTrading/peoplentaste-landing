"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const contactInfo = [
  {
    label: "Teléfono",
    value: "+54 9 1234 56789",
    href: "tel:+5491234567890",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Email",
    value: "contacto@peopleandtaste.com",
    href: "mailto:contacto@peopleandtaste.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Web",
    value: "www.peopleandtaste.com",
    href: "https://www.peopleandtaste.com",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=1920&q=80"
          alt="Fondo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/[0.94]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="leading-[0.85] mb-12">
                <span className="font-black text-[22px] tracking-[-0.02em] text-white block">
                  PEOPLE
                </span>
                <span className="font-black text-[22px] tracking-[-0.02em] text-brand-light block">
                  &TASTE
                </span>
              </div>

              <h2 className="text-[2.2rem] md:text-[2.8rem] font-black text-white leading-[1.12] tracking-[-0.02em] mb-6">
                Contanos tu necesidad
                <br />y te ayudamos a diseñar
                <br />
                <em className="font-light not-italic text-brand-light">
                  el regalo perfecto.
                </em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-7 mt-14"
            >
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="group flex items-center gap-5"
                >
                  <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500 flex-shrink-0">
                    <svg
                      className="w-[18px] h-[18px] text-white/40 group-hover:text-white transition-colors duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={contact.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/25 text-[10px] font-bold tracking-[0.2em] uppercase block mb-1">
                      {contact.label}
                    </span>
                    <span className="text-white/70 text-[15px] font-medium group-hover:text-brand-light transition-colors duration-300">
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
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.025] backdrop-blur-2xl rounded-2xl p-8 md:p-12 border border-white/[0.05]">
              <h3 className="text-[22px] font-bold text-white mb-1.5 tracking-tight">
                Solicitá tu cotización
              </h3>
              <p className="text-white/30 text-[14px] mb-10 font-light">
                Completá el formulario y te respondemos en menos de 24hs.
              </p>

              <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white text-[15px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white text-[15px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@empresa.com"
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white text-[15px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                    Cantidad estimada
                  </label>
                  <select className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white/40 text-[15px] focus:outline-none focus:border-brand transition-colors duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-dark-soft">Seleccioná un rango</option>
                    <option value="10-50" className="bg-dark-soft">10 — 50 boxes</option>
                    <option value="50-100" className="bg-dark-soft">50 — 100 boxes</option>
                    <option value="100-500" className="bg-dark-soft">100 — 500 boxes</option>
                    <option value="500+" className="bg-dark-soft">500+ boxes</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                    Mensaje
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos qué necesitás..."
                    className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-white text-[15px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group/btn w-full bg-brand text-white py-4 rounded-xl font-semibold text-[14px] tracking-wide hover:bg-brand-dark transition-all duration-500 hover:shadow-xl hover:shadow-brand/15 inline-flex items-center justify-center gap-2"
                  >
                    Enviar consulta
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
