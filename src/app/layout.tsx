import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
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
    description:
      "Boxes gourmet para sorprender a clientes y equipos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
