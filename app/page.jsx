import Link from 'next/link';
import { CTA } from '../components/CTA';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCards } from '../components/ServiceCards';
import { experience, principles } from '../data/site';

export const metadata = {
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Independent European IT Consulting · Bulgaria · Belgium · Europe</p>
            <h1>Make your Microsoft Cloud operations more secure, reliable and easier to run.</h1>
            <p className="heroText">
              Enki Tech gives European IT teams and delivery partners senior-level support for complex Microsoft 365, Azure, identity, endpoint and collaboration environments — from transformation projects to operational improvement.
            </p>
            <div className="heroActions">
              <Link href="/contact/" className="button">Discuss a project</Link>
              <Link href="/experience/" className="button buttonGhost">View experience</Link>
            </div>
          </div>
          <aside className="heroPanel" aria-label="Enki Tech capability highlights">
            <div className="metric"><strong>15+ years</strong><span>Cloud, workplace and hybrid infrastructure experience</span></div>
            <div className="metric"><strong>12,000+ users</strong><span>Windows 365 Cloud PC migration experience</span></div>
            <div className="metric"><strong>L2/L3 support</strong><span>Collaboration operations, troubleshooting and escalation ownership</span></div>
            <div className="metric"><strong>Microsoft Cloud</strong><span>M365 · Azure · Entra ID · Intune · Teams · Exchange</span></div>
          </aside>
        </div>
      </section>

      <section className="section audienceSection">
        <div className="container">
          <SectionHeader
            eyebrow="Who we help"
            title="The right expertise for a critical delivery gap"
            text="Choose the engagement that best matches your immediate need."
          />
          <div className="audienceGrid">
            <article className="audienceCard">
              <p className="tag">IT leaders</p>
              <h3>Improve a Microsoft environment that has become hard to run.</h3>
              <p>Bring structure to operations, security, documentation and modernization without adding a permanent specialist team.</p>
              <Link href="/services/" className="textLink">Explore operational improvement <span aria-hidden="true">→</span></Link>
            </article>
            <article className="audienceCard">
              <p className="tag">Partners & integrators</p>
              <h3>Add senior Microsoft delivery capacity when a project needs it.</h3>
              <p>Strengthen migrations, transitions and complex workstreams with experienced, dependable technical delivery.</p>
              <Link href="/contact/" className="textLink">Discuss partner delivery <span aria-hidden="true">→</span></Link>
            </article>
            <article className="audienceCard">
              <p className="tag">Transformation teams</p>
              <h3>Reduce delivery and operational risk in a high-change environment.</h3>
              <p>Use practical expertise across Microsoft 365, Azure, identity, endpoint and automation to move change forward safely.</p>
              <Link href="/experience/" className="textLink">View relevant experience <span aria-hidden="true">→</span></Link>
            </article>
          </div>
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
                <p className="caseProof">{item.proof}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p className="caseRole"><strong>Enki Tech contribution:</strong> {item.role}</p>
                <ul>
                  {item.impact.map((impact) => <li key={impact}>{impact}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="sectionAction">
            <Link href="/experience/" className="button buttonGhost dark">See selected experience</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
