'use client';

import { motion } from "framer-motion";

interface HeroProps {
  lang: 'pt' | 'en';
}

export function HeroBento({ lang }: HeroProps) {
  const content = {
    pt: {
      tag: "✨ Desenvolvedor Full Stack",
      greeting: "Olá, eu sou ",
      subGreeting: "Crio soluções digitais robustas.",
      description: "Sou um desenvolvedor apaixonado por construir aplicações de alta performance e escalabilidade. Especializado em arquiteturas backend NestJS, frontend moderno e integrações complexas no ramo Fintech.",
      buttonWork: "Ver Meu Trabalho ↗",
      buttonContact: "Fale Comigo",
      techTitle: "Tecnologias que utilizo"
    },
    en: {
      tag: "✨ Full Stack Developer",
      greeting: "Hi, I'm ",
      subGreeting: "I build things for the web.",
      description: "I'm a developer passionate about building high-performance, scalable applications. Specialized in NestJS backend architectures, modern frontends, and complex integrations in the Fintech domain.",
      buttonWork: "View My Work ↗",
      buttonContact: "Contact Me",
      techTitle: "Technologies I work with"
    }
  }[lang];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-28 overflow-hidden">
      {/* Background neon glows */}
      <div className="glow-bg -top-10 -left-10" />
      <div className="glow-cyan-bg top-40 right-10" />

      <div className="grid gap-12 md:grid-cols-12 items-center">
        {/* Left Side: Headline & Brand Intro */}
        <motion.div
          className="md:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a78bfa] border border-[#7C3AED]/20 mb-6">
            {content.tag}
          </span>
          
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            {content.greeting}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">Bruno Xavier</span>.
            <br />
            {content.subGreeting}
          </h1>
          
          <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-slate-400 font-normal">
            {content.description}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#8B5CF6] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {content.buttonWork}
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
            >
              {content.buttonContact}
            </a>
          </div>

          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              {content.techTitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-amber-400">Kotlin</span>
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-emerald-400">Nest.JS</span>
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-sky-400">React</span>
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-indigo-400">TypeScript</span>
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-fuchsia-400">Node.js</span>
              <span className="rounded-lg border border-white/5 bg-[#0C0A20]/50 px-3 py-1.5 text-xs font-medium text-[#10B981]">Gen AI</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Photo with glow & Code Card */}
        <motion.div
          className="md:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Neon Purple radial backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] rounded-full bg-[#7C3AED]/25 filter blur-[60px] animate-pulse -z-10" />

          {/* Profile Photo Wrapper */}
          <div className="relative h-[300px] w-[300px] md:h-[360px] md:w-[360px] rounded-full p-[3px] bg-gradient-to-tr from-[#7C3AED] via-[#06B6D4] to-transparent shadow-2xl">
            <div className="h-full w-full rounded-full overflow-hidden bg-[#0C0A20]">
              <img
                src="/img/Profile.jpg"
                alt="Bruno Xavier"
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Glassmorphic Code Card */}
          <div className="absolute -bottom-6 -right-2 md:right-0 glass-card p-5 max-w-[260px] shadow-2xl text-[10px] font-mono leading-relaxed border border-white/10 select-none">
            <div className="flex gap-1.5 mb-3">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <p className="text-purple-400">const<span className="text-white"> developer </span>=<span className="text-cyan-400"> &#123;</span></p>
            <p className="pl-4 text-slate-400">name: <span className="text-amber-300">"Bruno"</span>,</p>
            <p className="pl-4 text-slate-400">role: <span className="text-amber-300">"Full Stack"</span>,</p>
            <p className="pl-4 text-slate-400">skills: <span className="text-cyan-300">[</span></p>
            <p className="pl-8 text-amber-300">"Kotlin"<span className="text-slate-400">,</span> "Nest.JS"</p>
            <p className="pl-4 text-cyan-300">],</p>
            <p className="pl-4 text-slate-400">passion: <span className="text-emerald-400">"Clean Code"</span></p>
            <p className="text-cyan-400">&#125;;</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


