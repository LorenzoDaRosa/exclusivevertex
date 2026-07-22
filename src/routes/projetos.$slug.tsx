import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ProjectMock } from "@/components/site/ProjectMock";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto — Exclusive Vertex" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — Exclusive Vertex` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projetos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 pt-40 pb-32 text-center">
      <p className="text-sm text-ink-muted">Projeto não encontrado.</p>
      <Link to="/projetos" className="mt-6 inline-block story-link text-ink">
        Ver todos os projetos
      </Link>
    </div>
  ),
  component: ProjetoDetail,
});

function ProjetoDetail() {
  const project = Route.useLoaderData();

  return (
    <article className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>{project.category} · {project.year}</SectionLabel>
          <h1 className="mt-6 font-display text-5xl lg:text-8xl text-ink text-balance max-w-[22ch]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-[64ch] text-lg text-ink-muted text-pretty">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 aspect-[21/10] w-full">
            <ProjectMock label={project.title} variant="site" />
          </div>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-3">
          <Reveal>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                Contexto
              </h3>
              <p className="text-ink-muted text-pretty leading-relaxed">
                {project.context}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                Problemas identificados
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.problems.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-ink-subtle" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-4">
                Soluções implementadas
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.solutions.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        <Reveal>
          <div className="mt-32">
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-8">
              Galeria
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((g: string, i: number) => (
                <div key={g} className="aspect-[4/3]">
                  <ProjectMock
                    label={g}
                    variant={i % 3 === 0 ? "site" : i % 3 === 1 ? "dashboard" : "mobile"}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stack + outcomes */}
        <div className="mt-32 grid gap-16 lg:grid-cols-2 border-t border-hairline pt-16">
          <Reveal>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full ring-1 ring-hairline px-4 py-1.5 text-xs text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
                Resultados esperados
              </h3>
              <ul className="space-y-3 text-ink-muted">
                {project.outcomes.map((o: string) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Testimonial placeholder */}
        <Reveal>
          <div className="mt-24 rounded-3xl bg-surface-2 ring-1 ring-hairline p-12 lg:p-20">
            <p className="text-[11px] uppercase tracking-[0.28em] text-ink-subtle">
              Depoimento
            </p>
            <p className="mt-6 font-display text-2xl lg:text-3xl text-ink italic max-w-[60ch]">
              “Espaço reservado para o depoimento do cliente após a publicação
              oficial do projeto.”
            </p>
          </div>
        </Reveal>

        <div className="mt-24 flex justify-between border-t border-hairline pt-8 text-sm">
          <Link to="/projetos" className="story-link text-ink-muted hover:text-ink">
            ← Todos os projetos
          </Link>
          <Link to="/orcamento" className="story-link text-ink">
            Solicitar um projeto como este
          </Link>
        </div>
      </div>
    </article>
  );
}
