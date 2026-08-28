interface NavbarProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const menu = {
    pt: {
      about: "Sobre",
      skills: "Skills & Exp",
      projects: "Projetos",
      contact: "Contato",
      hire: "Fale Comigo ↗"
    },
    en: {
      about: "About",
      skills: "Skills & Exp",
      projects: "Projects",
      contact: "Contact",
      hire: "Hire Me ↗"
    }
  }[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030014]/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <a href="#" className="text-sm font-semibold tracking-wide text-white hover:text-slate-200">
            BX<span className="text-[#8B5CF6]">.</span>PORTFOLIO
          </a>
        </div>
        
        <div className="flex items-center gap-5 md:gap-8">
          <nav className="hidden gap-8 text-xs font-medium text-slate-400 md:flex">
            <a href="#sobre" className="transition-all hover:text-white">
              {menu.about}
            </a>
            <a href="#experiencia" className="transition-all hover:text-white">
              {menu.skills}
            </a>
            <a href="#projetos" className="transition-all hover:text-white">
              {menu.projects}
            </a>
            <a href="#contato" className="transition-all hover:text-white">
              {menu.contact}
            </a>
          </nav>

          {/* Toggle de Idioma */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 border border-white/10 p-0.5 select-none">
            <button
              onClick={() => setLang('pt')}
              className={`rounded-lg px-2.5 py-1 text-[10px] font-bold transition-all duration-300 ${lang === 'pt' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`rounded-lg px-2.5 py-1 text-[10px] font-bold transition-all duration-300 ${lang === 'en' ? 'bg-[#7C3AED] text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
          
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-xl bg-[#7C3AED] px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-[#8B5CF6] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            {menu.hire}
          </a>
        </div>
      </div>
    </header>
  );
}


