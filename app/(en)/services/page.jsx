import Link from 'next/link';
import { CTA } from '../../../components/CTA';
import { AssuranceOffers } from '../../../components/AssuranceOffers';
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
        <div className="container">
          <SectionHeader
            eyebrow="Assess · Fix · Operate"
            title="Choose the outcome your team needs next."
            text="Start with an assessment or a reporting exercise. Move directly to remediation when the findings are already clear, then agree recurring reviews where they protect the result."
          />
          <AssuranceOffers />
          <p className="serviceContextLink">Working through CRA or NIS2 requirements? <Link href="/security-assurance/#cra-nis2">See how technical delivery supports each.</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Technical capabilities" title="Senior Microsoft delivery behind each engagement." text="Use these service lines to define the technical scope, including standalone project and operational support." />
          <ServiceCards headingLevel="h3" />
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

      <CTA
        eyebrow="Start with the problem"
        title="Bring the open risk, backlog or operational gap."
        text="Enki Tech will help determine whether the right next step is assessment, remediation, recurring assurance or specialist Microsoft delivery."
        buttonLabel="Discuss the next step"
      />
    </>
  );
}
