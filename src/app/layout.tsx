import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brunoxavier.dev.br";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bruno Hiago Xavier | Full Stack & Mobile Developer",
    template: "%s | Bruno Hiago Xavier",
  },
  description: "Desenvolvedor Full Stack & Mobile especializado em Kotlin, NestJS, React e Next.js. Construo produtos digitais para fintech e agritech.",
  keywords: ["Bruno Hiago Xavier", "Full Stack Developer", "Kotlin", "NestJS", "Next.js", "React", "Fintech", "Agritech"],
  authors: [{ name: "Bruno Hiago Xavier", url: siteUrl }],
  creator: "Bruno Hiago Xavier",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Bruno Hiago Xavier",
    title: "Bruno Hiago Xavier | Full Stack & Mobile Developer",
    description: "Kotlin, NestJS, React e Next.js para produtos de fintech e agritech.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Hiago Xavier | Full Stack & Mobile Developer",
    description: "Kotlin, NestJS, React e Next.js para produtos de fintech e agritech.",
  },
  robots: { index: true, follow: true },
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
