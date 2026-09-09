import Link from 'next/link';
import { CTA } from '../../../components/CTA';
import { SectionHeader } from '../../../components/SectionHeader';
import { ServiceCards } from '../../../components/ServiceCards';
import { engagements } from '../../../data/site';

export const metadata = {
  title: 'Services',
  description: 'Secure Cloud and Cyber Operational Assurance, CRA readiness, Microsoft Cloud remediation, Microsoft 365, Azure, Entra ID, Intune, Security, Automation and AI-enhanced IT Operations consulting services.',
  alternates: { canonical: '/services/', languages: { en: '/services/', fr: '/fr/services/', nl: '/nl/services/', 'x-default': '/services/' } }
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Secure cloud, verified remediation and senior Microsoft delivery.</h1>
          <p>
            Enki Tech helps European organisations and technology partners move from identified Microsoft Cloud and identity risk to implemented remediation, verification, evidence and repeatable operational control.
          </p>
          <div className="heroActions">
            <Link href="/security-assurance/" className="button">Explore Operational Assurance</Link>
            <Link href="/contact/" className="button buttonGhost">Discuss a technical problem</Link>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Flagship commercial path</p>
            <h2>From security finding to verified closure.</h2>
            <p>
              Start with a bounded readiness or risk problem, move into technical remediation, then retain only the recurring assurance that protects the result over time.
            </p>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Operational assurance</p>
            <h2>Detect → Prioritize → Assign → Remediate → Verify → Prove</h2>
            <p>
              This is the operating model behind Enki Tech security and cloud engagements. It is designed to reduce open risk, clarify ownership and leave the client with evidence that the technical change actually worked.
            </p>
            <div className="heroActions">
              <Link href="/secure-cloud-remediation/" className="button">View the remediation sprint</Link>
              <Link href="/security-assurance/" className="button buttonGhost dark">View the assurance model</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceCards headingLevel="h2" />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="Ways to engage"
            title="Choose how the technical work should be structured"
            text="Each engagement has a defined purpose, client result, deliverables and delivery path. Select the closest match or start with the situation."
          />
          <div className="cardsGrid">
            {engagements.map((engagement) => (
              <article className="card serviceCard" key={engagement.id}>
                <p className="tag">{engagement.label}</p>
                <h3>{engagement.title}</h3>
                <p>{engagement.result}</p>
                <Link
                  href={engagement.href}
                  className="textLink serviceCardLink"
                  aria-label={`View engagement: ${engagement.title}`}
                >
                  View engagement details <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Commercial focus</p>
            <h2>Services are designed to become measurable B2B outcomes.</h2>
          </div>
          <div className="listPanel">
            <div className="principle">Secure Cloud and Cyber Operational Assurance</div>
            <div className="principle">CRA Incident Reporting Readiness Sprint</div>
            <div className="principle">Secure Cloud Remediation Sprint</div>
            <div className="principle">Continuous Security Assurance</div>
            <div className="principle">Microsoft Cloud audit and risk review</div>
            <div className="principle">Entra ID and Conditional Access review</div>
            <div className="principle">Microsoft 365, Azure and hybrid remediation</div>
            <div className="principle">Automation and AI-assisted IT operations</div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Time-sensitive EU product-security readiness</p>
            <h2>CRA Incident Reporting Readiness Sprint</h2>
            <p>
              A bounded technical dry run for manufacturers that need to test the operational path from vulnerability or severe-incident awareness to product impact, ownership, 24/72-hour reporting data, remediation and evidence.
            </p>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Measurable outcome</p>
            <h2>Test one real workflow before the first real deadline.</h2>
            <p>
              The sprint exposes slow handoffs, missing evidence, unclear backup ownership and product-mapping gaps without turning the engagement into open-ended legal or compliance consulting.
            </p>
            <div className="heroActions">
              <Link href="/cra-incident-readiness/" className="button">View the CRA readiness sprint</Link>
              <Link href="/resources/cra-incident-dry-run-playbook/" className="button buttonGhost dark">Dry-run checklist</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Start with the problem"
        title="Bring the open risk, backlog or operational gap."
        text="Enki Tech will help determine whether the right next step is assessment, remediation, recurring assurance or specialist Microsoft delivery."
        buttonLabel="Discuss the next step"
      />
    </>
  );
}
