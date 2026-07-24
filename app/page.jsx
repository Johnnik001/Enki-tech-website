import Link from 'next/link';
import { CTA } from '../components/CTA';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCards } from '../components/ServiceCards';
import { engagements, experience } from '../data/site';

export const metadata = {
  title: 'Microsoft Cloud Consulting for Projects, Operations & Partners',
  description:
    'Senior Microsoft Cloud consulting for assessments, project delivery, L2/L3 support, automation and partner engagements across Europe.',
  alternates: { canonical: '/' }
};

const clientOutcomes = [
  {
    title: 'Understand what to fix',
    text: 'Turn recurring problems, technical risk and unclear ownership into a prioritized action plan.'
  },
  {
    title: 'Deliver controlled change',
    text: 'Move a migration, remediation or improvement workstream from scope through validation and handover.'
  },
  {
    title: 'Run services more reliably',
    text: 'Resolve complex issues, strengthen operations and reduce avoidable support friction.'
  },
  {
    title: 'Add senior capacity',
    text: 'Bring Microsoft expertise into an internal team or partner delivery model when it is needed.'
  }
];

const deliverySteps = [
  {
    number: '01',
    title: 'Share the situation',
    text: 'Describe the environment, current problem, expected outcome, stakeholders and timing.'
  },
  {
    number: '02',
    title: 'Agree scope and outputs',
    text: 'Enki Tech confirms fit, responsibilities, deliverables, engagement model and the next decision point.'
  },
  {
    number: '03',
    title: 'Deliver with handover',
    text: 'Work is completed with clear communication, technical evidence, documentation and practical next steps.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Senior Microsoft Cloud consulting · Europe</p>
            <h1>Solve a Microsoft Cloud delivery or operations challenge with senior expertise.</h1>
            <p className="heroText">
              Enki Tech helps IT leaders, transformation teams and delivery partners assess complex environments, deliver defined change, stabilize operations and add specialist capacity across Microsoft 365, Azure, identity, endpoint, collaboration and automation.
            </p>
            <div className="heroActions">
              <a href="#engagements" className="button">Choose an engagement</a>
              <Link href="/contact/" className="button buttonGhost">Discuss your situation</Link>
            </div>
          </div>
          <aside className="heroPanel" aria-label="Enki Tech proof points">
            <p className="eyebrow">Delivery evidence</p>
            <div className="metric"><strong>15+ years</strong><span>Cloud, workplace and hybrid infrastructure experience</span></div>
            <div className="metric"><strong>12,000+ users</strong><span>Windows 365 Cloud PC migration experience</span></div>
            <div className="metric"><strong>L2/L3 ownership</strong><span>Complex troubleshooting, collaboration operations and escalations</span></div>
            <div className="metric"><strong>European B2B</strong><span>Direct projects, retained support and partner-led delivery</span></div>
          </aside>
        </div>
      </section>

      <section className="clientOutcomeBand" aria-label="Client outcomes">
        <div className="container clientOutcomeGrid">
          {clientOutcomes.map((outcome) => (
            <article className="clientOutcome" key={outcome.title}>
              <h2>{outcome.title}</h2>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionAlt" id="engagements">
        <div className="container">
          <SectionHeader
            eyebrow="What clients can buy"
            title="Choose the engagement that matches the result you need"
            text="The technical scope can span Microsoft 365, Azure, identity, endpoint, collaboration and automation. The engagement model starts with the business situation and the output you need."
          />
          <div className="engagementGrid">
            {engagements.map((engagement) => (
              <article className="engagementCard" key={engagement.id}>
                <p className="tag">{engagement.label}</p>
                <h3>{engagement.title}</h3>
                <div className="engagementSituation">
                  <strong>Use this when</strong>
                  <p>{engagement.bestFor}</p>
                </div>
                <div className="engagementResult">
                  <strong>Client result</strong>
                  <p>{engagement.result}</p>
                </div>
                <p className="engagementSubheading">What is included</p>
                <ul className="checkList engagementDeliverables">
                  {engagement.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
                <p className="engagementFormat"><strong>Engagement format:</strong> {engagement.format}</p>
                <Link
                  href={engagement.href}
                  className="textLink engagementCardLink"
                  aria-label={`Explore engagement: ${engagement.title}`}
                >
                  View engagement details
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Technical capability areas"
            title="Apply the engagement to the right technical area"
            text="These are the Microsoft technology areas in which assessments, projects, operational support and partner delivery can be scoped."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="How an engagement starts"
            title="A simple path from technical problem to agreed delivery"
            text="Clients do not need to diagnose the exact service before making contact. Start with the situation, the required result and the constraints."
          />
          <div className="deliveryProcessGrid">
            {deliverySteps.map((step) => (
              <article className="deliveryStep" key={step.number}>
                <p className="deliveryStepNumber">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
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

      <CTA
        eyebrow="Start with the problem"
        title="Not sure which engagement fits?"
        text="Share what is not working, what must change, the expected timeline and whether this is a direct project or partner opportunity. Enki Tech will identify the most relevant next step."
        buttonLabel="Describe your situation"
      />
    </>
  );
}
