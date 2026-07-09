import { site } from '@/data/site';

const routes = ['', '/services', '/experience', '/about', '/insights', '/contact', '/legal/privacy'];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
