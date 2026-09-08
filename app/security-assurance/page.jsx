import Link from 'next/link';
import { CTA } from '../../components/CTA';

export const metadata = {
  title: 'Secure Cloud & Cyber Operational Assurance',
  description:
    'Operational assurance for Microsoft Cloud environments: turn security findings, identity risks and cloud configuration gaps into verified remediation, evidence and repeatable control.',
  alternates: { canonical: '/security-assurance/' },
  openGraph: {
    title: 'Secure Cloud & Cyber Operational Assurance | Enki Tech',
    description:
      'From security finding to verified remediation. Enki Tech helps European organisations close Microsoft Cloud and identity risks with clear ownership, technical verification and repeatable controls.',
    url: '/security-assurance/',
    type: 'website'
  }
};

const operatingLoop = [
  ['01', 'Detect', 'Identify the security finding, configuration deviation, privileged-access risk or vulnerability that matters.'],
  ['02', 'Prioritize', 'Connect technical severity to business context, exposure, affected services and remediation urgency.'],
  ['03', 'Assign', 'Give every material finding a named owner, target SLA, escalation path and decision authority.'],
  ['04', 'Remediate', 'Implement the technical change across Microsoft 365, Entra ID, Intune, Azure, Exchange, Teams or Defender.'],
  ['05', 'Verify', 'Test the remediated state against agreed acceptance criteria and confirm that the intended control is operating.'],
  ['06', 'Prove', 'Preserve the evidence, ownership and closure record needed for governance, audit and future review.']
];

const offers = [
  {
    tag: 'Entry point',
    title: 'CRA Incident Reporting Readiness Sprint',
    text: 'A timed technical dry run for EU product organisations that need to test the path from security-event awareness to 24/72-hour reporting data, remediation and evidence.',
    href: '/cra-incident-readiness/',
    result: 'Timed scenario · ownership map · evidence gaps · remediation backlog'
  },
  {
    tag: 'Fixed-scope remediation',
    title: 'Secure Cloud Remediation Sprint',
    text: 'Turn a bounded set of Microsoft Cloud, identity or endpoint findings into implemented fixes, technical verification against agreed acceptance criteria and defensible closure evidence.',
    href: '/secure-cloud-remediation/',
    result: 'Prioritized fixes · implementation · verification · closure evidence'
  },
  {
    tag: 'Recurring assurance',
    title: 'Continuous Security Assurance',
    text: 'Keep critical controls effective after remediation through recurring evidence review, privileged-access checks, drift review and owned improvement backlog.',
    href: '/services/continuous-secure-cloud-governance/',
    result: 'Recurring review · drift control · evidence · improvement backlog'
  }
];

const fit = [
  'Regulated or security-conscious organisations running Microsoft Cloud',
  'Teams with audit findings, vulnerabilities or identity risks that are not closing fast enough',
  'Organisations where ownership is split across Security, Infrastructure, Workplace, Product or Compliance',
  'Consultancies, MSSPs and integrators that need a specialist Microsoft remediation and assurance layer'
];

export default function SecurityAssurancePage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Secure Cloud · Verified remediation · Operational resilience</p>
          <h1>From security finding to verified remediation.</h1>
          <p>
            Enki Tech helps European organisations turn Microsoft Cloud, identity and operational security risks into controlled technical outcomes—with clear ownership, implemented remediation, verification against agreed acceptance criteria and evidence that can be reused.
          </p>
          <div className="heroActions">
            <Link href="/contact/?area=Secure%20Cloud%20%26%20Cyber%20Operational%20Assurance&engagement=Assessment%20or%20audit" className="button">Discuss your risk or backlog</Link>
            <Link href="/cra-incident-readiness/" className="button buttonGhost">Explore CRA readiness</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">The expensive problem</p>
            <h2>Finding risk is not the same as closing it.</h2>
          </div>
          <p>
            Many organisations already have scanners, security tools, policies and audit reports. The operational failure appears later: unclear ownership, delayed remediation, weak verification and incomplete evidence. Enki Tech focuses on that execution gap—especially across Microsoft 365, Entra ID, Intune, Azure, Exchange, Teams and Defender environments.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Operational control loop</p>
              <h2>Detect → Prioritize → Assign → Remediate → Verify → Prove</h2>
            </div>
            <p>The objective is not another checklist. It is a repeatable route from identified risk to verified closure.</p>
          </div>
          <div className="cardsGrid two">
            {operatingLoop.map(([number, title, text]) => (
              <article className="card" key={number}>
                <p className="tag">{number}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Commercial path</p>
              <h2>Start with a bounded problem. Expand only where the evidence supports it.</h2>
            </div>
            <p>Each offer is designed to produce a client-visible operating result and a logical next step.</p>
          </div>
          <div className="commercialOfferGrid">
            {offers.map((offer) => (
              <article className="commercialOfferCard" key={offer.title}>
                <p className="tag">{offer.tag}</p>
                <h2>{offer.title}</h2>
                <p>{offer.text}</p>
                <div className="commercialOfferResult"><span>Output</span>{offer.result}</div>
                <Link href={offer.href} className="textLink">View the next step <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Best fit</p>
            <h2>For teams that need technical closure, not another generic security report.</h2>
          </div>
          <div className="listPanel wide">
            {fit.map((item) => <div className="principle" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Delivery boundary</p>
            <h2>Specialist technical assurance—not a generic SOC or legal compliance practice.</h2>
          </div>
          <div>
            <p>
              Enki Tech focuses on Microsoft Cloud, identity, collaboration, endpoint, remediation, operational evidence and automation. Where legal interpretation, formal certification, 24/7 SOC coverage or regulated incident-command obligations are required, those responsibilities remain with the client or appropriately authorized specialist partners unless separately contracted.
            </p>
            <div className="heroActions">
              <Link href="/services/" className="button">Explore technical services</Link>
              <Link href="/partners/" className="button buttonGhost dark">Partner with Enki Tech</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Close the execution gap"
        title="Which security findings are still open because ownership, remediation or evidence is unclear?"
        text="Share the Microsoft environment, the finding or backlog, and the required outcome. Enki Tech will identify whether the right first step is a readiness sprint, focused remediation or recurring assurance."
        buttonLabel="Discuss the operational gap"
        buttonHref="/contact/?area=Secure%20Cloud%20%26%20Cyber%20Operational%20Assurance"
      />
    </>
  );
}
