"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  { label: "Teléfono", value: "+54 9 1234 56789", href: "tel:+5491234567890", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  { label: "Email", value: "contacto@peopleandtaste.com", href: "mailto:contacto@peopleandtaste.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Web", value: "www.peopleandtaste.com", href: "https://www.peopleandtaste.com", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-28 md:py-36 bg-dark-soft relative overflow-hidden">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
              <div className="leading-[0.82] mb-10">
                <span className="font-extrabold text-[18px] tracking-[-0.01em] text-white block">PEOPLE</span>
                <span className="font-extrabold text-[18px] tracking-[-0.01em] text-brand-light block">&TASTE</span>
              </div>

              <h2 className="font-serif text-[2rem] md:text-[2.4rem] font-semibold text-white leading-[1.18] tracking-[-0.01em] mb-6">
                Contanos tu necesidad y te ayudamos a diseñar el regalo perfecto.
              </h2>

              <p className="text-white/35 text-[14px] font-light leading-[1.8] mb-14 max-w-sm">
                Escribinos y en menos de 24 hs te enviamos una propuesta a medida.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} className="group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-400 flex-shrink-0">
                    <svg className="w-4 h-4 text-white/30 group-hover:text-white transition-colors duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/20 text-[10px] font-bold tracking-[0.18em] uppercase block mb-0.5">{c.label}</span>
                    <span className="text-white/60 text-[14px] font-medium group-hover:text-brand-light transition-colors duration-300">{c.value}</span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/[0.05]">
              <h3 className="text-[20px] font-semibold text-white mb-1">Solicitá tu cotización</h3>
              <p className="text-white/25 text-[13px] mb-9 font-light">Completá el formulario y te respondemos pronto.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-3 block">Nombre</label>
                    <input type="text" placeholder="Tu nombre" className="w-full bg-transparent border-b border-white/[0.07] pb-3 text-white text-[14px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors" />
                  </div>
                  <div>
                    <label className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-3 block">Empresa</label>
                    <input type="text" placeholder="Tu empresa" className="w-full bg-transparent border-b border-white/[0.07] pb-3 text-white text-[14px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-3 block">Email</label>
                  <input type="email" placeholder="tu@empresa.com" className="w-full bg-transparent border-b border-white/[0.07] pb-3 text-white text-[14px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors" />
                </div>

                <div>
                  <label className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-3 block">Cantidad estimada</label>
                  <select className="w-full bg-transparent border-b border-white/[0.07] pb-3 text-white/40 text-[14px] focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer">
                    <option value="" className="bg-dark-soft">Seleccioná un rango</option>
                    <option value="10-50" className="bg-dark-soft">10 — 50 boxes</option>
                    <option value="50-100" className="bg-dark-soft">50 — 100 boxes</option>
                    <option value="100-500" className="bg-dark-soft">100 — 500 boxes</option>
                    <option value="500+" className="bg-dark-soft">500+ boxes</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/25 text-[10px] font-bold tracking-[0.18em] uppercase mb-3 block">Mensaje</label>
                  <textarea rows={3} placeholder="Contanos qué necesitás..." className="w-full bg-transparent border-b border-white/[0.07] pb-3 text-white text-[14px] placeholder:text-white/15 focus:outline-none focus:border-brand transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full bg-brand text-white py-4 rounded-xl font-semibold text-[13px] tracking-[0.06em] uppercase hover:bg-brand-dark transition-colors duration-400 mt-2">
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
