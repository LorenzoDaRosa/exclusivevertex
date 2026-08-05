import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/sitemap[.]xml')({
  server: {
    handlers: {
      GET: async () => {
        const baseUrl = 'https://exclusivevertex.com.br';
        const pages = ['', '/projetos', '/bio', '/sobre', '/contato', '/servicos', '/processo', '/blog'];
        
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml',
          },
        });
      }
    }
  }
})
