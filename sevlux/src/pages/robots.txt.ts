import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

const sitemapUrl = `${SITE.url}/sitemap-index.xml`;
const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
