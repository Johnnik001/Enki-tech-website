import { site } from '../../../data/site';

export const metadata = {
  title: 'Privacy',
  description: 'Privacy information for Enki Tech website visitors.'
};

export default function PrivacyPage() {
  return (
    <section className="pageHero legalPage">
      <div className="container narrow">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p>
          This website is operated by {site.legalName}. This page is a starter privacy notice and should be reviewed before production launch, especially if analytics, cookies, CRM integrations or contact forms are added.
        </p>
        <h2>Contact data</h2>
        <p>
          If you contact Enki Tech by email or LinkedIn, the information you provide will be used to respond to your inquiry and manage the business relationship.
        </p>
        <h2>Analytics and cookies</h2>
        <p>
          The starter website does not include tracking scripts by default. If analytics or marketing tools are added later, this notice and cookie configuration should be updated accordingly.
        </p>
        <h2>Business inquiries</h2>
        <p>
          Business inquiry information may include name, company, email address, project context and communication history.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy-related questions can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
