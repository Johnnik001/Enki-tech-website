import { ProjectBriefForm } from '../../components/ProjectBriefForm';
import { site } from '../../data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Enki Tech for Microsoft Cloud, Digital Collaboration, Automation and European IT consulting engagements.',
  alternates: { canonical: '/contact/' }
};

export default function ContactPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation about a project, partnership or subcontracting opportunity.</h1>
          <p>
            Share a few practical details and receive a considered response on fit, possible engagement model and next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container briefLayout">
          <div>
            <p className="eyebrow">Project brief</p>
            <h2>Share the context needed for a useful first response.</h2>
            <p>Complete the short brief and send it directly from this page. No configured desktop mail app is required.</p>
            <p className="directEmail">Direct email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <ProjectBriefForm />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container contactGrid">
          <div className="contactCard">
            <h2>Email</h2>
            <p>Use your preferred email service for project inquiries and partner introductions.</p>
            <a className="textLink" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">→</span></a>
            <p className="contactDetail">Domain-based business contact</p>
          </div>
          <div className="contactCard">
            <h2>Capability statement</h2>
            <p>Download a concise two-page overview of Enki Tech capabilities, delivery models and selected experience.</p>
            <a
              className="button buttonGhost dark"
              href="/downloads/enki-tech-capability-statement.pdf"
              download
            >
              Download PDF
            </a>
            <p className="contactDetail">PDF · 2 pages · English</p>
          </div>
          <div className="contactCard">
            <h2>LinkedIn</h2>
            <p>Best for introductions, partner conversations and professional background review.</p>
            <a className="button buttonGhost dark" href={site.linkedin}>Open LinkedIn</a>
            <p className="contactDetail">{site.founder}</p>
          </div>
          <div className="contactCard">
            <h2>Operating area</h2>
            <p>Independent European IT consulting company.</p>
            <p className="contactDetail">{site.location}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Useful context</p>
            <h2>For faster qualification, include these details.</h2>
          </div>
          <div className="listPanel">
            <div className="principle">Your company and country</div>
            <div className="principle">Service area: audit, M365, Azure, Intune, Exchange, Teams, automation or AI operations</div>
            <div className="principle">Expected timeline and engagement model</div>
            <div className="principle">Whether this is a direct client, partner or subcontracting opportunity</div>
          </div>
        </div>
      </section>
    </>
  );
}
