import Link from 'next/link';
import { CTA } from '../../components/CTA';
import { SectionHeader } from '../../components/SectionHeader';
import { engagements, services, site } from '../../data/site';

export const metadata = {
  title: 'Microsoft Cloud Engagement Models',
  description:
    'Compare Microsoft Cloud assessments, project delivery, L2/L3 operational support and partner subcontracting engagements from Enki Tech.',
  alternates: { canonical: '/engagements/' },
  openGraph: {
    title: `Microsoft Cloud Engagement Models | ${site.name}`,
    description:
      'Compare defined Microsoft Cloud engagement formats by client situation, expected result, deliverables and delivery model.',
    url: '/engagements/',
    type: 'website'
  }
};

const decisionCues = [
  {
    title: 'Need an independent baseline?',
    text: 'Start with an assessment or audit when the main priority is understanding risk, ownership and what to address first.'
  },
  {
    title: 'Have a defined change to deliver?',
    text: 'Use project delivery for a migration, remediation or technical workstream with an agreed target result.'
  },
  {
    title: 'Need help running the service?',
    text: 'Use L2/L3 operational support for complex incidents, backlog, planned change and continuous service improvement.'
  },
  {
    title: 'Need specialist partner capacity?',
    text: 'Use partner delivery when Enki Tech should contribute inside another consultancy or integrator’s delivery model.'
  }
];

export default function EngagementsPage() {
  const auditService = services.find((service) => service.slug === 'microsoft-cloud-audit');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${site.url}/engagements/#page`,
    name: 'Microsoft Cloud engagement models',
    description: metadata.description,
    url: `${site.url}/engagements/`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: engagements.map((engagement, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: engagement.title,
        url: `${site.url}${engagement.href}`
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Engagement models</p>
          <h1>Choose the right way to engage Enki Tech.</h1>
          <p>
            Start from the decision, delivery result or operational problem—not from a list of technologies. Each format defines what the client receives, how work progresses and what responsibilities are required.
          </p>
          <div className="heroActions">
            <Link href="#compare-engagements" className="button">Compare engagements</Link>
            <Link href="/contact/" className="button buttonGhost">Describe your situation</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Start with the situation"
            title="Which statement is closest to your current need?"
            text="You do not need to diagnose the exact Microsoft service before making contact. Choose the closest business situation and refine the technical scope during qualification."
          />
          <div className="cardsGrid">
            {decisionCues.map((cue) => (
              <article className="card" key={cue.title}>
                <h3>{cue.title}</h3>
                <p>{cue.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="compare-engagements">
        <div className="container">
          <SectionHeader
            eyebrow="Compare engagements"
            title="Four clear routes from need to delivery"
            text="The formats can be applied across Microsoft 365, Azure, identity, endpoint, collaboration, automation and AI-enhanced IT operations."
          />
          <div className="engagementGrid">
            {engagements.map((engagement) => (
              <article className="engagementCard" key={engagement.id}>
                <p className="tag">{engagement.label}</p>
                <h3>{engagement.title}</h3>
                <div className="engagementSituation">
                  <strong>Best when</strong>
                  <p>{engagement.bestFor}</p>
                </div>
                <div className="engagementResult">
                  <strong>Client result</strong>
                  <p>{engagement.result}</p>
                </div>
                <p className="engagementSubheading">Core outputs</p>
                <ul className="checkList engagementDeliverables">
                  {engagement.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
                <p className="engagementFormat"><strong>Format:</strong> {engagement.format}</p>
                <Link
                  href={engagement.href}
                  className="textLink engagementCardLink"
                  aria-label={`View engagement: ${engagement.title}`}
                >
                  View full engagement <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {auditService && (
        <section className="section">
          <div className="container splitGrid">
            <div>
              <p className="eyebrow">Audit service</p>
              <h2>Need evidence before choosing a remediation project?</h2>
              <p>{auditService.summary}</p>
              <Link href="/services/microsoft-cloud-audit/" className="button">Explore the audit service</Link>
            </div>
            <div className="quoteCard offerResult">
              <p className="eyebrow">Audit outputs</p>
              <ul className="checkList">
                {auditService.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CTA
        eyebrow="Need help choosing?"
        title="Start with the situation, not the service name"
        text="Describe what is changing, what is not working, the expected result and the timeline. Enki Tech will identify the most useful engagement route."
        buttonLabel="Describe your situation"
      />
    </>
  );
}
