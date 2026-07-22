import Link from 'next/link';
import { CTA } from '../../components/CTA';
import { SectionHeader } from '../../components/SectionHeader';
import { experience, services, site } from '../../data/site';

export const metadata = {
  title: 'Microsoft Cloud Partner Delivery & Subcontracting',
  description:
    'Senior Microsoft 365, Azure, identity, endpoint and automation delivery capacity for European IT consultancies, integrators and technology partners.',
  alternates: { canonical: '/partners/' },
  openGraph: {
    title: 'Microsoft Cloud Partner Delivery & Subcontracting | Enki Tech',
    description:
      'Flexible senior Microsoft Cloud delivery capacity for European IT consultancies, integrators and technology partners.',
    url: '/partners/',
    type: 'website'
  }
};

const partnerNeeds = [
  {
    title: 'A specialist delivery gap',
    text: 'Add senior Microsoft 365, Azure, identity, endpoint or automation capability when the required expertise is not available internally.'
  },
  {
    title: 'Peak project capacity',
    text: 'Strengthen a migration, transition or improvement workstream without committing to a permanent expansion of the delivery team.'
  },
  {
    title: 'Complex technical escalation',
    text: 'Bring focused L2/L3 troubleshooting and operational experience into incidents or service issues that need deeper ownership.'
  },
  {
    title: 'Handover and stabilization',
    text: 'Support documentation, operational readiness, knowledge transfer and post-transition improvement before a service moves into steady state.'
  }
];

const engagementModels = [
  'Defined project or technical workstream',
  'Flexible senior consulting capacity',
  'L2/L3 operational and escalation support',
  'Partner-led subcontracting engagement'
];

const deliveryPrinciples = [
  'Clear scope, ownership and escalation paths',
  'Direct communication with delivery stakeholders',
  'Confidentiality and NDA alignment where required',
  'Documentation and practical handover by default',
  'European B2B cooperation with flexible engagement models'
];

const partnerServiceSlugs = [
  'microsoft-365-digital-collaboration',
  'azure-hybrid-infrastructure',
  'identity-endpoint-security',
  'automation-it-operations'
];

const partnerServices = services.filter((service) => partnerServiceSlugs.includes(service.slug));

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${site.url}/partners/#service`,
      name: 'Microsoft Cloud Partner Delivery and Subcontracting',
      description: metadata.description,
      url: `${site.url}/partners/`,
      provider: { '@id': `${site.url}/#organization` },
      areaServed: ['Bulgaria', 'Belgium', 'Europe'],
      serviceType: [
        'Microsoft Cloud subcontracting',
        'Microsoft 365 partner delivery',
        'Azure delivery support',
        'L2/L3 operational support'
      ],
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'IT consultancies, systems integrators and technology partners'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${site.url}/partners/#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Partners', item: `${site.url}/partners/` }
      ]
    }
  ]
};

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Partner delivery · Europe</p>
          <h1>Senior Microsoft Cloud delivery capacity for partners and integrators.</h1>
          <p>
            Enki Tech works with consultancies, integrators and technology partners that need dependable senior capacity across Microsoft 365, Azure, identity, endpoint, collaboration and automation workstreams.
          </p>
          <div className="heroActions">
            <Link href="/contact/" className="button">Discuss partner delivery</Link>
            <Link href="/experience/" className="button buttonGhost">Review experience</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="When to engage"
            title="Add experienced capacity where delivery risk is highest"
            text="Partner support is shaped around a concrete technical gap, delivery milestone or operational responsibility rather than a generic resource request."
          />
          <div className="cardsGrid">
            {partnerNeeds.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Engagement model</p>
            <h2>Flexible B2B support under the partner&apos;s delivery structure</h2>
            <p>
              Cooperation can be organized around a defined project, senior consulting days, escalation ownership or recurring delivery capacity. Scope and interfaces are agreed before work begins.
            </p>
            <div className="listPanel wide">
              {engagementModels.map((model) => <div className="principle" key={model}>{model}</div>)}
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Delivery principles</p>
            <h2>Dependable contribution without unnecessary complexity</h2>
            <div className="listPanel">
              {deliveryPrinciples.map((principle) => <div className="principle" key={principle}>{principle}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Capability areas"
            title="Microsoft expertise that can plug into a wider delivery team"
            text="Each capability can support discovery, implementation, troubleshooting, operational improvement, documentation and handover."
          />
          <div className="cardsGrid">
            {partnerServices.map((service) => (
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

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Relevant experience"
            title="Enterprise delivery themes relevant to partner work"
            text="Sanitized examples show scale, technical responsibility and operational focus without exposing confidential client information."
          />
          <div className="cardsGrid three">
            {experience.map((item) => (
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

      <CTA
        eyebrow="Partner conversation"
        title="Need senior Microsoft delivery capacity for an active opportunity?"
        text="Share the technical scope, expected timeline, engagement model and delivery challenge. Enki Tech will respond with the most relevant capability and next step."
        buttonLabel="Discuss partner delivery"
      />
    </>
  );
}
