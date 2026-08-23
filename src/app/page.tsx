'use client';

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeroBento } from "../components/HeroBento";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export default function Page() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <HeroBento lang={lang} />
      <AboutSection lang={lang} />
      <ExperienceSection lang={lang} />
      <ProjectsSection lang={lang} />
      <ContactSection lang={lang} />
    </main>
  );
}


