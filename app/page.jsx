import Link from 'next/link';
import { CTA } from '../components/CTA';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCards } from '../components/ServiceCards';
import { engagements, experience, insights } from '../data/site';

export const metadata = {
  title: 'Secure Microsoft Cloud Access, Governance & Operations',
  description:
    'Secure Microsoft Cloud assessments, privileged identity review, remediation and continuous governance for European organisations and delivery partners.',
  alternates: { canonical: '/' }
};

const controlJourney = [
  {
    number: '01',
    title: 'Map critical access',
    text: 'Trace human, external and workload identity paths to the cloud resources that matter most.'
  },
  {
    number: '02',
    title: 'Validate the controls',
    text: 'Test Conditional Access, PIM, permissions, evidence and operational ownership end to end.'
  },
  {
    number: '03',
    title: 'Remediate by risk',
    text: 'Convert findings into sequenced actions with clear owners, dependencies and evidence.'
  },
  {
    number: '04',
    title: 'Keep proving it',
    text: 'Review drift, privilege and control evidence as identities and configurations continue to change.'
  }
];

const commercialOffers = [
  {
    tag: 'Fixed-scope assessment',
    title: 'Secure Cloud Access & Privileged Identity',
    text: 'Understand who and what can reach critical Microsoft Cloud resources, which controls govern each path and where remediation is required.',
    result: 'Trust-path map · control evidence · prioritized remediation',
    href: '/services/secure-cloud-access-privileged-identity/'
  },
  {
    tag: 'Recurring governance',
    title: 'Continuous Secure Cloud Governance',
    text: 'Check whether agreed security controls remain effective as privileges, policies, workloads and exceptions change after project handover.',
    result: 'Drift review · privileged access · monthly evidence · backlog',
    href: '/services/continuous-secure-cloud-governance/'
  },
  {
    tag: 'Specialist audit module',
    title: 'Crypto Agility & PQC Readiness',
    text: 'Create an initial inventory of cryptographic dependencies and identify where long-lived data, certificates, keys or legacy algorithms need earlier planning.',
    result: 'Crypto inventory · agility score · 12–36 month roadmap',
    href: '/services/microsoft-cloud-audit/#specialist-modules'
  }
];

const trustPath = ['Identity', 'Device', 'Privilege', 'Workload', 'Data'];

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
        <div className="container secureHeroGrid">
          <div className="secureHeroCopy">
            <p className="heroKicker"><span aria-hidden="true"></span> Secure Microsoft Cloud for high-trust environments</p>
            <h1>Know who can access critical cloud resources—and prove the controls still work.</h1>
            <p className="heroText">
              Enki Tech helps European IT leaders and delivery partners map cloud access, govern privileged identity, remediate material risk and maintain evidence as Microsoft environments change.
            </p>
            <div className="heroActions">
              <Link href="/services/secure-cloud-access-privileged-identity/" className="button">Explore the assessment</Link>
              <Link href="/contact/?area=Secure%20Cloud%20Access%20%26%20Privileged%20Identity&engagement=Assessment%20or%20audit" className="button buttonGhost">Discuss your environment</Link>
            </div>
            <p className="heroMicrocopy">Independent senior expertise · Microsoft 365 · Azure · Entra ID · Intune · hybrid infrastructure</p>
          </div>
          <aside className="trustMap" aria-label="Secure cloud trust path">
            <div className="trustMapHeader">
              <div>
                <p className="trustMapLabel">Critical access path</p>
                <h2>Control the route to the resource</h2>
              </div>
              <span className="trustStatus"><i aria-hidden="true"></i> Evidence-led</span>
            </div>
            <ol className="trustPath">
              {trustPath.map((node, index) => (
                <li key={node}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{node}</strong>
                </li>
              ))}
            </ol>
            <div className="trustControlGrid">
              <div><span>Access policy</span><strong>Conditional Access</strong></div>
              <div><span>Elevation</span><strong>PIM & role governance</strong></div>
              <div><span>Validation</span><strong>Drift & exception review</strong></div>
              <div><span>Assurance</span><strong>Control evidence</strong></div>
            </div>
            <div className="trustOutcome">
              <span>Client result</span>
              <strong>Prioritized remediation and a repeatable governance baseline</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="controlJourneyBand" aria-label="Secure cloud improvement path">
        <div className="container controlJourneyGrid">
          {controlJourney.map((step) => (
            <article className="controlJourneyStep" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section commercialOffersSection">
        <div className="container">
          <SectionHeader
            eyebrow="What clients can buy now"
            title="Start with evidence, then move from remediation to recurring assurance"
            text="Each offer produces a defined decision or operating result. Scope begins with the critical resources, access paths and controls that matter to the organisation."
          />
          <div className="commercialOfferGrid">
            {commercialOffers.map((offer) => (
              <article className="commercialOfferCard" key={offer.title}>
                <p className="tag">{offer.tag}</p>
                <h2>{offer.title}</h2>
                <p>{offer.text}</p>
                <div className="commercialOfferResult"><span>Output</span>{offer.result}</div>
                <Link href={offer.href} className="textLink">View the offer <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="engagements">
        <div className="container">
          <SectionHeader
            eyebrow="Delivery formats"
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

      <section className="section sectionAlt insightFeatureSection">
        <div className="container">
          <div className="resourceFeature">
            <div>
              <p className="eyebrow">Practical resource</p>
              <h2>Use the Secure Cloud Control Matrix to challenge your current operating model</h2>
              <p>Twenty executive and technical questions covering identity, privileged access, workloads, evidence and recurring governance.</p>
              <div className="heroActions resourceFeatureActions">
                <Link href="/resources/secure-cloud-control-matrix/" className="button">Open the control matrix</Link>
                <Link href="/resources/high-assurance-cloud-access-architecture/" className="button buttonGhost">View reference architecture</Link>
              </div>
            </div>
            <div className="resourceMatrixPreview" aria-hidden="true">
              <span>Requirement</span><span>Risk</span><span>Control</span>
              <span>Test</span><span>Evidence</span><span>Owner</span>
              <strong>20 decision questions</strong>
            </div>
          </div>
          <div className="featuredInsightsHeader">
            <div>
              <p className="eyebrow">Market signals translated into action</p>
              <h2>Insights for secure cloud decision-makers</h2>
            </div>
            <Link href="/insights/" className="textLink">View all insights <span aria-hidden="true">→</span></Link>
          </div>
          <div className="featuredInsightsGrid">
            {insights.slice(0, 3).map((insight) => (
              <article className="insightCard" key={insight.slug}>
                <p className="tag">{insight.label}</p>
                <h3>{insight.title}</h3>
                <p>{insight.intro}</p>
                <Link href={`/insights/${insight.slug}/`} className="textLink">Read the insight <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
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
        eyebrow="Start with the critical path"
        title="Which identities can reach the resources you cannot afford to lose control of?"
        text="Share the environment, the critical resource or recurring governance concern. Enki Tech will identify whether an assessment, remediation workstream or recurring control review is the most useful next step."
        buttonLabel="Request a readiness discussion"
      />
    </>
  );
}
