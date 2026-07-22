import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { SectionHeader } from '../../../components/SectionHeader';
import { experience, services, site } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const canonical = `/services/${service.slug}/`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${service.metaTitle} | ${site.name}`,
      description: service.metaDescription,
      url: canonical,
      type: 'website'
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${site.url}/services/${service.slug}/`;
  const relatedExperience = experience.filter((item) => item.relatedServices.includes(service.slug));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.metaTitle,
    description: service.metaDescription,
    url: serviceUrl,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: ['Bulgaria', 'Belgium', 'Europe'],
    serviceType: service.title
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Service</p>
          <h1>{service.metaTitle}</h1>
          <p>{service.intro}</p>
          <div className="heroActions">
            <Link href="/contact/" className="button">Discuss this service</Link>
            <Link href="/services/" className="button buttonGhost">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Business outcomes</p>
            <h2>What this engagement is designed to improve</h2>
            <p>{service.summary}</p>
          </div>
          <div className="listPanel">
            {service.outcomes.map((outcome) => (
              <div className="principle" key={outcome}>{outcome}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Capabilities"
            title="Focused support across the service lifecycle"
            text="The scope is adapted to the environment, delivery stage and operational responsibilities of your internal team or technology partner."
          />
          <div className="cardsGrid">
            {service.capabilities.map((capability) => (
              <article className="card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div className="quoteCard">
            <p className="eyebrow">{service.proof.eyebrow}</p>
            <h2>{service.proof.title}</h2>
            <p>{service.proof.text}</p>
          </div>
          <div>
            <p className="eyebrow">When to engage</p>
            <h2>Useful signals that senior support is needed</h2>
            <div className="listPanel wide">
              {service.engagementSignals.map((signal) => (
                <div className="principle" key={signal}>{signal}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Typical deliverables</p>
            <h2>Clear outputs for implementation and handover</h2>
            <p>Deliverables are agreed around the project goals, available technical context and the operating model that will remain after the engagement.</p>
          </div>
          <ul className="listPanel">
            {service.deliverables.map((deliverable) => (
              <li className="principle" key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </section>

      {relatedExperience.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Related experience"
              title="See how this capability has been applied"
              text="Sanitized case studies provide practical evidence while protecting client confidentiality and avoiding unsupported endorsements."
            />
            <div className="cardsGrid">
              {relatedExperience.map((item) => (
                <article className="card serviceCard" key={item.slug}>
                  <p className="tag">{item.label}</p>
                  <p className="caseProof">{item.proof}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <Link
                    href={`/experience/${item.slug}/`}
                    className="textLink serviceCardLink"
                    aria-label={`Read case study: ${item.title}`}
                  >
                    Read case study <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
