import { site } from '../../../data/site';

export const metadata = {
  title: 'Privacy',
  description: 'Privacy information for Enki Tech website visitors.',
  alternates: { canonical: '/legal/privacy/' }
};

export default function PrivacyPage() {
  return (
    <section className="pageHero legalPage">
      <div className="container narrow">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy notice</h1>
        <p>
          This website is operated by {site.legalName}. This notice explains how information is handled when you visit the website or contact Enki Tech about a business inquiry.
        </p>
        <p>Last updated: 21 July 2026.</p>
        <h2>Business inquiries</h2>
        <p>
          If you contact Enki Tech through the website form, by email or through LinkedIn, the information you provide is used to respond to your inquiry and manage the business relationship. This may include your name, company, country, email address, project context, expected timeline and communication history.
        </p>
        <p>
          Website form submissions are processed by FormSubmit solely to forward the inquiry to Enki Tech by email. FormSubmit states that submissions may be retained for up to 30 days. See the <a href="https://formsubmit.co/privacy">FormSubmit privacy information</a> for details.
        </p>
        <h2>Website analytics</h2>
        <p>
          This website uses Vercel Web Analytics to understand aggregate traffic and improve its content and usability. Analytics data may include the page URL, visit time, referrer, approximate geographic region, device type, operating system and browser information.
        </p>
        <p>
          According to Vercel, Web Analytics does not use third-party cookies and does not collect personal identifiers for tracking people across websites. Vercel processes the analytics data as the service provider. You can read more in the <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel Web Analytics privacy documentation</a>.
        </p>
        <h2>Data sharing and retention</h2>
        <p>
          Information is shared only with service providers needed to operate the website, deliver form submissions and support business communications, or where disclosure is required by law. Inquiry information is retained by Enki Tech only for as long as reasonably necessary to respond, maintain the business relationship and meet applicable legal obligations.
        </p>
        <h2>Your choices</h2>
        <p>
          You may ask for access to, correction of or deletion of information you have provided, subject to applicable legal requirements. You can also use your browser privacy controls to limit website data processing.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy-related questions can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
