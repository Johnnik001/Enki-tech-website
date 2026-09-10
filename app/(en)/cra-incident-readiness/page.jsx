import Link from 'next/link';
import { CTA } from '../../../components/CTA';

export const metadata = {
  title: 'CRA Incident Reporting Readiness Sprint',
  description:
    'A fixed-scope technical dry run for EU manufacturers to test whether vulnerability and severe-incident reporting can move from awareness to 24-hour early warning, 72-hour notification, SRP access and submission readiness, remediation and evidence.',
  alternates: { canonical: '/cra-incident-readiness/' },
  openGraph: {
    title: 'CRA Incident Reporting Readiness Sprint | Enki Tech',
    description:
      'Test the operational path from security event to product impact, ownership, independent deadline control, 24/72-hour reporting data, SRP access, remediation and audit-ready evidence.',
    url: '/cra-incident-readiness/',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'CRA Incident Reporting Readiness Sprint | Enki Tech',
    description:
      'Test the operational path from security event to product impact, ownership, 24/72-hour reporting data, SRP access, remediation and evidence.'
  }
};

const outcomes = [
  'Timed simulation of one actively exploited vulnerability or severe-incident scenario',
  'Independent regulatory clock anchored to the actual awareness timestamp',
  'Product, version, owner and evidence-source mapping for the selected scenario',
  '24-hour early-warning and 72-hour notification data-readiness review',
  'SRP readiness plan covering personal EU Login/MFA, representative responsibilities and a documented backup handoff',
  'Escalation matrix with primary and backup owners for critical handoffs',
  'Evidence map showing what can be retrieved quickly and what remains manual',
  'Prioritized remediation backlog focused on operational bottlenecks',
  'Readiness score and concise management summary for the tested workflow'
];

