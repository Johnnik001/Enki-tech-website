import Link from 'next/link';
import { CTA } from './CTA';
import { cloudCopy } from '../data/cloud-services';
import { site } from '../data/site';
export function CloudServiceDetail({ service, locale = 'en' }) {
  const copy = cloudCopy[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const contactHref = `${prefix}/contact/?area=${encodeURIComponent(service.sourceTitle)}&engagement=${encodeURIComponent(service.contactEngagement)}`;
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, url: `${site.url}${prefix}/services/${service.slug}/`, provider: { '@id': `${site.url}/#organization` }, areaServed: ['Bulgaria', 'Belgium', 'Europe'] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <section className="pageHero"><div className="container narrow"><p className="eyebrow">{copy.servicesEyebrow}</p><h1>{service.title}</h1><p>{service.summary}</p><div className="heroActions"><Link className="button" href={contactHref}>{copy.primary}</Link><Link className="button buttonGhost" href={`${prefix}/services/`}>{copy.allServices}</Link></div></div></section>
    <section className="section"><div className="container cloudDetailGrid"><div><p className="eyebrow">{copy.when}</p><h2>{service.outcome}</h2><p>{service.useWhen}</p><p><strong>{copy.format}</strong><br />{service.format}</p></div><div><h2>{copy.deliverables}</h2><ul className="listPanel">{service.deliverables.map(item => <li className="principle" key={item}>{item}</li>)}</ul></div></div></section>
    <section className="section sectionAlt"><div className="container narrow cloudScope"><h2>{copy.scope}</h2><p>{service.scope}</p></div></section>
    <CTA title={copy.ctaTitle} text={copy.ctaText} buttonLabel={copy.primary} buttonHref={contactHref} />
  </>;
}
