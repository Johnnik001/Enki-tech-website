import Link from 'next/link';
import { CTA } from '../../components/CTA';

export const metadata = {
  title: 'CRA Incident Reporting Readiness Sprint',
  description:
    'A fixed-scope technical dry run for EU manufacturers to test whether vulnerability and severe-incident reporting can move from detection to 24-hour early warning, 72-hour notification, remediation and evidence.',
  alternates: { canonical: '/cra-incident-readiness/' },
  openGraph: {
    title: 'CRA Incident Reporting Readiness Sprint | Enki Tech',
    description:
      'Test the operational path from security event to product impact, ownership, 24/72-hour reporting data, remediation and audit-ready evidence before the first real CRA reporting event.',
    url: '/cra-incident-readiness/',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'CRA Incident Reporting Readiness Sprint | Enki Tech',
    description:
      'Test the operational path from security event to product impact, ownership, 24/72-hour reporting data, remediation and audit-ready evidence.'
  }
};

const outcomes = [
  'Timed simulation of one actively exploited vulnerability or severe-incident scenario',
  'Product, version, owner and evidence-source mapping for the selected scenario',
  '24-hour early-warning and 72-hour notification data-readiness review',
  'Escalation matrix with primary and backup owners for critical handoffs',
  'Evidence map showing what can be retrieved quickly and what remains manual',
  'Prioritized remediation backlog focused on operational bottlenecks',
  'Readiness score and concise management summary for the tested workflow'
];

const workflow = [
  ['T0', 'Detect and validate', 'Confirm that the event is credible, establish awareness time and identify the technical source of truth.'],
  ['Impact', 'Map product and affected versions', 'Determine whether the selected product or version is affected and identify the business and security context.'],
  ['Own', 'Assign decision authority', 'Identify the primary owner, backup owner and escalation path across Security, Engineering, Product and Legal/Compliance.'],
  ['24h', 'Prepare early-warning data', 'Test whether required technical facts can be assembled inside the first reporting window.'],
  ['72h', 'Complete notification data', 'Validate the deeper impact, mitigation, status and evidence needed for the main notification workflow.'],
  ['Fix', 'Track remediation', 'Connect the reporting process to corrective or mitigating action, validation and an owned backlog.'],
  ['Close', 'Preserve evidence', 'Confirm that the final reporting path and supporting evidence can be reproduced after the event.']
];

const buyers = [
  ['Product Security / PSIRT', 'Validate whether vulnerability intelligence, product inventory, ownership and reporting can operate as one timed process.'],
  ['CISO / Security Engineering', 'Expose gaps between security detection, incident handling, technical remediation and regulatory evidence.'],
  ['CTO / Head of Engineering', 'Clarify engineering handoffs, affected-version mapping and decision ownership before a real event creates deadline pressure.'],
  ['MSSPs / Integrators', 'Add a bounded CRA technical-readiness work package without positioning as legal counsel or building a full product-security practice internally.']
];

