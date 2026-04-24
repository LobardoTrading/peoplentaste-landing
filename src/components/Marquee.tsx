"use client";

export default function Marquee() {
  const items = [
    "Experiencias gourmet",
    "Regalos corporativos",
    "Boxes personalizadas",
    "Productos premium",
    "Logística nacional",
    "Branding a medida",
  ];

  return (
    <div className="bg-dark py-5 overflow-hidden border-y border-white/[0.04]">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand mr-8 flex-shrink-0" />
            <span className="text-white/30 text-[13px] font-medium tracking-[0.15em] uppercase">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
