import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ProjectMock } from "@/components/site/ProjectMock";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Cases e projetos digitais desenvolvidos pela Exclusive Vertex. Design, estratégia e tecnologia aplicadas a marcas reais.",
      },
      { property: "og:title", content: "Projetos — Exclusive Vertex" },
      { property: "og:description", content: "Cases desenvolvidos pela Exclusive Vertex." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Portfólio</SectionLabel>
          <h1 className="mt-6 font-display text-6xl lg:text-8xl text-ink max-w-[16ch]">
            Projetos que representam a qualidade da marca por trás.
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-24">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-[21/10] w-full">
                  <ProjectMock label={p.title} variant="site" />
                </div>
                <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-t border-hairline pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-brand">
                      {p.category} · {p.year}
                    </p>
                    <h2 className="mt-3 font-display text-3xl lg:text-5xl text-ink group-hover:text-brand transition-colors">
                      {p.title}
                    </h2>
                  </div>
                  <span className="text-sm text-ink-muted story-link">Ver case</span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal>
            <div className="rounded-3xl border border-dashed border-hairline p-14 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-ink-subtle">
                Próximos cases
              </p>
              <p className="mt-4 font-display text-3xl text-ink">
                Novos projetos em produção.
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                Estamos preparando os próximos cases para publicação.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
