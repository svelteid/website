import fs from 'fs';
import config from '../site.config.yml';

const { siteUrl } = config;

const renderUrl = (priority, slug) => `
  <url>
    <loc>${siteUrl}/${slug}</loc>
    <priority>${priority}</priority>
  </url>
`;

const renderSitemap = pages => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => renderUrl(0.85, page ? `${page}/` : '')).join('\n')}
</urlset>
`;

const getAllPages = () => {
  const pages = [''];

  fs.readdirSync('./src/routes').forEach(file => {
    file = file.split('.')[0];
    if (file.charAt(0) !== '_' && file !== 'sitemap' && file !== 'index' && file !== 'feed') {
      pages.push(file);
    }
  });

  return pages;
};

export function get(_, res) {
  res.writeHead(200, {
    'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
    'Content-Type': 'application/xml'
  });

  const sitemap = renderSitemap(getAllPages());
  res.end(sitemap);
}
