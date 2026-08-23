import type { ReactNode } from "react";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bruno Xavier | Full Stack & Mobile",
  description:
    "Portfólio de Bruno Xavier – Desenvolvedor Full Stack & Mobile, AI-Assisted Developer."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} min-h-full bg-[#080C14] text-slate-50 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}


