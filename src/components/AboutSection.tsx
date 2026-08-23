'use client';

import { motion } from "framer-motion";

interface AboutProps {
  lang: 'pt' | 'en';
}

export function AboutSection({ lang }: AboutProps) {
  const content = {
    pt: {
      tag: "Sobre Mim",
      title: "Desenvolvendo soluções digitais inteligentes.",
      para1: "Sou graduado em Engenharia de Computação pelo IFTM (2025), atuando profissionalmente no desenvolvimento de soluções fullstack com foco em fintech e crédito agrícola. Minha paixão reside em resolver problemas reais através de software limpo, testável e sustentável.",
      para2: "Com certificações em IA Generativa pela Compass UOL e Ciência de Dados pela UNIFESP, uso a inteligência artificial de forma pragmática para acelerar entregas, otimizar fluxos de desenvolvimento e garantir a qualidade do produto entregue.",
      metricExp: "Anos de Experiência",
      metricCert: "Certificações",
      metricProj: "Projetos Concluídos",
      metricClean: "Foco em Código Limpo"
    },
    en: {
      tag: "About Me",
      title: "Developing smart digital solutions.",
      para1: "I graduated in Computer Engineering from IFTM (2025), working professionally in the development of full-stack solutions with a focus on fintech and agricultural credit. My passion lies in solving real-world problems through clean, testable, and sustainable software.",
      para2: "With certifications in Generative AI by Compass UOL and Data Science by UNIFESP, I use artificial intelligence pragmatically to accelerate deliveries, optimize development workflows, and ensure final code quality.",
      metricExp: "Years Experience",
      metricCert: "Certifications",
      metricProj: "Projects Completed",
      metricClean: "Clean Code Focus"
    }
  }[lang];

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-12 items-center">
        {/* Left Side: About Text */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
            {content.tag}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-400 font-normal">
            {content.para1}
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-400 font-normal">
            {content.para2}
          </p>
        </motion.div>

        {/* Right Side: 4 Clean Status Metric Cards */}
        <motion.div
          className="md:col-span-6 grid gap-4 grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Card 1: Experience */}
          <div className="glass-card p-6 flex flex-col justify-between h-[150px]">
            <div className="text-[#8B5CF6] text-2xl">
              📅
            </div>
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">2+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{content.metricExp}</p>
            </div>
          </div>

          {/* Card 2: Certifications */}
          <div className="glass-card p-6 flex flex-col justify-between h-[150px]">
            <div className="text-[#06B6D4] text-2xl">
              🎓
            </div>
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">3+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{content.metricCert}</p>
            </div>
          </div>

          {/* Card 3: Projects */}
          <div className="glass-card p-6 flex flex-col justify-between h-[150px]">
            <div className="text-[#10B981] text-2xl">
              💻
            </div>
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">10+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{content.metricProj}</p>
            </div>
          </div>

          {/* Card 4: Clean Code */}
          <div className="glass-card p-6 flex flex-col justify-between h-[150px]">
            <div className="text-amber-400 text-2xl">
              🛡️
            </div>
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">100%</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">{content.metricClean}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
