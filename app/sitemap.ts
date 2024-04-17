import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    '',
    'politica-de-privacidade',
    'termos-e-condicoes',
  ].map((route) => ({
    url: `https://www.atelierdarelacao.pt/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
  }));
  return [...routes];
}
