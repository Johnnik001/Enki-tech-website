import { CTA } from '../../components/CTA';
import { SectionHeader } from '../../components/SectionHeader';
import { ServiceCards } from '../../components/ServiceCards';

export const metadata = {
  title: 'Services',
  description: 'Microsoft 365, Azure, Digital Collaboration, Entra ID, Intune, Security, Automation and AI-enhanced IT Operations consulting services.',
  alternates: { canonical: '/services/' }
};

const engagementModels = [
  {
    title: 'Project delivery support',
    text: 'Senior technical capacity for migrations, transitions, integration builds, documentation and implementation workstreams.'
  },
  {
    title: 'Operational improvement',
    text: 'Assessment and improvement of Microsoft Cloud operations, support procedures, automation opportunities and service reliability.'
  },
  {
    title: 'Subcontracting and partner delivery',
    text: 'Flexible B2B collaboration with integrators, vendors and consulting firms that need experienced Microsoft infrastructure capability.'
  }
];

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
            eyebrow="Engagement models"
            title="Flexible cooperation for direct clients and partners"
            text="The commercial model can be shaped around project milestones, senior consulting days, subcontracting capacity or ongoing advisory support."
          />
          <div className="cardsGrid three">
            {engagementModels.map((model) => (
              <article className="card" key={model.title}>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
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
