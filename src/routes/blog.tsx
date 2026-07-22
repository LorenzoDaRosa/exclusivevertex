import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { blogCategories, articles } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Central de Conteúdo — Exclusive Vertex" },
      {
        name: "description",
        content:
          "Artigos sobre sites, SEO, marketing, design, UX, tecnologia, IA, vendas e empreendedorismo.",
      },
      { property: "og:title", content: "Central de Conteúdo — Exclusive Vertex" },
      {
        property: "og:description",
        content: "Insights sobre design, tecnologia e o futuro do digital.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionLabel>Central de Conteúdo</SectionLabel>
          <h1 className="mt-6 font-display text-6xl lg:text-8xl text-ink max-w-[18ch]">
            Insights sobre design, tecnologia e o futuro do digital.
          </h1>
        </Reveal>

        {/* Categories */}
        <Reveal delay={100}>
          <div className="mt-16 flex flex-wrap gap-2">
            {blogCategories.map((c) => (
              <span
                key={c.slug}
                className="rounded-full ring-1 ring-hairline px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-ink hover:ring-ink/30 transition-colors cursor-default"
                title={c.description}
              >
                {c.name}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Articles */}
        <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="group block"
              >
                <div className="aspect-[4/3] rounded-2xl bg-surface-2 ring-1 ring-hairline overflow-hidden relative">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(600px 300px at 30% 30%, rgba(47,107,255,0.2), transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-ink-subtle">
                    {a.category}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
                  <span>{new Date(a.date).toLocaleDateString("pt-BR")}</span>
                  <span className="h-1 w-1 rounded-full bg-ink-subtle" />
                  <span>{a.readMinutes} min de leitura</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-ink group-hover:text-brand transition-colors text-balance">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {a.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 border-t border-hairline pt-10 text-sm text-ink-muted">
            Novos artigos publicados regularmente. Volte em breve.
          </div>
        </Reveal>
      </div>
    </div>
  );
}
