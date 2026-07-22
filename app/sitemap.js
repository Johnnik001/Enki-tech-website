import { experience, services, site } from '../data/site';

export const dynamic = 'force-static';

const routes = [
  '',
  '/services',
  ...services.map((service) => `/services/${service.slug}`),
  '/experience',
  ...experience.map((item) => `/experience/${item.slug}`),
  '/about',
  '/contact',
  '/legal/privacy'
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/experience/') ? 0.8 : 0.7
  }));
}
