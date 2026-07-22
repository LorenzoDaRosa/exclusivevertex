import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { processSteps, differentiators } from "@/lib/site-data";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "Processo — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Como conduzimos cada projeto: sete etapas construídas para gerar previsibilidade e excelência técnica.",
      },
      { property: "og:title", content: "Processo — Exclusive Vertex" },
      { property: "og:description", content: "Sete etapas do nosso processo de trabalho." },
      { property: "og:url", content: "/processo" },
    ],
    links: [{ rel: "canonical", href: "/processo" }],
  }),
  component: ProcessoPage,
});

function ProcessoPage() {
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Processo</SectionLabel>
          <h1 className="mt-6 font-display text-6xl lg:text-8xl text-ink max-w-[18ch]">
            Um método construído para gerar previsibilidade.
          </h1>
          <p className="mt-8 max-w-[62ch] text-lg text-ink-muted">
            Sete etapas objetivas, sem retrabalho e sem improviso. Cada projeto
            passa pelo mesmo padrão de execução — adaptado ao contexto de cada
            marca.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
              Timeline
            </p>
            <p className="text-ink-muted text-sm max-w-xs">
              Cada etapa possui entregas próprias, ritos de validação e critérios
              claros para avançar.
            </p>
          </div>

          <div>
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <div className="grid grid-cols-12 gap-4 border-t border-hairline py-10">
                  <div className="col-span-12 md:col-span-2 font-display text-4xl text-brand tabular-nums">
                    {s.n}
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h3 className="font-display text-3xl text-ink">{s.title}</h3>
                    <p className="mt-4 text-ink-muted leading-relaxed max-w-[62ch]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-hairline" />
          </div>
        </div>

        {/* Differentials */}
        <div className="mt-40">
          <Reveal>
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-6 font-display text-5xl lg:text-6xl text-ink text-balance max-w-[22ch]">
              O que faz um projeto Exclusive Vertex ser diferente.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4 ring-1 ring-hairline rounded-2xl overflow-hidden">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 40}>
                <div className="bg-surface p-8 h-full min-h-[220px]">
                  <span className="text-xs text-brand tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-32 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-t border-hairline pt-10">
            <p className="font-display text-3xl text-ink max-w-[28ch]">
              Pronto para começar o diagnóstico do seu projeto?
            </p>
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white"
            >
              Solicitar orçamento
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