export default function CRAIncidentReadinessPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Cyber Resilience Act · 24/72h reporting · Technical readiness</p>
          <h1>Can your team move from vulnerability awareness to defensible CRA reporting data in time?</h1>
          <p>
            Enki Tech runs a focused technical dry run for manufacturers of products with digital elements. The sprint tests the operational path from detection and product impact to ownership, reporting data, remediation and evidence—before the first real event starts the clock.
          </p>
          <div className="heroActions">
            <Link href="/contact/?area=CRA%20Incident%20Readiness&engagement=Assessment%20or%20audit" className="button">Book a CRA reporting dry run</Link>
            <Link href="/resources/cra-incident-dry-run-playbook/" className="button buttonGhost">View the dry-run checklist</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">The buying problem</p>
            <h2>The regulation is documented. The operational handoffs are where readiness fails.</h2>
          </div>
          <p>
            A scanner, ticketing tool, SBOM, incident policy and legal guidance do not automatically create a working 24/72-hour response path. The sprint tests whether people, data and evidence can be mobilized quickly enough when an actively exploited vulnerability or severe product-security incident is discovered.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Fixed-scope sprint</p>
              <h2>One scenario. One timed workflow. Clear gaps and owners.</h2>
            </div>
            <p>The engagement is designed as a bounded technical-readiness exercise, not an open-ended compliance programme.</p>
          </div>
          <div className="cardsGrid two">
            {outcomes.map((item, index) => (
              <article className="card" key={item}>
                <p className="tag">Deliverable {String(index + 1).padStart(2, '0')}</p>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Dry-run path</p>
              <h2>From awareness time to final technical closure</h2>
            </div>
            <p>Every stage is linked to an owner, source system, evidence requirement and target response time.</p>
          </div>
          <div className="assuranceTable" role="table" aria-label="CRA incident dry-run workflow">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">Stage</div>
              <div role="columnheader">Decision</div>
              <div role="columnheader">What the dry run tests</div>
              <div role="columnheader">Evidence</div>
              <div role="columnheader">Outcome</div>
            </div>
            {workflow.map(([stage, title, text]) => (
              <div className="assuranceTableRow" role="row" key={stage}>
                <div className="assuranceStage" role="cell"><strong>{stage}</strong></div>
                <div role="cell" data-label="Decision"><strong>{title}</strong></div>
                <div role="cell" data-label="What the dry run tests">{text}</div>
                <div role="cell" data-label="Evidence">Named source of truth and retrievable artefact</div>
                <div role="cell" data-label="Outcome">Pass, constrained or remediation required</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Typical scope</p>
            <h2>Designed for a fast commercial start</h2>
            <div className="listPanel wide">
              <div className="principle">One selected product family or clearly bounded product scope</div>
              <div className="principle">One primary scenario: actively exploited vulnerability or severe security incident</div>
              <div className="principle">Security, Engineering/Product and compliance decision-makers represented</div>
              <div className="principle">Existing vulnerability, incident, inventory and evidence sources reviewed</div>
              <div className="principle">Short management readout plus technical remediation backlog</div>
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Important boundary</p>
            <h2>Technical readiness—not legal advice and not a 24/7 IR retainer</h2>
            <p>
              Enki Tech tests technical and operational readiness, evidence availability and engineering handoffs. The client retains responsibility for legal interpretation, reportability decisions, regulatory submissions and formal incident command unless separately agreed with appropriately authorized parties.
            </p>
            <p>
              A guaranteed 24/7 incident-response SLA is outside the initial sprint. That capability should only be offered after delivery capacity, insurance, liability, escalation and on-call coverage are established.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Who can buy it</p>
              <h2>One technical readiness capability, several existing budget owners</h2>
            </div>
            <p>The economic buyer depends on whether the immediate concern is product security, engineering readiness, regulatory evidence or partner delivery.</p>
          </div>
          <div className="cardsGrid two">
            {buyers.map(([title, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Commercial ladder</p>
            <h2>Use the dry run as the entry point—not the end product</h2>
          </div>
          <div>
            <p>
              The highest-value follow-on work is technical: close evidence gaps, improve vulnerability-to-product mapping, automate workflow steps, strengthen identity/cloud controls and establish repeatable assurance. This keeps the relationship focused on measurable operational outcomes rather than generic compliance consulting.
            </p>
            <div className="heroActions">
              <Link href="/privileged-identity-assurance/" className="button">Continuous Identity Assurance</Link>
              <Link href="/resources/procurement-capability-sheet/" className="button buttonGhost dark">Procurement capability</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Test readiness before the first real deadline"
        title="Run one scenario and find the bottlenecks while there is still time to fix them."
        text="Share the product scope, current vulnerability/incident process and the teams involved. Enki Tech will confirm whether a bounded CRA Incident Reporting Readiness Sprint is the right first step."
        buttonLabel="Discuss a CRA readiness sprint"
        buttonHref="/contact/?area=CRA%20Incident%20Readiness&engagement=Assessment%20or%20audit"
      />
    </>
  );
}
