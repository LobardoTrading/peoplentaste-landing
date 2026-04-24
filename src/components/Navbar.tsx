"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#packs", label: "Packs" },
  { href: "#como-funciona", label: "Proceso" },
  { href: "#personalizacion", label: "Personalización" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.04] py-4"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#inicio" className="leading-[0.82] select-none">
            <span className="font-extrabold text-[14px] tracking-[-0.01em] text-dark block">PEOPLE</span>
            <span className="font-extrabold text-[14px] tracking-[-0.01em] text-brand block">&TASTE</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] text-muted font-medium tracking-wide hover:text-dark transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="hidden lg:inline-flex text-[12px] font-semibold tracking-[0.06em] uppercase bg-dark text-white px-7 py-3 rounded-full hover:bg-brand transition-colors duration-400">
            Cotizar
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]" aria-label="Menú">
            <motion.span animate={open ? { rotate: 45, y: 7 } : {}} className="block w-5 h-[1.5px] bg-dark" />
            <motion.span animate={open ? { opacity: 0 } : {}} className="block w-5 h-[1.5px] bg-dark" />
            <motion.span animate={open ? { rotate: -45, y: -7 } : {}} className="block w-5 h-[1.5px] bg-dark" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-10 lg:hidden">
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="text-3xl font-semibold text-dark py-3 border-b border-black/[0.04] hover:text-brand transition-colors">
                {l.label}
              </motion.a>
            ))}
            <motion.a href="#contacto" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 bg-brand text-white px-8 py-4 rounded-full text-center font-semibold">
              Solicitar cotización
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
