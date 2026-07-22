import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviço — Exclusive Vertex" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.title} — Exclusive Vertex` },
        { property: "og:description", content: loaderData.short },
        { property: "og:url", content: `/servicos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="px-6 pt-40 pb-32 text-center">
      <p className="text-sm text-ink-muted">Serviço não encontrado.</p>
      <Link to="/servicos" className="mt-6 inline-block story-link text-ink">
        Ver todos os serviços
      </Link>
    </div>
  ),
  component: ServicoDetail,
});

function ServicoDetail() {
  const s = Route.useLoaderData();
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionLabel>Serviço</SectionLabel>
          <h1 className="mt-6 font-display text-5xl lg:text-8xl text-ink text-balance max-w-[18ch]">
            {s.title}
          </h1>
          <p className="mt-8 max-w-[62ch] text-lg text-ink-muted text-pretty">
            {s.intro}
          </p>
        </Reveal>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
              O que entregamos
            </h3>
            <ul className="space-y-4">
              {s.deliverables.map((d: string) => (
                <li key={d} className="flex gap-3 text-ink-muted">
                  <span className="mt-3 h-px w-4 shrink-0 bg-brand" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-brand mb-6">
              Resultados percebidos
            </h3>
            <ul className="space-y-4">
              {s.outcomes.map((d: string) => (
                <li key={d} className="flex gap-3 text-ink-muted">
                  <span className="mt-3 h-px w-4 shrink-0 bg-ink-subtle" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 rounded-3xl bg-surface-2 ring-1 ring-hairline p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <p className="font-display text-3xl lg:text-4xl text-ink max-w-[26ch]">
              Vamos discutir esse serviço para o seu projeto?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/orcamento"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white"
              >
                Solicitar orçamento
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center rounded-full ring-1 ring-hairline px-6 py-3 text-sm text-ink"
              >
                Falar direto
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-hairline pt-6">
          <Link to="/servicos" className="story-link text-sm text-ink-muted hover:text-ink">
            ← Todos os serviços
          </Link>
        </div>
      </div>
    </div>
  );
}
