'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectsProps {
  lang: 'pt' | 'en';
}

export function ProjectsSection({ lang }: ProjectsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGifModalOpen, setIsGifModalOpen] = useState(false);

  const content = {
    pt: {
      tag: "Projetos em Destaque",
      title: "Trabalhos Recentes",
      viewProject: "Ver Preview",
      viewRegistry: "Ver Registro",
      modalTitle: "Certificado de Registro de Software",
      modalAgency: "INPI - Instituto Nacional da Propriedade Industrial",
      modalProcess: "Processo nº:",
      modalSoftwareName: "Título do Software:",
      modalOwner: "Titular(es):",
      modalAuthor: "Autor(es):",
      modalLanguage: "Linguagem:",
      modalCreated: "Data de Criação:",
      modalIssued: "Expedido em:",
      modalHash: "SHA-256 Hash:",
      modalStatus: "Status do Registro:",
      modalActive: "REGISTRADO & VÁLIDO",
      modalClose: "Fechar"
    },
    en: {
      tag: "Featured Projects",
      title: "Some of My Recent Work",
      viewProject: "View Preview",
      viewRegistry: "View Registry",
      modalTitle: "Software Registration Certificate",
      modalAgency: "INPI - National Institute of Industrial Property",
      modalProcess: "Process No:",
      modalSoftwareName: "Software Title:",
      modalOwner: "Owner(s):",
      modalAuthor: "Author(s):",
      modalLanguage: "Languages:",
      modalCreated: "Creation Date:",
      modalIssued: "Issued Date:",
      modalHash: "SHA-256 Hash:",
      modalStatus: "Registry Status:",
      modalActive: "REGISTERED & ACTIVE",
      modalClose: "Close"
    }
  }[lang];

  const projects = [
    {
      id: "01",
      category: lang === 'pt' ? "Plataforma Web & Agritech" : "Web Platform & Agritech",
      title: "Agritrack",
      description: lang === 'pt'
        ? "Sistema para produtores rurais que centraliza o controle de áreas, custos, receitas e indicadores de produtividade, apoiando decisões mais assertivas."
        : "A farm-management system that centralizes areas, costs, revenue, and productivity indicators to support better data-driven decisions.",
      image: "/img/AgritrackBanner.png",
      tags: ["NestJS", "Next.js", "PostgreSQL", "Google Maps"],
      link: "https://agritrack.com.br",
      hasRegistry: true,
      isLogo: false,
      hasGifPreview: false
    },
    {
      id: "02",
      category: "Full Stack & Mobile",
      title: "Foodie Finds",
      description: lang === 'pt'
        ? "Foodie Finds é um aplicativo de recomendação de restaurantes para explorar cardápios, favoritar estabelecimentos e acessar dados em tempo real, com backend em NestJS."
        : "Foodie Finds is a restaurant recommendation app that lets you explore menus, favorite places, and access real-time data, backed by a NestJS API.",
      image: "/img/FoodieFindsLogo.png",
      tags: ["Kotlin", "Compose", "NestJS", "PostgreSQL"],
      link: "https://github.com/BrunoHiago/FoodApp",
      hasRegistry: false,
      isLogo: false,
      hasGifPreview: true
    },
    {
      id: "03",
      category: "Game Engine",
      title: "Galactic Meteor Smash",
      description: lang === 'pt'
        ? "Jogo espacial em Python (Pygame) para explorar game loop customizado e física de colisão."
        : "Space game built in Python (Pygame) to explore custom game loop and collision physics.",
      image: "/projects/Galact Meteor Smash/GalacticMeteorSmash.jpg",
      tags: ["Python", "Pygame", "Physics"],
      link: "https://brunohiago.github.io/Galactic-Meteor-Smash/",
      hasRegistry: false,
      isLogo: false,
    }
  ];

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C3AED]">
          {content.tag}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
          {content.title}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass-card overflow-hidden flex flex-col group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image mockup top */}
            <div className="relative h-[200px] w-full overflow-hidden bg-[#0C0A20] border-b border-white/5 flex items-center justify-center">
              {project.isLogo ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A081A] via-[#042416] to-[#0A081A]" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </>
              ) : (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/65 to-transparent" />
                </>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  <span>{project.category}</span>
                  <span className="text-[#8B5CF6] text-sm font-bold font-mono">{project.id}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 font-normal flex-grow">
                  {project.description}
                </p>
                {/* Skills/Tags above the divider */}
                <div className="mt-4 flex flex-wrap gap-1.5 text-[9px] font-bold tracking-wider text-slate-400">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded bg-slate-800/40 border border-white/5 px-2 py-0.5 uppercase">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Divider containing only the primary buttons */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-end">
                <div className="flex gap-2">
                  {project.hasRegistry && (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs font-bold text-slate-400 transition-all hover:text-[#8B5CF6] border border-white/5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg cursor-pointer"
                    >
                      {content.viewRegistry}
                    </button>
                  )}
                  {project.hasGifPreview ? (
                    <button
                      onClick={() => setIsGifModalOpen(true)}
                      className="text-xs font-bold text-white transition-all group-hover:translate-x-1 flex items-center gap-1 hover:text-[#8B5CF6] border border-white/5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg cursor-pointer"
                    >
                      {content.viewProject} <span className="text-[#8B5CF6] font-bold">➔</span>
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-white transition-all group-hover:translate-x-1 flex items-center gap-1 hover:text-[#8B5CF6] border border-white/5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
                    >
                      {content.viewProject} <span className="text-[#8B5CF6] font-bold">➔</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal interativo */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              className="glass-card max-w-xl w-full p-8 border border-white/10 shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Certificate Header */}
              <div className="text-center pb-6 border-b border-white/5">
                <span className="text-3xl">🛡️</span>
                <h3 className="mt-3 text-lg font-bold text-white tracking-tight">
                  {content.modalTitle}
                </h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {content.modalAgency}
                </p>
              </div>

              {/* Certificate Body */}
              <div className="mt-6 space-y-3 text-xs leading-relaxed max-h-[350px] overflow-y-auto pr-1">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-semibold">{content.modalProcess}</span>
                  <span className="text-white font-mono font-bold">BR512026003992-4</span>
                </div>

                <div className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalSoftwareName}</span>
                  <span className="text-white font-bold">{lang === 'pt' ? 'Agritrack - Sistema de gerenciamento de Áreas Agrícolas' : 'Agritrack - Agricultural Areas Management System'}</span>
                </div>

                <div className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalOwner}</span>
                  <span className="text-white font-medium text-[11px] leading-tight">INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO TRIÂNGULO MINEIRO</span>
                </div>

                <div className="flex justify-between items-start border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalAuthor}</span>
                  <span className="text-white font-semibold text-right text-[11px] pl-4">MAURO BORGES FRANÇA; BRUNO HIAGO XAVIER</span>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalLanguage}</span>
                  <span className="text-slate-200">JAVASCRIPT, CSS, POSTGRESQL, JSON, OUTROS</span>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalCreated}</span>
                  <span className="text-slate-200">01/04/2024</span>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalIssued}</span>
                  <span className="text-slate-200">02/06/2026</span>
                </div>

                <div className="flex justify-between items-center border-t border-white/5 pt-2">
                  <span className="text-slate-400 font-semibold">{content.modalStatus}</span>
                  <span className="text-emerald-400 font-bold tracking-wide">{content.modalActive}</span>
                </div>
              </div>

              {/* Actions with PDF View and Close button */}
              <div className="mt-8 flex gap-3">
                <a
                  href="/api/files?file=certificados/registro_software_agritrack.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  📄 {lang === 'pt' ? 'Ver PDF' : 'View PDF'}
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#8B5CF6] text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
                >
                  {content.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal de Preview do GIF */}
      <AnimatePresence>
        {isGifModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              className="glass-card max-w-sm w-full p-6 border border-white/10 shadow-2xl relative flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsGifModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer text-lg font-bold"
              >
                ✕
              </button>

              <h3 className="text-base font-bold text-white mb-4">
                {lang === 'pt' ? 'Demonstração - Foodie Finds' : 'Demo - Foodie Finds'}
              </h3>

              {/* GIF Container */}
              <div className="relative w-full aspect-[9/16] max-h-[460px] overflow-hidden rounded-xl border border-white/5 bg-black flex items-center justify-center">
                <img
                  src="/img/FoodieFinds.gif"
                  alt="Foodie Finds Preview"
                  className="h-full object-contain"
                />
              </div>

              {/* Action Button */}
              <div className="mt-6 w-full flex gap-3">
                <a
                  href="https://github.com/BrunoHiago/FoodApp"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-white transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setIsGifModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#8B5CF6] text-xs font-bold text-white transition-all duration-300 cursor-pointer"
                >
                  {content.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
