import Link from 'next/link';
import { CTA } from '../components/CTA';
import { SectionHeader } from '../components/SectionHeader';
import { engagements, experience, insights } from '../data/site';

export const metadata = {
  title: 'Secure Cloud, Verified Remediation & Operational Assurance',
  description:
    'Enki Tech helps European organisations turn Microsoft Cloud, identity and security risks into verified remediation, evidence and repeatable operational controls.',
  alternates: { canonical: '/' }
};

const controlJourney = [
  {
    number: '01',
    title: 'Detect the material risk',
    text: 'Start with the security finding, privileged-access path, configuration deviation or regulatory workflow that matters.'
  },
  {
    number: '02',
    title: 'Assign ownership and priority',
    text: 'Connect technical severity to business context, a named owner, target SLA and decision authority.'
  },
  {
    number: '03',
    title: 'Remediate and verify',
    text: 'Implement the fix and verify the remediated state against agreed acceptance criteria.'
  },
  {
    number: '04',
    title: 'Keep proving it',
    text: 'Preserve evidence and review drift, privilege and recurring control effectiveness as the environment changes.'
  }
];

const commercialOffers = [
  {
    tag: 'Time-sensitive EU readiness',
    title: 'CRA Incident Reporting Readiness Sprint',
    text: 'Test whether one product-security scenario can move from awareness to 24/72-hour reporting data, remediation and defensible evidence before a real event starts the clock.',
    result: 'Timed dry run · owner map · evidence gaps · remediation backlog',
    href: '/cra-incident-readiness/'
  },
  {
    tag: 'Fixed-scope remediation',
    title: 'Secure Cloud Remediation Sprint',
    text: 'Turn a bounded set of Microsoft Cloud, identity or endpoint findings into implemented fixes, technical verification and closure evidence.',
    result: 'Prioritized fixes · implementation · verification · evidence',
    href: '/secure-cloud-remediation/'
  },
  {
    tag: 'Recurring assurance',
    title: 'Continuous Security Assurance',
    text: 'Keep critical controls effective after remediation through recurring evidence review, privileged-access checks, drift review and an owned improvement backlog.',
    result: 'Control review · drift · evidence · improvement backlog',
    href: '/services/continuous-secure-cloud-governance/'
  }
];

const assurancePath = ['Detect', 'Prioritize', 'Assign', 'Remediate', 'Verify', 'Prove'];

const capabilityAreas = [
  {
    number: '01',
    title: 'Assess and secure',
    text: 'Establish current risk, access paths, evidence and remediation priorities before committing delivery budget.',
    services: [
      { label: 'Cloud audit & risk review', href: '/services/microsoft-cloud-audit/' },
      { label: 'Secure access & privileged identity', href: '/services/secure-cloud-access-privileged-identity/' }
    ]
  },
  {
    number: '02',
    title: 'Remediate and assure',
    text: 'Move material findings to verified closure and keep the critical controls working after handover.',
    services: [
      { label: 'Operational assurance', href: '/security-assurance/' },
      { label: 'Continuous secure governance', href: '/services/continuous-secure-cloud-governance/' }
    ]
  },
  {
    number: '03',
    title: 'Modernize the platform',
    text: 'Deliver reliable change across collaboration, cloud, identity, endpoint and hybrid dependencies.',
    services: [
      { label: 'Microsoft 365 & collaboration', href: '/services/microsoft-365-digital-collaboration/' },
      { label: 'Azure & hybrid infrastructure', href: '/services/azure-hybrid-infrastructure/' }
    ]
  },
  {
    number: '04',
    title: 'Extend operations',
    text: 'Add focused senior capability and automation where internal teams or delivery partners need leverage.',
    services: [
      { label: 'Identity, endpoint & security', href: '/services/identity-endpoint-security/' },
      { label: 'Automation & IT operations', href: '/services/automation-it-operations/' }
    ]
  }
];

