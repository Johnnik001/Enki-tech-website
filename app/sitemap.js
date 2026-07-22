import { services, site } from '../data/site';

export const dynamic = 'force-static';

const routes = [
  '',
  '/services',
  ...services.map((service) => `/services/${service.slug}`),
  '/experience',
  '/about',
  '/contact',
  '/legal/privacy'
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.7
  }));
}
