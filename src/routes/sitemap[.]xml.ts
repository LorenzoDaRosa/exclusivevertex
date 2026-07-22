import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const staticPaths = [
  "/",
  "/projetos",
  "/servicos",
  "/processo",
  "/sobre",
  "/blog",
  "/contato",
  "/orcamento",
];

const dynamicProjects = ["/projetos/serra-seguros"];
const dynamicServices = [
  "sites-institucionais",
  "landing-pages",
  "redesign-de-sites",
  "ui-ux-design",
  "seo",
  "integracao-whatsapp",
  "formularios-inteligentes",
  "consultoria-digital",
  "otimizacao-performance",
].map((s) => `/servicos/${s}`);
const dynamicArticles = [
  "o-site-como-ativo-estrategico",
  "por-que-design-importa-para-vendas",
  "seo-comeca-na-arquitetura",
].map((s) => `/blog/${s}`);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...staticPaths,
          ...dynamicProjects,
          ...dynamicServices,
          ...dynamicArticles,
        ];
        const urls = paths
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
