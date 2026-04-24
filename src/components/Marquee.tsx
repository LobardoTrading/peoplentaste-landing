"use client";

const items = [
  "Experiencias gourmet",
  "Boxes personalizadas",
  "Productos premium",
  "Logística nacional",
  "Branding a medida",
  "Regalos corporativos",
];

export default function Marquee() {
  return (
    <div className="py-6 overflow-hidden border-y border-black/[0.04] bg-white">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-10">
            <span className="w-[5px] h-[5px] rounded-full bg-brand/40 mr-10 flex-shrink-0" />
            <span className="text-dark/20 text-[12px] font-semibold tracking-[0.18em] uppercase select-none">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
