import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { DeviceShowcase } from "@/components/site/DeviceShowcase";
import serraCapa from "@/assets/serra/serra_v2_62.png.asset.json";
import serraMobile from "@/assets/serra/serra-mobile-preview.png.asset.json";
import espetinhosDesktop from "@/assets/espetinhos/espetinhos-desktop.png.asset.json";
import espetinhosMobile from "@/assets/espetinhos/espetinhos-mobile.png.asset.json";
import beHappyDesktop from "@/assets/be-happy/be-happy-desktop.png.asset.json";
import beHappyMobile from "@/assets/be-happy/be-happy-mobile.png.asset.json";
import rsRecargasDesktop from "@/assets/rs-recargas/rs-recargas-desktop.png.asset.json";
import rsRecargasMobile from "@/assets/rs-recargas/rs-recargas-mobile.png.asset.json";
import gentlemansDesktop from "@/assets/gentlemans/gentlemans-desktop.png.asset.json";
import gentlemansMobile from "@/assets/gentlemans/gentlemans-mobile.png.asset.json";

const portfolioProjects = [
  {
    slug: "serra-seguros",
    title: "Serra Seguros e Consórcios",
    category: "Seguros · Consórcios · 2025",
    href: "https://www.serraseguros.com.br",
    desktopImage: serraCapa.url,
    mobileImage: serraMobile.url,
  },
  {
    slug: "espetinhos-do-pepe",
    title: "Espetinhos do Pepê",
    category: "Espetinhos · Cardápio digital · 2026",
    href: "https://espetinhosdopepe.com/",
    desktopImage: espetinhosDesktop.url,
    mobileImage: espetinhosMobile.url,
  },
  {
    slug: "behappy-cookies",
    title: "BeHappy Cookies",
    category: "Cookies artesanais · Pedidos online · 2026",
    href: "https://behappycookies.com.br/",
    desktopImage: beHappyDesktop.url,
    mobileImage: beHappyMobile.url,
  },
  {
    slug: "rs-recargas",
    title: "RS Recargas e Informática",
    category: "Tecnologia · Impressão · 2026",
    href: "https://www.rsrecargas.com.br",
    desktopImage: rsRecargasDesktop.url,
    mobileImage: rsRecargasMobile.url,
  },
  {
    slug: "gentlemans-club",
    title: "Gentleman's Club Barbearia",
    category: "Barbearia · Estilo · 2026",
    href: "https://barbeariagentlemansclub.com/",
    desktopImage: gentlemansDesktop.url,
    mobileImage: gentlemansMobile.url,
  },
] as const;

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
            itemListElement: portfolioProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.title,
              url: `https://exclusivevertex.com.br/projetos/${project.slug}`,
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
          {portfolioProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <article className="group h-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline transition-shadow duration-500 hover:shadow-premium">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 sm:p-8 lg:p-10"
                  aria-label={`Visitar o site: ${project.title}`}
                >
                  <DeviceShowcase
                    desktopImage={project.desktopImage}
                    mobileImage={project.mobileImage}
                    alt={`Site ${project.title}`}
                  />
                </a>
                <div className="flex flex-col gap-5 border-t border-hairline bg-surface p-6 sm:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-brand">
                      {project.category}
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-ink transition-colors group-hover:text-brand lg:text-4xl">
                      {project.title}
                    </h2>
                  </div>
                  <a
                    href={project.href}
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
          ))}
        </div>
      </div>
    </div>
  );
}
