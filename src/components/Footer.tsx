"use client";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-sm text-white leading-none">
              PEOPLE
            </span>
            <span className="font-black text-sm text-brand-light leading-none">
              &TASTE
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#packs" className="hover:text-white transition-colors">
              Packs
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} People&Taste. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
