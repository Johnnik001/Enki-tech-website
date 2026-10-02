import { ProjectBriefForm } from '../../../components/ProjectBriefForm';
import { site } from '../../../data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Enki Tech for cloud architecture audits, Microsoft 365 and Azure support, Zero Trust, Terraform automation and cloud migration projects.',
  alternates: { canonical: '/contact/', languages: { en: '/contact/', fr: '/fr/contact/', nl: '/nl/contact/', 'x-default': '/contact/' } }
};

export default function ContactPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Discuss your Microsoft Cloud project or support needs.</h1>
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
            <p className="contactDetail">Direct project inquiries</p>
          </div>
          <div className="contactCard">
            <h2>Service sheet</h2>
            <p>Download a one-page overview of our five Microsoft Cloud services and selected professional experience.</p>
            <a
              className="button buttonGhost dark"
              href="/downloads/enki-tech-capability-statement.pdf"
              download
            >
              Download PDF
            </a>
            <p className="contactDetail">PDF · 1 page · English</p>
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
            <div className="principle">Your company, country and relevant business or technical owner</div>
            <div className="principle">Your architecture, support, Zero Trust, automation or migration need</div>
            <div className="principle">Expected timeline, required outcome and any fixed deadline</div>
            <div className="principle">Whether this is a direct client, partner, MSP/integrator or subcontracting opportunity</div>
          </div>
        </div>
      </section>
    </>
  );
}
