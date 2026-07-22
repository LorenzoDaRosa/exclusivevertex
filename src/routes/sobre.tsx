import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Um estúdio digital que combina estratégia, design e desenvolvimento para criar plataformas capazes de fortalecer marcas e impulsionar resultados.",
      },
      { property: "og:title", content: "Sobre — Exclusive Vertex" },
      {
        property: "og:description",
        content: "Posicionamento, princípios e forma de trabalho da Exclusive Vertex.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionLabel>Sobre</SectionLabel>
          <h1 className="mt-6 font-display text-5xl lg:text-8xl text-ink text-balance max-w-[22ch]">
            Empresas excelentes representadas por sites à altura da sua qualidade.
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_2fr]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
              Posicionamento
            </p>
            <div className="space-y-6 text-lg text-ink-muted leading-relaxed text-pretty">
              <p>
                A Exclusive Vertex nasceu para resolver um problema comum:
                empresas excelentes sendo representadas por sites que não
                refletem a sua qualidade.
              </p>
              <p>
                Acreditamos que um site deve transmitir confiança, facilitar o
                atendimento e contribuir diretamente para o crescimento do
                negócio — não apenas existir como um cartão de visitas online.
              </p>
              <p>
                Não utilizamos modelos prontos. Cada projeto é pensado de acordo
                com os objetivos, o público e a operação de cada empresa.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-32 grid gap-12 md:grid-cols-3 border-t border-hairline pt-16">
          {[
            {
              t: "Estratégia",
              d: "Toda decisão começa por uma leitura clara do negócio, do público e dos objetivos.",
            },
            {
              t: "Design",
              d: "Interfaces exclusivas, tipografia impecável e hierarquia visual construída com intenção.",
            },
            {
              t: "Tecnologia",
              d: "Código limpo, performance e SEO estruturados desde a fundação do projeto.",
            },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 80}>
              <p className="text-[11px] uppercase tracking-[0.28em] text-ink-subtle">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-3xl text-ink">{b.t}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">{b.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-32 rounded-3xl bg-surface-2 ring-1 ring-hairline p-12 lg:p-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <p className="font-display text-3xl lg:text-4xl text-ink max-w-[28ch]">
              Vamos construir a próxima referência digital do seu mercado.
            </p>
            <Link
              to="/orcamento"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white"
            >
              Iniciar conversa
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
