import { createFileRoute } from "@tanstack/react-router";
import siteLogo from "@/assets/vertex-lockup.png.asset.json";
import { V8Home } from "@/components/site/home/V8Home";

const seoTitle = "Criação de Sites em Caxias do Sul | Exclusive Vertex";
const seoDescription = "Estúdio digital em Caxias do Sul: sites premium, landing pages e redesign com design autoral, copy estratégico e foco em gerar contatos e orçamentos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      {
        name: "description",
        content:
          seoDescription,
      },
      { property: "og:title", content: seoTitle },
      {
        property: "og:description",
        content:
          seoDescription,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://exclusivevertex.com.br/" },
    ],
    links: [{ rel: "canonical", href: "https://exclusivevertex.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://exclusivevertex.com.br/#business",
          name: "Exclusive Vertex",
          url: "https://exclusivevertex.com.br/",
          description: seoDescription,
          logo: new URL(siteLogo.url, "https://exclusivevertex.com.br/").href,
          telephone: "+55 54 3214-4112",
          email: "contato@exclusivevertex.com",
          serviceType: ["criação de sites", "landing pages", "redesign de sites", "UI/UX", "SEO"],
          priceRange: "$$$",
          image: "https://exclusivevertex.com.br/vertex-favicon.png",
          areaServed: { "@type": "Place", name: "Caxias do Sul e região" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Marechal Floriano, 555, Sala 804 — Centro",
            addressLocality: "Caxias do Sul",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          sameAs: ["https://instagram.com/exclusive.vertex"],
          parentOrganization: { "@id": "https://exclusivevertex.com.br/#organization" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return <V8Home />;
}
