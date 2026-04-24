"use client";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="leading-[0.85]">
            <span className="font-black text-[13px] text-white/60 block">
              PEOPLE
            </span>
            <span className="font-black text-[13px] text-brand/60 block">
              &TASTE
            </span>
          </div>

          <nav className="flex items-center gap-8">
            {["Inicio", "Packs", "Personalización", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ó", "o")}`}
                className="text-white/25 text-[13px] tracking-wide hover:text-white/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-white/20 text-[12px] tracking-wide">
            &copy; {new Date().getFullYear()} People&Taste
          </p>
        </div>
      </div>
    </footer>
  );
}
