"use client";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="leading-[0.82]">
            <span className="font-extrabold text-[12px] text-white/40 block">PEOPLE</span>
            <span className="font-extrabold text-[12px] text-brand/50 block">&TASTE</span>
          </div>

          <nav className="flex items-center gap-7">
            {["Inicio", "Packs", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/20 text-[12px] tracking-wide hover:text-white/50 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <p className="text-white/15 text-[11px] tracking-wide">
            &copy; {new Date().getFullYear()} People&Taste
          </p>
        </div>
      </div>
    </footer>
  );
}
