import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../../components/CTA';
import { SectionHeader } from '../../../../components/SectionHeader';
import { getLocaleContent, getLocalizedService, getServiceAlternates } from '../../../../data/localized';
import { site } from '../../../../data/site';

export const dynamicParams = false;

export function generateStaticParams({ params }) {
  return getLocaleContent(params.locale)?.services.map((service) => ({ slug: service.slug })) || [];
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const service = getLocalizedService(locale, slug);
  if (!service) return {};
  const canonical = `/${locale}/services/${service.slug}/`;
  return { title: service.metaTitle, description: service.description, alternates: { canonical, languages: getServiceAlternates(service.id) }, openGraph: { title: service.metaTitle, description: service.description, url: canonical, type: 'website' } };
}

export default async function LocalizedServicePage({ params }) {
  const { locale, slug } = await params;
  const content = getLocaleContent(locale);
  const service = getLocalizedService(locale, slug);
  if (!content || !service) notFound();
  const labels = content.serviceLabels;
  const contactHref = `/${locale}/contact/?area=${encodeURIComponent(service.sourceTitle)}&engagement=${encodeURIComponent(service.id === 'continuous-secure-cloud-governance' ? 'Ongoing advisory support' : 'Assessment or audit')}`;
  const serviceUrl = `${site.url}/${locale}/services/${service.slug}/`;
  const structuredData = { '@context': 'https://schema.org', '@type': 'Service', '@id': `${serviceUrl}#service`, name: service.metaTitle, description: service.description, url: serviceUrl, provider: { '@id': `${site.url}/#organization` }, areaServed: ['Belgium', 'Europe'], availableLanguage: content.languageName, serviceType: service.title };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{labels.service}</p><h1>{service.metaTitle}</h1><p>{service.intro}</p><div className="heroActions"><Link href={contactHref} className="button">{labels.discuss}</Link><Link href={`/${locale}/services/`} className="button buttonGhost">{labels.all}</Link></div></div></section>
      <section className="section"><div className="container splitGrid"><div><p className="eyebrow">{labels.outcomes}</p><h2>{labels.outcomesTitle}</h2><p>{service.summary}</p></div><div className="listPanel">{service.outcomes.map((item) => <div className="principle" key={item}>{item}</div>)}</div></div></section>
      <section className="section sectionAlt"><div className="container"><SectionHeader eyebrow={labels.capabilities} title={labels.capabilitiesTitle} /><div className="cardsGrid">{service.capabilities.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section"><div className="container splitGrid"><div><p className="eyebrow">{labels.deliverables}</p><h2>{labels.deliverablesTitle}</h2></div><ul className="listPanel">{service.deliverables.map((item) => <li className="principle" key={item}>{item}</li>)}</ul></div></section>
      <CTA eyebrow={labels.next} title={labels.cta} text={labels.ctaText} buttonLabel={labels.ctaButton} buttonHref={contactHref} />
    </>
  );
}
