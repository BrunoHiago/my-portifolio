export function AiDataSection() {
  return (
    <section id="ia" className="mx-auto mt-10 max-w-6xl px-4">
      <div className="bento-grid">
        <div className="bento-card md:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            IA no meu dia a dia
          </h2>
          <ul className="mt-3 space-y-2 text-xs text-slate-300">
            <li>
              • Uso ferramentas de IA para refatorar código, gerar testes e
              explorar alternativas de arquitetura mais rápido.
            </li>
            <li>
              • Integro APIs de IA em aplicações quando faz sentido para o
              negócio, como geração de texto, automação de tarefas e análises
              rápidas.
            </li>
            <li>
              • Trato IA como copilot técnico, mantendo responsabilidade sobre
              decisões de arquitetura e qualidade final do código.
            </li>
          </ul>
        </div>

        <div className="bento-card md:col-span-3">
          <h3 className="text-sm font-semibold text-slate-50">
            Dados &amp; observabilidade
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            Em projetos web e mobile, busco sempre estruturar logs, métricas
            básicas e monitoramento para entender o comportamento real das
            aplicações em produção.
          </p>
          <ul className="mt-3 space-y-1 text-[0.7rem] text-slate-300">
            <li>• Logs estruturados e rastreio de erros.</li>
            <li>• Métricas simples de uso (engajamento, ações críticas).</li>
            <li>• Feedback rápido para guiar refino de UX e de performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


