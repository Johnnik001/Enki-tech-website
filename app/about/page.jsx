import { CTA } from '@/components/CTA';
import { principles, site } from '@/data/site';

export const metadata = {
  title: 'About',
  description: 'About Enki Tech EOOD, an independent European IT consulting company based in Bulgaria and operating across Belgium and Europe.'
};

export default function AboutPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">About Enki Tech</p>
          <h1>Independent European IT consulting with senior Microsoft Cloud expertise.</h1>
          <p>
            {site.legalName} is an independent IT consulting company based in Bulgaria and operating across Belgium and Europe. The company focuses on Microsoft Cloud, Digital Collaboration, secure operations and automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Founder-led delivery</p>
            <h2>Led by {site.founder}, Senior Infrastructure Engineer.</h2>
            <p>
              Enki Tech is built on more than a decade of hands-on experience in workplace services, hybrid infrastructure, Microsoft 365, Azure, identity, endpoint management, service improvement and enterprise support.
            </p>
            <p>
              The company is designed as a long-term consulting asset: reliable delivery, clear documentation, client trust and repeatable processes rather than one-off contracting only.
            </p>
          </div>
          <div className="quoteCard">
            <p>
              “Our role is to make complex Microsoft environments more reliable, secure and manageable — with clear communication, practical engineering and automation where it creates real value.”
            </p>
            <span>Enki Tech operating principle</span>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <p className="eyebrow">Principles</p>
          <h2>How Enki Tech works</h2>
          <div className="listPanel wide">
            {principles.map((principle) => <div className="principle" key={principle}>{principle}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">European positioning</p>
            <h2>Structured for B2B work across Europe.</h2>
          </div>
          <div>
            <p>
              Enki Tech is suitable for direct client projects, subcontracting, partner delivery and short-term senior consulting engagements. The company is especially relevant for organizations working with Microsoft 365, Azure, collaboration platforms and secure operational environments.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
