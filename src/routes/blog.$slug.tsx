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
    return {
      meta: [
        { title: `${loaderData.article.title} — Exclusive Vertex` },
        { name: "description", content: loaderData.article.excerpt },
        { property: "og:title", content: loaderData.article.title },
        { property: "og:description", content: loaderData.article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
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
          <div className="mt-12 space-y-6 text-lg text-ink-muted leading-relaxed text-pretty">
            <p>{article.excerpt}</p>
            <p>
              Este é um espaço reservado para o conteúdo completo do artigo. A
              estrutura editorial da Exclusive Vertex está preparada para
              publicações regulares, com hierarquia tipográfica, imagens de apoio
              e blocos de destaque.
            </p>
            <p>
              O conteúdo real deste artigo será publicado em breve, mantendo o
              mesmo rigor editorial dos demais materiais da central de conteúdo.
            </p>
          </div>
        </Reveal>

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
