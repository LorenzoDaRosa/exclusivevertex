import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { DeviceShowcase } from "@/components/site/DeviceShowcase";
import { projects } from "@/lib/site-data";
import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import serraMobile from "@/assets/serra/serra-mobile-preview.png.asset.json";
import rsRecargasDesktop from "@/assets/rs-recargas/rs-recargas-desktop.png.asset.json";
import rsRecargasMobile from "@/assets/rs-recargas/rs-recargas-mobile.png.asset.json";

const portfolioProjects = projects.filter((project) => ["serra-seguros", "rs-recargas"].includes(project.slug));

export const Route = createFileRoute("/projetos/")({
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
      { property: "og:url", content: "https://exclusivevertex.com.br/projetos" },
    ],
    links: [{ rel: "canonical", href: "https://exclusivevertex.com.br/projetos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projetos — Exclusive Vertex",
          url: "https://exclusivevertex.com.br/projetos",
          inLanguage: "pt-BR",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: portfolioProjects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://exclusivevertex.com.br/projetos/${p.slug}`,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://exclusivevertex.com.br/" },
            { "@type": "ListItem", position: 2, name: "Projetos", item: "https://exclusivevertex.com.br/projetos" },
          ],
        }),
      },
    ],
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

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="group h-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline transition-shadow duration-500 hover:shadow-premium">
              <a
                href="https://www.serraseguros.com.br"
                target="_blank"
                rel="noreferrer"
                className="block p-4 sm:p-8 lg:p-10"
                aria-label="Visitar o site da Serra Seguros e Consórcios"
              >
                <DeviceShowcase
                  desktopImage={serraCapa.url}
                  mobileImage={serraMobile.url}
                  alt="Site da Serra Seguros e Consórcios"
                />
              </a>
              <div className="flex flex-col gap-5 border-t border-hairline bg-surface p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand">
                    Seguros · Consórcios · 2025
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-ink transition-colors group-hover:text-brand lg:text-4xl">
                    Serra Seguros e Consórcios
                  </h2>
                </div>
                <a
                  href="https://www.serraseguros.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  Visitar site
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="group h-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline transition-shadow duration-500 hover:shadow-premium">
              <a
                href="https://www.rsrecargas.com.br"
                target="_blank"
                rel="noreferrer"
                className="block p-4 sm:p-8 lg:p-10"
                aria-label="Visitar o site da RS Recargas e Informática"
              >
                <DeviceShowcase
                  desktopImage={rsRecargasDesktop.url}
                  mobileImage={rsRecargasMobile.url}
                  alt="Site da RS Recargas e Informática"
                />
              </a>
              <div className="flex flex-col gap-5 border-t border-hairline bg-surface p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-brand">
                    Tecnologia · Impressão · 2026
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-ink transition-colors group-hover:text-brand lg:text-4xl">
                    RS Recargas e Informática
                  </h2>
                </div>
                <a
                  href="https://www.rsrecargas.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  Visitar site
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
