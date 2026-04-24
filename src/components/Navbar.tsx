"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#por-que", label: "Por qué elegirnos" },
  { href: "#packs", label: "Packs" },
  { href: "#personalizacion", label: "Personalización" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative">
              <span
                className={`font-black text-xl tracking-tighter leading-none transition-colors duration-300 ${
                  scrolled ? "text-brand" : "text-white"
                }`}
              >
                PEOPLE
              </span>
              <br />
              <span
                className={`font-black text-xl tracking-tighter leading-none transition-colors duration-300 ${
                  scrolled ? "text-brand" : "text-brand-light"
                }`}
              >
                &TASTE
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-brand relative group ${
                  scrolled ? "text-dark" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/25"
            >
              Cotizar ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 transition-colors ${
                scrolled || mobileOpen ? "bg-dark" : "bg-white"
              }`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-0.5 transition-colors ${
                scrolled || mobileOpen ? "bg-dark" : "bg-white"
              }`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 transition-colors ${
                scrolled || mobileOpen ? "bg-dark" : "bg-white"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-dark hover:text-brand transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="bg-brand text-white px-6 py-3 rounded-full text-lg font-semibold text-center hover:bg-brand-dark transition-all mt-4"
              >
                Cotizar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
