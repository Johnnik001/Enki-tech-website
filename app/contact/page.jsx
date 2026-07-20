import { site } from '../../data/site';

export const metadata = {
  title: 'Contact',
  description: 'Contact Enki Tech for Microsoft Cloud, Digital Collaboration, Automation and European IT consulting engagements.'
};

const mailSubject = encodeURIComponent('Project inquiry for Enki Tech');
const mailBody = encodeURIComponent('Hello Enki Tech,\n\nI would like to discuss a potential project or partnership.\n\nCompany:\nArea of interest:\nMessage:\n');

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
        <div className="container contactGrid">
          <div className="contactCard">
            <h2>Send a project brief</h2>
            <p>Use the prepared email template for project inquiries, partner introductions and capability statement requests.</p>
            <a className="button" href={`mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`}>Email Enki Tech</a>
            <p className="contactDetail">Typical details: company, service area, timeline and the delivery challenge.</p>
          </div>
          <div className="contactCard">
            <h2>LinkedIn</h2>
            <p>Best for introductions, partner conversations and professional background review.</p>
            <a className="button buttonGhost dark" href={site.linkedin}>Open LinkedIn</a>
            <p className="contactDetail">{site.founder}</p>
          </div>
          <div className="contactCard">
            <h2>Operating area</h2>
            <p>Independent European IT consulting company based in Bulgaria and operating across Belgium and Europe.</p>
            <p className="contactDetail">{site.location}</p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Useful context</p>
            <h2>For faster qualification, include these details.</h2>
          </div>
          <div className="listPanel">
            <div className="principle">Your company and country</div>
            <div className="principle">Service area: M365, Azure, Intune, Exchange, Teams, automation or AI operations</div>
            <div className="principle">Expected timeline and engagement model</div>
            <div className="principle">Whether this is a direct client, partner or subcontracting opportunity</div>
          </div>
        </div>
      </section>
    </>
  );
}