const deliverySteps = [
  {
    number: '01',
    title: 'Share the situation',
    text: 'Describe the environment, open finding or operational problem, expected outcome, stakeholders and timing.'
  },
  {
    number: '02',
    title: 'Agree scope and acceptance',
    text: 'Enki Tech confirms fit, responsibilities, deliverables, evidence and the exact condition for successful closure.'
  },
  {
    number: '03',
    title: 'Deliver and prove the result',
    text: 'Work is completed with implementation evidence, verification, documentation, handover and practical next steps.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container secureHeroGrid">
          <div className="secureHeroCopy">
            <p className="heroKicker"><span aria-hidden="true"></span> Secure cloud · verified remediation · operational resilience</p>
            <h1>Turn security and cloud risks into verified outcomes.</h1>
            <p className="heroText">
              Enki Tech helps European organisations and delivery partners close Microsoft Cloud, identity and operational security gaps with clear ownership, implemented remediation, technical verification against agreed acceptance criteria and reusable evidence.
            </p>
            <div className="heroActions">
              <Link href="/security-assurance/" className="button">Explore Operational Assurance</Link>
              <Link href="/contact/?area=Secure%20Cloud%20%26%20Cyber%20Operational%20Assurance" className="button buttonGhost">Discuss your environment</Link>
            </div>
            <ul className="heroCredentials" aria-label="Delivery credentials">
              <li>Microsoft Cloud & hybrid</li>
              <li>Security remediation & evidence</li>
              <li>Independent European B2B delivery</li>
            </ul>
          </div>
          <aside className="trustMap" aria-label="Operational assurance path">
            <div className="trustMapHeader">
              <div>
                <p className="trustMapLabel">Operational assurance loop</p>
                <h2>Move from finding to verified closure</h2>
              </div>
              <span className="trustStatus"><i aria-hidden="true"></i> Evidence-led</span>
            </div>
            <ol className="trustPath">
              {assurancePath.map((node, index) => (
                <li key={node}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{node}</strong>
                </li>
              ))}
            </ol>
            <div className="trustControlGrid">
              <div><span>Identity</span><strong>Entra ID & PIM</strong></div>
              <div><span>Endpoint</span><strong>Intune & Defender</strong></div>
              <div><span>Cloud</span><strong>Azure & Microsoft 365</strong></div>
              <div><span>Assurance</span><strong>Verification & evidence</strong></div>
            </div>
            <div className="trustOutcome">
              <span>Client result</span>
              <strong>Less open risk, clearer ownership and evidence that the remediation actually worked</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="controlJourneyBand" aria-label="Operational assurance improvement path">
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
            title="Start with a bounded problem. Move from readiness to remediation to recurring assurance."
            text="The commercial path is designed around visible outcomes: expose the gap, fix the material risk, verify closure and keep the control effective over time."
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

      <section className="section sectionAlt engagementChoiceSection" id="engagements">
        <div className="container">
          <SectionHeader
            eyebrow="How clients engage"
            title="Choose the route by the result you need—not by a technology label"
            text="Start with the decision, change or operating result. The technical scope is confirmed after the situation and constraints are understood."
          />
          <div className="engagementCompactGrid">
            {engagements.map((engagement, index) => (
              <Link className="engagementCompactCard" href={engagement.href} key={engagement.id}>
                <span className="engagementCompactNumber">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className="engagementCompactLabel">{engagement.label}</p>
                  <h3>{engagement.title}</h3>
                  <p>{engagement.result}</p>
                </div>
                <span className="engagementCompactArrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="sectionAction sectionActionLeft">
            <Link href="/engagements/" className="textLink">Compare all engagement formats <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section capabilityOverviewSection">
        <div className="container capabilityOverviewGrid">
          <div className="capabilityOverviewIntro">
            <p className="eyebrow">Technical coverage</p>
            <h2>One senior delivery layer across security, Microsoft Cloud and operations</h2>
            <p>Capabilities are grouped around the work clients need to complete, while specialist Microsoft services remain available for detailed scope and delivery.</p>
            <Link href="/services/" className="button buttonLight">Explore all services</Link>
          </div>
          <div className="capabilityGroupGrid">
            {capabilityAreas.map((area) => (
              <article className="capabilityGroup" key={area.number}>
                <span>{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <div className="capabilityLinks">
                    {area.services.map((service) => (
                      <Link href={service.href} key={service.href}>{service.label}<span aria-hidden="true">↗</span></Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt insightFeatureSection">
        <div className="container">
          <SectionHeader
            eyebrow="Decision tools"
            title="Use architecture, control evidence and operational questions before choosing a workstream"
            text="Practical resources help teams clarify the target operating model and identify where evidence, ownership or control design is still incomplete."
          />
          <div className="resourceSpotlightGrid">
            <article className="resourceSpotlight resourceSpotlightPrimary">
              <div className="resourceSpotlightTopline">
                <span>01</span>
                <p>Control review</p>
              </div>
              <h3>Secure Cloud Control Matrix</h3>
              <p>Twenty executive and technical questions covering identity, privileged access, workloads, evidence and recurring governance.</p>
              <div className="resourceMatrixMini" aria-hidden="true">
                <span>Risk</span><span>Control</span><span>Test</span><span>Evidence</span><span>Owner</span>
              </div>
              <Link href="/resources/secure-cloud-control-matrix/" className="textLink">Open the control matrix <span aria-hidden="true">→</span></Link>
            </article>
            <article className="resourceSpotlight">
              <div className="resourceSpotlightTopline">
                <span>02</span>
                <p>Reference architecture</p>
              </div>
              <h3>High-Assurance Cloud Access Architecture</h3>
              <p>See how identity, device, privileged access, workload controls, telemetry and evidence form one defensible path to a critical resource.</p>
              <div className="architecturePathMini" aria-hidden="true">
                <span>Identity</span><i></i><span>Privilege</span><i></i><span>Resource</span>
              </div>
              <Link href="/resources/high-assurance-cloud-access-architecture/" className="textLink">View reference architecture <span aria-hidden="true">→</span></Link>
            </article>
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

      <section className="section deliverySection">
        <div className="container">
          <SectionHeader
            eyebrow="How an engagement starts"
            title="A simple path from open risk to agreed technical outcome"
            text="Clients do not need to diagnose the exact service before making contact. Start with the finding, required result and constraints."
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

      <section className="section proofSection">
        <div className="container">
          <SectionHeader
            eyebrow="Experience"
            title="Credibility based on enterprise infrastructure and operational delivery"
            text="Selected experience themes are presented in sanitized form to protect client confidentiality while showing relevant delivery capability."
          />
          <div className="homepageProofGrid">
            {experience.map((item) => (
              <article className="homepageProofCard" key={item.title}>
                <p className="caseProof">{item.proof}</p>
                <p className="tag">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link href={`/experience/${item.slug}/`} className="textLink">View case study <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <div className="sectionAction">
            <Link href="/experience/" className="button buttonGhost dark">See selected experience</Link>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Start with the open risk"
        title="Which security findings are still open because ownership, remediation or evidence is unclear?"
        text="Share the Microsoft environment, the finding or backlog and the required outcome. Enki Tech will identify whether the right first step is readiness, remediation or recurring assurance."
        buttonLabel="Discuss the operational gap"
        buttonHref="/contact/?area=Secure%20Cloud%20%26%20Cyber%20Operational%20Assurance"
      />
    </>
  );
}
