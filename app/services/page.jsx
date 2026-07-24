import Link from 'next/link';
import { CTA } from '../../components/CTA';
import { SectionHeader } from '../../components/SectionHeader';
import { ServiceCards } from '../../components/ServiceCards';
import { engagements } from '../../data/site';

export const metadata = {
  title: 'Services',
  description: 'Microsoft Cloud audits, Microsoft 365, Azure, Digital Collaboration, Entra ID, Intune, Security, Automation and AI-enhanced IT Operations consulting services.',
  alternates: { canonical: '/services/' }
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Focused Microsoft Cloud and IT operations consulting services.</h1>
          <p>
            Enki Tech supports European organizations and technology partners across Microsoft 365, Azure, identity, endpoint, collaboration, security and automation workstreams.
          </p>
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
            <h2>Services are designed to be packaged into clear B2B offers.</h2>
          </div>
          <div className="listPanel">
            <div className="principle">Microsoft Cloud audit and risk review</div>
            <div className="principle">Microsoft 365 operational assessment</div>
            <div className="principle">Teams and Exchange service improvement</div>
            <div className="principle">Entra ID and Conditional Access review</div>
            <div className="principle">Intune and endpoint management improvement</div>
            <div className="principle">Automation discovery workshop</div>
            <div className="principle">AI-assisted documentation workflow setup</div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
