import Link from 'next/link';
import { CTA } from '../../../components/CTA';
import { AssuranceOffers } from '../../../components/AssuranceOffers';

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
              <p className="eyebrow">Assess · Fix · Operate</p>
              <h2>Start with a bounded problem. Expand only where the evidence supports it.</h2>
            </div>
            <p>Choose an entry point based on the problem. A CRA reporting exercise is for product manufacturers; Microsoft identity assurance is also available independently.</p>
          </div>
          <AssuranceOffers />
        </div>
      </section>

      <section className="section sectionAlt" id="cra-nis2">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">CRA and NIS2</p>
              <h2>Product reporting and organisational security need different starting points.</h2>
            </div>
            <p>We help your technical team deliver the agreed controls, handoffs and evidence. Your regulatory owner confirms which obligations apply.</p>
          </div>
          <div className="cardsGrid two">
            <article className="card">
              <p className="tag">CRA · Products placed on the EU market</p>
              <h3>Can your product team assemble reporting data in time?</h3>
              <p>The Cyber Resilience Act concerns products with digital elements. Article 14 reporting applies from 11 September 2026; the main requirements apply from 11 December 2027.</p>
              <p>Start with one product and one reporting scenario. We test timestamps, product mapping, owners and evidence retrieval. A company using Microsoft 365 is not automatically a CRA manufacturer.</p>
              <Link href="/cra-incident-readiness/" className="textLink">Review the CRA sprint scope →</Link>
            </article>
            <article className="card">
              <p className="tag">NIS2 · Organisations within scope</p>
              <h3>Can your platform team implement and demonstrate the controls?</h3>
              <p>The NIS2 Directive covers cybersecurity risk management and significant-incident reporting for specified organisations. Applicability depends on factors including sector, size and national law.</p>
              <p>Enki Tech supports the agreed Microsoft workstream: privileged access, cloud configuration, remediation ownership and control evidence. This is one part of an organisation's wider NIS2 programme.</p>
              <Link href="/privileged-identity-assurance/" className="textLink">Explore Microsoft identity assurance →</Link>
            </article>
          </div>
          <p className="serviceContextLink">The reporting triggers, responsible parties and submission routes differ. A shared evidence process does not replace either obligation. Sources: <a href="https://digital-strategy.ec.europa.eu/en/policies/cra-reporting">European Commission CRA reporting guidance</a>, <a href="https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation">CRA implementation guidance</a> and <a href="https://digital-strategy.ec.europa.eu/en/policies/nis2-directive">NIS2 overview</a>. Reviewed 10 September 2026.</p>
        </div>
      </section>

      <section className="section">
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
            <h2>Technical delivery with clear responsibilities.</h2>
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
