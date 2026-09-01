import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { services, getServiceCases } from "@/lib/site-data";

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
    const url = `https://exclusivevertex.com.br/servicos/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.title} — Exclusive Vertex` },
        { property: "og:description", content: loaderData.short },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://exclusivevertex.com.br/" },
              { "@type": "ListItem", position: 2, name: "Serviços", item: "https://exclusivevertex.com.br/servicos" },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.title,
            description: loaderData.short,
            serviceType: loaderData.title,
            url,
            areaServed: { "@type": "Place", name: "Serra Gaúcha, RS, Brasil" },
            subjectOf: getServiceCases(params.slug).map((p) => ({
              "@type": "CreativeWork",
              name: `Case ${p.title} — ${loaderData.title}`,
              url: `https://exclusivevertex.com.br/projetos/${p.slug}`,
            })),
            provider: {
              "@type": "Organization",
              name: "Exclusive Vertex",
              url: "https://exclusivevertex.com.br",
            },
          }),
        },
      ],
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

        <ServiceCases serviceSlug={s.slug} serviceTitle={s.title} />

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

function ServiceCases({ serviceSlug, serviceTitle }: { serviceSlug: string; serviceTitle: string }) {
  const cases = getServiceCases(serviceSlug);
  if (cases.length === 0) return null;

  return (
    <section className="mt-28" aria-labelledby="cases-servico">
      <Reveal>
        <h2
          id="cases-servico"
          className="font-display text-3xl lg:text-5xl text-ink text-balance max-w-[24ch]"
        >
          {serviceTitle} na prática: casos reais de empresas da Serra Gaúcha
        </h2>
        <p className="mt-5 max-w-[62ch] text-ink-muted text-pretty">
          Projetos entregues pela Exclusive Vertex em que este serviço foi parte
          central da estratégia — com contexto, decisões de projeto e resultados
          percebidos por cada cliente.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {cases.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <article className="h-full rounded-3xl bg-surface-2 ring-1 ring-hairline p-8 lg:p-10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand">
                {p.category} · {p.year}
              </p>
              <h3 className="mt-4 font-display text-2xl lg:text-3xl text-ink">
                {p.title}
              </h3>
              {p.tagline && (
                <p className="mt-3 text-sm text-ink-muted text-pretty">{p.tagline}</p>
              )}

              {p.metrics && p.metrics.length > 0 && (
                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
                  {p.metrics.slice(0, 4).map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                        {m.label}
                      </dt>
                      <dd className="mt-1 font-display text-xl text-ink">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="mt-7 space-y-3">
                {p.outcomes.slice(0, 3).map((o) => (
                  <li key={o} className="flex gap-3 text-sm text-ink-muted">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-brand" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-hairline">
                <Link
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="story-link text-sm text-ink hover:text-brand"
                >
                  Ver o case completo de {p.title} →
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
