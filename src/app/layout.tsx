import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "People & Taste | Regalos Corporativos Gourmet",
  description:
    "Boxes gourmet para sorprender a clientes y equipos. Experiencias gastronómicas pensadas para empresas que buscan diferenciarse.",
  keywords: [
    "regalos corporativos",
    "boxes gourmet",
    "regalos empresariales",
    "experiencias gastronómicas",
    "People & Taste",
  ],
  openGraph: {
    title: "People & Taste | Regalos Corporativos Gourmet",
    description: "Boxes gourmet para sorprender a clientes y equipos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
