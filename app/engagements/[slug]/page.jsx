import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { SectionHeader } from '../../../components/SectionHeader';
import { engagements, services, site } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return engagements.map((engagement) => ({ slug: engagement.slug }));
}

function getEngagement(slug) {
  return engagements.find((engagement) => engagement.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const engagement = getEngagement(slug);

  if (!engagement) {
    return {};
  }

  const canonical = `/engagements/${engagement.slug}/`;

  return {
    title: engagement.metaTitle,
    description: engagement.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${engagement.metaTitle} | ${site.name}`,
      description: engagement.metaDescription,
      url: canonical,
      type: 'website'
    }
  };
}

export default async function EngagementDetailPage({ params }) {
  const { slug } = await params;
  const engagement = getEngagement(slug);

  if (!engagement) {
    notFound();
  }

  const engagementUrl = `${site.url}/engagements/${engagement.slug}/`;
  const relatedServices = services.filter((service) => engagement.relatedServices.includes(service.slug));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${engagementUrl}#service`,
    name: engagement.metaTitle,
    description: engagement.metaDescription,
    url: engagementUrl,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: ['Bulgaria', 'Belgium', 'Europe'],
    serviceType: engagement.format
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">{engagement.label}</p>
          <h1>{engagement.title}</h1>
          <p>{engagement.intro}</p>
          <div className="heroActions">
            <Link href="/contact/" className="button">Discuss this engagement</Link>
            <Link href="/#engagements" className="button buttonGhost">Compare engagements</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Designed for</p>
            <h2>A defined route from the current situation to a useful result</h2>
            <p>{engagement.bestFor}</p>
            <ul className="checkList">
              {engagement.suitableFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <aside className="quoteCard offerResult" aria-label="Engagement result and format">
            <p className="eyebrow">Client result</p>
            <h2>{engagement.result}</h2>
            <p className="engagementFormat"><strong>Engagement format:</strong> {engagement.format}</p>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="What is delivered"
            title="Concrete outputs agreed before delivery starts"
            text="The exact scope is confirmed around the environment, available evidence and the decision or operational result the engagement must support."
          />
          <div className="cardsGrid">
            {engagement.deliverables.map((deliverable, index) => (
              <article className="card offerDeliverable" key={deliverable}>
                <p className="offerNumber">{String(index + 1).padStart(2, '0')}</p>
                <h3>{deliverable}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Delivery path"
            title="How the engagement progresses"
            text="Each stage has a clear purpose so stakeholders understand what is happening, what evidence is needed and what decision comes next."
          />
          <div className="cardsGrid">
            {engagement.process.map((step, index) => (
              <article className="card offerStep" key={step.title}>
                <p className="offerNumber">{String(index + 1).padStart(2, '0')}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">What the client provides</p>
            <h2>The inputs needed for efficient, evidence-based work</h2>
            <p>Access and responsibilities are agreed before delivery. Enki Tech requests only the context and evidence required for the confirmed scope.</p>
          </div>
          <ul className="listPanel">
            {engagement.clientInputs.map((input) => (
              <li className="principle" key={input}>{input}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Relevant technical services"
            title="Apply this engagement to the required Microsoft capability"
            text="The engagement format defines how the work is structured. These service areas define the technical scope."
          />
          <div className="cardsGrid">
            {relatedServices.map((service) => (
              <article className="card serviceCard" key={service.slug}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link
                  href={`/services/${service.slug}/`}
                  className="textLink serviceCardLink"
                  aria-label={`View service: ${service.title}`}
                >
                  View service <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Next step"
        title={`Discuss ${engagement.title.toLowerCase()}`}
        text="Share the current situation, expected result, relevant Microsoft services and timeline. Enki Tech will confirm fit, scope boundaries and the most useful next step."
        buttonLabel="Share your situation"
      />
    </>
  );
}
