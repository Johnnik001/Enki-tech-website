import { engagements, experience, insights, services, site } from '../data/site';

export const dynamic = 'force-static';

const routes = [
  '',
  '/services',
  ...services.map((service) => `/services/${service.slug}`),
  '/engagements',
  ...engagements.map((engagement) => `/engagements/${engagement.slug}`),
  '/experience',
  ...experience.map((item) => `/experience/${item.slug}`),
  '/insights',
  ...insights.map((insight) => `/insights/${insight.slug}`),
  '/resources/secure-cloud-control-matrix',
  '/resources/high-assurance-cloud-access-architecture',
  '/partners',
  '/about',
  '/contact',
  '/legal/privacy'
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/experience/') || route.startsWith('/resources/') || route === '/partners' ? 0.8 : 0.7
  }));
}
