import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCards } from '@/components/ServiceCards';
import { experience, principles } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Independent European IT Consulting · Bulgaria · Belgium · Europe</p>
            <h1>Secure Microsoft Cloud, Digital Collaboration and automation-driven IT operations.</h1>
            <p className="heroText">
              Enki Tech helps European organizations design, modernize and operate Microsoft 365, Azure, identity, endpoint and collaboration environments with senior-level expertise, clear documentation and a security-first mindset.
            </p>
            <div className="heroActions">
              <Link href="/contact/" className="button">Discuss a project</Link>
              <Link href="/experience/" className="button buttonGhost">View experience</Link>
            </div>
          </div>
          <aside className="heroPanel" aria-label="Enki Tech capability highlights">
            <div className="metric"><strong>14+ years</strong><span>Cloud, workplace and hybrid infrastructure experience</span></div>
            <div className="metric"><strong>12,000+ users</strong><span>Windows 365 Cloud PC migration experience</span></div>
            <div className="metric"><strong>L2/L3</strong><span>Collaboration service support and secure operations</span></div>
            <div className="metric"><strong>Microsoft Cloud</strong><span>M365 · Azure · Entra ID · Intune · Teams · Exchange</span></div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Senior consulting for complex Microsoft environments"
            text="Enki Tech focuses on practical delivery areas where reliability, security, documentation and automation directly improve IT operations."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Positioning</p>
            <h2>Built for enterprise teams, partners and subcontracting engagements.</h2>
            <p>
              The company is positioned for organizations that need senior Microsoft Cloud and collaboration expertise without building a large permanent team. Enki Tech can support delivery, operations, transformation and service improvement initiatives.
            </p>
          </div>
          <div className="listPanel">
            {principles.map((principle) => (
              <div className="principle" key={principle}>{principle}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Experience"
            title="Credibility based on enterprise infrastructure delivery"
            text="Selected experience themes are presented in sanitized form to protect client confidentiality while showing relevant delivery capability."
          />
          <div className="experienceGrid">
            {experience.map((item) => (
              <article className="experienceCard" key={item.title}>
                <p className="tag">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <ul>
                  {item.impact.map((impact) => <li key={impact}>{impact}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
