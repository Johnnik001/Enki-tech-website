import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { SectionHeader } from '../../../components/SectionHeader';
import { experience, services, site } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

function getCaseStudy(slug) {
  return experience.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  const canonical = `/experience/${caseStudy.slug}/`;

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    keywords: caseStudy.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${caseStudy.metaTitle} | ${site.name}`,
      description: caseStudy.metaDescription,
      url: canonical,
      type: 'article'
    }
  };
}

export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const caseUrl = `${site.url}/experience/${caseStudy.slug}/`;
  const relatedServices = services.filter((service) => caseStudy.relatedServices.includes(service.slug));
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${caseUrl}#article`,
        headline: caseStudy.title,
        description: caseStudy.metaDescription,
        url: caseUrl,
        articleSection: 'Case study',
        keywords: caseStudy.keywords,
        author: { '@id': `${site.url}/#organization` },
        publisher: { '@id': `${site.url}/#organization` },
        about: relatedServices.map((service) => ({
          '@type': 'Service',
          '@id': `${site.url}/services/${service.slug}/#service`,
          name: service.title
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${caseUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
          { '@type': 'ListItem', position: 2, name: 'Experience', item: `${site.url}/experience/` },
          { '@type': 'ListItem', position: 3, name: caseStudy.title, item: caseUrl }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Case study · {caseStudy.label}</p>
          <p className="caseProof">{caseStudy.proof}</p>
          <h1>{caseStudy.title}</h1>
          <p>{caseStudy.detail}</p>
          <div className="heroActions">
            <Link href="/contact/" className="button">Discuss a similar challenge</Link>
            <Link href="/experience/" className="button buttonGhost">View all experience</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Project context</p>
            <h2>The environment behind the work</h2>
            <p>{caseStudy.context}</p>
          </div>
          <div className="card">
            <dl className="caseDetails">
              <div><dt>Challenge</dt><dd>{caseStudy.challenge}</dd></div>
              <div><dt>Contribution</dt><dd>{caseStudy.role}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Delivery approach"
            title="How senior technical support contributed"
            text="The case is intentionally described at a practical but sanitized level to demonstrate capability without exposing confidential client information."
          />
          <div className="cardsGrid">
            {caseStudy.approach.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Selected outcomes</p>
            <h2>Operational value supported by the engagement</h2>
            <div className="listPanel wide">
              {caseStudy.impact.map((impact) => (
                <div className="principle" key={impact}>{impact}</div>
              ))}
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Confidentiality by design</p>
            <h2>Evidence without unsupported endorsement</h2>
            <p>This summary focuses on scale, responsibilities and technical contribution. Client names and identifying project details are intentionally omitted.</p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Related services"
            title="Capabilities relevant to this case"
            text="Explore the consulting services that align with the technical and operational work described above."
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

      <CTA />
    </>
  );
}