const workflow = [
  ['T0', 'Preserve awareness time', 'Record the earliest relevant awareness timestamp and source. Escalate classification promptly; internal validation must not reset or postpone the reporting clock.'],
  ['Clock', 'Start the independent deadline control', 'Calculate internal 24-hour and 72-hour deadlines from the awareness timestamp rather than depending on a portal timer or individual memory.'],
  ['Impact', 'Map product and affected versions', 'Determine whether the selected product or version is affected and identify the business and security context.'],
  ['Own', 'Assign decision and submission authority', 'Identify the primary owner, backup owner and escalation path across Security, Engineering, Product and Legal/Compliance.'],
  ['SRP', 'Prepare the submission handoff', 'Review personal EU Login/MFA readiness and representative roles. Rehearse with offline reporting templates; follow current ENISA guidance on when to register.'],
  ['24h', 'Prepare early-warning data', 'Test whether required technical facts can be assembled inside the first reporting window.'],
  ['72h', 'Complete notification data', 'Validate the deeper impact, mitigation, status and evidence needed for the main notification workflow.'],
  ['Fix', 'Track remediation', 'Connect the reporting process to corrective or mitigating action, validation and an owned backlog.'],
  ['Close', 'Track the final report', 'Use the correct final-report trigger for the scenario and preserve corrective-action, validation and notification evidence.']
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
          <p className="eyebrow">Cyber Resilience Act · 24/72h reporting · SRP operational readiness</p>
          <h1>Can your team move from vulnerability awareness to defensible CRA reporting data in time?</h1>
          <p>
            Enki Tech runs a focused technical dry run for manufacturers of products with digital elements. The sprint tests the operational path from detection and product impact to independent deadline control, ownership, reporting data, SRP access and submission readiness, remediation and evidence—before the first real event starts the clock.
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
            <h2>The regulation may be documented. The operational handoffs still fail under time pressure.</h2>
          </div>
          <p>
            A scanner, ticketing tool, SBOM, incident policy, legal guidance and reporting portal do not automatically create a working 24/72-hour response path. The sprint tests whether people, data, access, deadline controls and evidence can be mobilized quickly enough when an actively exploited vulnerability or severe product-security incident is discovered.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Regulatory context · reviewed 10 September 2026</p>
            <h2>Reporting applies from 11 September 2026. Prepare the people, data and handoffs.</h2>
          </div>
          <div>
            <p>
              Article 14 covers actively exploited vulnerabilities and severe incidents affecting in-scope products. Both require reporting without undue delay, with a 24-hour early-warning limit and a 72-hour notification limit from awareness. The dry run also tests the later final-report path.
            </p>
            <p>
              ENISA recommends preparing personal EU Login accounts with MFA, and registering on the SRP when a notification is needed. We rehearse offline and review existing access where appropriate. No test notification is submitted to the live platform. Internal evidence collection can be automated; ENISA says the initial SRP release has no submission API.
            </p>
            <p><a href="https://digital-strategy.ec.europa.eu/en/policies/cra-reporting">European Commission reporting guidance</a></p>
            <div className="heroActions">
              <Link href="/insights/cra-reporting-11-september-2026/" className="button">Read the 11 September insight</Link>
              <a href="https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions" target="_blank" rel="noreferrer" className="button buttonGhost dark">ENISA SRP FAQ</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
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
              <h2>From awareness time to verified technical closure</h2>
            </div>
            <p>Every stage is linked to an owner, source system, access dependency, evidence requirement and target response time.</p>
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
        <div className="container">
          <div className="assuranceTableHeader">
            <div><p className="eyebrow">Final-report deadlines</p><h2>Keep the two reporting tracks separate.</h2></div>
            <p>The initial 24/72-hour windows do not close the reporting process.</p>
          </div>
          <div className="cardsGrid two">
            <article className="card"><h3>Actively exploited vulnerability</h3><p>Final report no later than 14 days after a corrective measure becomes available. Record that availability timestamp separately from awareness and deployment.</p></article>
            <article className="card"><h3>Severe incident</h3><p>Final report within one month after the incident notification. Track the notification timestamp as the deadline anchor.</p></article>
          </div>
          <p className="serviceContextLink">Confirm the scenario and any applicable follow-up requirements with your reporting owner. <a href="https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions">ENISA SRP FAQ and deadlines</a>.</p>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Delivery and acceptance</p>
            <h2>A five-working-day sprint once inputs and stakeholders are available.</h2>
            <p>Day 1: confirm scope and collect inputs. Day 2: map owners, products and evidence. Day 3: run the timed exercise. Day 4: prepare the runbook and action plan. Day 5: review results and agree the retest priorities.</p>
            <p>Before starting, provide a product/version list, an example vulnerability or incident record, the current process and named technical and reporting owners. We confirm the schedule and fixed fee after a short fit call.</p>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">What completion means</p>
            <h2>You can see what worked, what failed and who acts next.</h2>
            <p>You receive the timestamped exercise record, primary and backup responsibility matrix, draft reporting-data templates, evidence index and a prioritized 30/60/90-day action plan. Each tested step is marked demonstrated, constrained or not demonstrated, with an owner for every unresolved gap.</p>
            <p>Completion means delivery of this agreed evidence package and readout. It does not mean every gap has been fixed or that the organisation is certified.</p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Typical scope</p>
            <h2>A defined exercise with a practical handover</h2>
            <div className="listPanel wide">
              <div className="principle">One selected product family or clearly bounded product scope</div>
              <div className="principle">One primary scenario: actively exploited vulnerability or severe security incident</div>
              <div className="principle">Security, Engineering/Product and compliance decision-makers represented</div>
              <div className="principle">Existing vulnerability, incident, inventory and evidence sources reviewed</div>
              <div className="principle">Independent 24/72-hour deadline tracking and escalation path tested</div>
              <div className="principle">EU Login/MFA preparation, representative roles and backup handoff reviewed</div>
              <div className="principle">Short management readout plus technical remediation backlog</div>
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Important boundary</p>
            <h2>Responsibilities agreed before the exercise</h2>
            <p>
              Enki Tech tests technical and operational readiness, evidence availability and engineering handoffs. The client retains responsibility for legal interpretation, reportability decisions, regulatory submissions and formal incident command unless separately agreed with appropriately authorized parties.
            </p>
            <p>
              This scheduled exercise does not include live incident response, 24/7 monitoring, product-code or firmware fixes, certification or a guarantee of regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Who participates</p>
              <h2>Bring the people who own the response.</h2>
            </div>
            <p>Include a technical owner and the person accountable for reporting decisions, plus backups for critical handoffs.</p>
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
            <p className="eyebrow">After the exercise</p>
            <h2>Turn the findings into an owned improvement plan.</h2>
          </div>
          <div>
            <p>
              You receive a prioritized backlog with owners and acceptance criteria. Enki Tech can separately scope Microsoft Cloud, identity and reporting-workflow improvements. Product-code and firmware fixes stay with your engineering team or a qualified product-security partner. Recurring governance covers only the controls and review cadence agreed with you.
            </p>
            <div className="heroActions">
              <Link href="/secure-cloud-remediation/" className="button">Remediate the technical gaps</Link>
              <Link href="/security-assurance/" className="button buttonGhost dark">View Operational Assurance</Link>
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
