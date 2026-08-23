'use client';

import { motion } from "framer-motion";

interface ContactProps {
  lang: 'pt' | 'en';
}

export function ContactSection({ lang }: ContactProps) {
  const content = {
    pt: {
      tag: "Vamos trabalhar juntos",
      title: "Tem algum projeto em mente?",
      desc: "Estou sempre aberto a novas discussões de arquitetura, vagas mobile/fullstack ou colaboração em produtos de alto valor.",
      button: "Fale Comigo ↗",
      follow: "Siga-me",
      direct: "Contato Direto",
      rights: "Todos os direitos reservados.",
      made: "Feito com 💜 em Uberaba, MG"
    },
    en: {
      tag: "Let's Work Together",
      title: "Have a project in mind?",
      desc: "I'm always open to new architecture discussions, mobile/fullstack opportunities, or collaboration on high-value digital products.",
      button: "Get in Touch ↗",
      follow: "Follow Me",
      direct: "Direct Contact",
      rights: "All rights reserved.",
      made: "Made with 💜 in Uberaba, MG"
    }
  }[lang];

  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-16 border-t border-white/5">
      <div className="grid gap-12 md:grid-cols-12 items-center">
        {/* Left: CTA */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
            {content.tag}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-sm">
            {content.desc}
          </p>
          <div className="mt-6">
            <a
              href="mailto:brunohiagoxavier@outlook.com"
              className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#8B5CF6] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {content.button}
            </a>
          </div>
        </motion.div>

        {/* Right: Socials & Channels */}
        <motion.div
          className="md:col-span-5 flex flex-col gap-6 md:pl-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              {content.follow}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/BrunoHiago"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-hiago"
                target="_blank"
                rel="noreferrer"
                className="text-[#8B5CF6] hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {content.direct}
            </h3>
            <p className="text-slate-300 font-medium">brunohiagoxavier@outlook.com</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between text-[10px] font-medium text-slate-500">
        <p>&copy; {new Date().getFullYear()} Bruno Xavier. {content.rights}</p>
        <p>{content.made}</p>
      </div>
    </section>
  );
}


