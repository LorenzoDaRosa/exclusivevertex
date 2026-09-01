import { createFileRoute } from '@tanstack/react-router'
import { articles, services, projects } from '@/lib/site-data'

const BASE_URL = 'https://exclusivevertex.com.br'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const entries: { path: string; priority: string; changefreq: string }[] = [
          { path: '/', priority: '1.0', changefreq: 'weekly' },
          { path: '/servicos', priority: '0.9', changefreq: 'monthly' },
          { path: '/projetos', priority: '0.9', changefreq: 'monthly' },
          { path: '/processo', priority: '0.7', changefreq: 'yearly' },
          { path: '/sobre', priority: '0.7', changefreq: 'yearly' },
          { path: '/blog', priority: '0.8', changefreq: 'weekly' },
          { path: '/contato', priority: '0.8', changefreq: 'yearly' },
          { path: '/orcamento', priority: '0.8', changefreq: 'yearly' },
          ...services.map((s) => ({
            path: `/servicos/${s.slug}`,
            priority: '0.7',
            changefreq: 'monthly',
          })),
          ...projects.map((p) => ({
            path: `/projetos/${p.slug}`,
            priority: '0.7',
            changefreq: 'monthly',
          })),
          ...articles.map((a) => ({
            path: `/blog/${a.slug}`,
            priority: '0.6',
            changefreq: 'monthly',
          })),
        ]

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...entries.map((e) =>
            [
              '  <url>',
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              '  </url>',
            ].join('\n'),
          ),
          '</urlset>',
        ].join('\n')

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
