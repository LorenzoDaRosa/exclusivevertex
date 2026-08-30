import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { articles, blogCategories } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    const category = blogCategories.find((c) => c.slug === article.category);
    return { article, category };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artigo — Exclusive Vertex" }, { name: "robots", content: "noindex" }] };
    }
    const url = `https://exclusivevertex.com.br/blog/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData.article.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.article.excerpt },
        { property: "og:title", content: loaderData.article.title },
        { property: "og:description", content: loaderData.article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.article.title,
            description: loaderData.article.excerpt,
            datePublished: loaderData.article.date,
            dateModified: loaderData.article.date,
            articleSection: loaderData.category?.name,
            inLanguage: "pt-BR",
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "Exclusive Vertex" },
            publisher: {
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
      <p className="text-sm text-ink-muted">Artigo não encontrado.</p>
      <Link to="/blog" className="mt-6 inline-block story-link text-ink">
        Ver central de conteúdo
      </Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, category } = Route.useLoaderData();
  return (
    <article className="px-6 lg:px-10 pt-40 pb-32">
      <div className="mx-auto max-w-[780px]">
        <Reveal>
          <SectionLabel>{category?.name ?? "Artigo"}</SectionLabel>
          <h1 className="mt-6 font-display text-4xl lg:text-6xl text-ink text-balance">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink-subtle">
            <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
            <span className="h-1 w-1 rounded-full bg-ink-subtle" />
            <span>{article.readMinutes} min de leitura</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-12 text-xl text-ink leading-relaxed text-pretty">
            {article.intro}
          </p>
        </Reveal>

        {article.sections.map((section, i) => (
          <Reveal key={section.heading} delay={140 + i * 40}>
            <section className="mt-14">
              <h2 className="font-display text-2xl lg:text-3xl text-ink text-balance">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 text-lg text-ink-muted leading-relaxed text-pretty">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-ink-muted leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}


        <div className="mt-16 border-t border-hairline pt-6 flex justify-between text-sm">
          <Link to="/blog" className="story-link text-ink-muted hover:text-ink">
            ← Central de conteúdo
          </Link>
          <Link to="/orcamento" className="story-link text-ink">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </article>
  );
}
