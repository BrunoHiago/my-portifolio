'use client';

import { motion } from "framer-motion";

interface ExperienceProps {
  lang: 'pt' | 'en';
}

export function ExperienceSection({ lang }: ExperienceProps) {
  const content = {
    pt: {
      journey: "Jornada",
      stories: "Histórias de Sucesso",
      job1Title: "Desenvolvedor Full Stack",
      job1Period: "Jan/2025 – Atual",
      job1Desc: "Atuação no ramo Fintech com desenvolvimento e sustentação de aplicativo de cartão de crédito e integrações complexas com FIDCs (Fundos de Investimento em Direitos Creditórios).",
      job2Title: "Desenvolvedor Web",
      job2Period: "Fev/2023 – Ago/2023",
      job2Desc: "Construção de SPAs robustas com React.js e desenvolvimento de APIs escaláveis com Nest.JS, garantindo alta tolerância a falhas e otimização de queries MongoDB.",
      skillsTag: "Minhas Skills",
      skillsTitle: "Tecnologias que Domino"
    },
    en: {
      journey: "Journey",
      stories: "Success Stories",
      job1Title: "Full Stack Developer",
      job1Period: "Jan/2025 – Present",
      job1Desc: "Working in the Fintech domain, developing and maintaining credit card applications and complex integrations with FIDCs (Credit Rights Investment Funds).",
      job2Title: "Web Developer",
      job2Period: "Feb/2023 – Aug/2023",
      job2Desc: "Building robust SPAs with React.js and developing scalable APIs with Nest.JS, ensuring high fault-tolerance and MongoDB queries optimization.",
      skillsTag: "My Skills",
      skillsTitle: "Technologies I Master"
    }
  }[lang];

  const skillsList = [
    { name: "Kotlin & Compose", percentage: 80 },
    { name: "Nest.JS & Node.js", percentage: 85 },
    { name: "React.js & Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 85 },
    { name: "MongoDB & SQL", percentage: 75 },
    { name: "Git & Docker", percentage: 85 },
  ];

  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-16 md:grid-cols-12">
        {/* Left Column: Timeline */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
            {content.journey}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            {content.stories}
          </h2>

          <div className="mt-10 space-y-10">
            {/* Job 1: Grão Direto */}
            <div className="relative pl-6 border-l-2 border-[#7C3AED]/30">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-[#7C3AED]" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white">
                  {content.job1Title}
                </h3>
                <span className="rounded-full bg-slate-800/40 border border-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                  {content.job1Period}
                </span>
              </div>
              <p className="text-xs text-[#06B6D4] font-medium mt-1">Grão Direto · Uberaba, MG</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {content.job1Desc}
              </p>
            </div>

            {/* Job 2: N-Soluções */}
            <div className="relative pl-6 border-l-2 border-slate-800">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-slate-700" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white">
                  {content.job2Title}
                </h3>
                <span className="rounded-full bg-slate-800/40 border border-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                  {content.job2Period}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium mt-1">N-Soluções · Uberaba, MG</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {content.job2Desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Progress Bars */}
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
            {content.skillsTag}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            {content.skillsTitle}
          </h2>

          <div className="mt-10 space-y-6">
            {skillsList.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-slate-400">{skill.percentage}%</span>
                </div>
                {/* Horizontal Progress Bar */}
                <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full progress-bar-fill rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


