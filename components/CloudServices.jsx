import Link from 'next/link';
import { primaryServiceCatalog, cloudCopy } from '../data/cloud-services';
export function CloudServices({ locale = 'en' }) {
  const copy = cloudCopy[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return <div className="cloudServiceGrid">{primaryServiceCatalog[locale].map((service, index) => <article className={`cloudServiceCard ${index === 0 ? 'cloudServiceFeatured' : ''}`} key={service.id}>
    <span className="cloudServiceNumber">{String(index + 1).padStart(2, '0')}</span><div><h3>{service.title}</h3><p>{service.summary}</p><p className="cloudServiceOutput"><strong>{copy.output}</strong> {service.outcome}</p><Link className="textLink" href={`${prefix}/services/${service.slug}/`}>{copy.serviceView}</Link></div>
  </article>)}</div>;
}
