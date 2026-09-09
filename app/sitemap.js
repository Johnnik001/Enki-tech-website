import { engagements, experience, insights, services, site } from '../data/site';

export const dynamic = 'force-static';

const routes = [
  '',
  '/security-assurance',
  '/secure-cloud-remediation',
  '/privileged-identity-assurance',
  '/cra-incident-readiness',
  '/services',
  ...services.map((service) => `/services/${service.slug}`),
  '/engagements',
  ...engagements.map((engagement) => `/engagements/${engagement.slug}`),
  '/experience',
  ...experience.map((item) => `/experience/${item.slug}`),
  '/insights',
  ...insights.map((insight) => `/insights/${insight.slug}`),
  '/insights/cra-reporting-11-september-2026',
  '/insights/standing-privileged-access-microsoft-entra-id',
  '/insights/ncia-simplified-procurement-specialist-capabilities',
  '/resources/secure-cloud-control-matrix',
  '/resources/high-assurance-cloud-access-architecture',
  '/resources/privileged-identity-assurance-acceptance-specification',
  '/resources/procurement-capability-sheet',
  '/resources/cra-incident-dry-run-playbook',
  '/resources/secure-cloud-remediation-checklist',
  '/partners',
  '/about',
  '/contact',
  '/legal/privacy'
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/security-assurance' || route === '/secure-cloud-remediation' || route === '/insights/cra-reporting-11-september-2026' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/security-assurance' || route === '/secure-cloud-remediation' || route === '/privileged-identity-assurance' || route === '/cra-incident-readiness' || route === '/insights/cra-reporting-11-september-2026' || route.startsWith('/services') || route.startsWith('/experience/') || route.startsWith('/resources/') || route === '/partners' ? 0.8 : 0.7
  }));
}
