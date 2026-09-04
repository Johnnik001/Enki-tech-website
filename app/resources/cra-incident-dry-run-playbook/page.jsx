import Link from 'next/link';
import { PrintButton } from '../../../components/PrintButton';

export const metadata = {
  title: 'CRA 24/72h Incident Dry-Run Checklist',
  description:
    'A practical checklist for testing the technical path from awareness of an actively exploited vulnerability or severe incident to CRA reporting data, remediation and evidence.',
  alternates: { canonical: '/resources/cra-incident-dry-run-playbook/' },
  openGraph: {
    title: 'CRA 24/72h Incident Dry-Run Checklist | Enki Tech',
    description:
      'Test whether product, security, engineering and compliance teams can assemble the right technical facts and evidence under a 24/72-hour reporting clock.',
    url: '/resources/cra-incident-dry-run-playbook/',
    type: 'article'
  },
  twitter: {
    card: 'summary',
    title: 'CRA 24/72h Incident Dry-Run Checklist | Enki Tech',
    description:
      'Test whether product, security, engineering and compliance teams can assemble the right technical facts and evidence under a 24/72-hour reporting clock.'
  }
};

const checks = [
  ['01', 'Awareness time', 'Record the exact time the organisation becomes aware of the event and the source that established credibility.'],
  ['02', 'Event classification', 'Determine whether the scenario is an actively exploited vulnerability, a severe product-security incident or neither.'],
  ['03', 'Product and version mapping', 'Identify affected product families, versions, components and markets using the organisation’s source of truth.'],
  ['04', 'Primary and backup ownership', 'Name the operational owner, decision authority and backup path if a key person is unavailable.'],
  ['05', '24-hour data package', 'Test whether the minimum technical facts for an early warning can be assembled inside the first reporting window.'],
  ['06', '72-hour data package', 'Validate deeper impact, mitigation status, affected scope and evidence for the main notification workflow.'],
  ['07', 'Remediation ownership', 'Connect reporting to corrective or mitigating action, engineering ownership, validation and backlog tracking.'],
  ['08', 'Final-report path', 'Define how corrective measures, closure evidence and final technical facts will be assembled after the initial reporting windows.'],
  ['09', 'Evidence retention', 'Confirm that key decisions, timestamps, owners, technical findings and remediation evidence can be reconstructed later.'],
  ['10', 'Timed re-test', 'Repeat the scenario after improvements and compare retrieval time, handoff quality and evidence completeness.']
];

const readiness = [
  ['Green', 'The owner, source system and evidence are known; the step can be completed within the target time without heroic effort.'],
  ['Amber', 'The step is possible but depends on manual correlation, unclear ownership, one key person or slow evidence retrieval.'],
  ['Red', 'The organisation cannot reliably complete the step inside the required workflow or cannot produce defensible evidence.']
];

export default function CRAIncidentDryRunPlaybookPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Enki Tech resource · CRA incident readiness</p>
          <h1>CRA 24/72h Incident Dry-Run Checklist</h1>
          <p>
            A compact technical checklist for testing whether an organisation can move from awareness of an actively exploited vulnerability or severe product-security incident to owned decisions, reporting data, remediation and evidence.
          </p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/cra-incident-readiness/" className="button">View the readiness sprint</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">How to use it</p>
            <h2>Run the workflow against one realistic scenario and use a clock</h2>
          </div>
          <p>
            The objective is not to debate legal interpretation during the exercise. The objective is to expose operational delay: missing product mapping, unclear authority, unavailable evidence, fragile handoffs and remediation steps that depend on a single person.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTable" role="table" aria-label="CRA incident readiness checklist">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">Check</div>
              <div role="columnheader">Control point</div>
              <div role="columnheader">What to test</div>
              <div role="columnheader">Evidence source</div>
              <div role="columnheader">Result</div>
            </div>
            {checks.map(([number, title, text]) => (
              <div className="assuranceTableRow" role="row" key={number}>
                <div className="assuranceStage" role="cell"><strong>{number}</strong></div>
                <div role="cell" data-label="Control point"><strong>{title}</strong></div>
                <div role="cell" data-label="What to test">{text}</div>
                <div role="cell" data-label="Evidence source">Name the authoritative system, document or decision record.</div>
                <div role="cell" data-label="Result">Green / Amber / Red</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Simple readiness scoring</p>
            <h2>Score the process—not the team</h2>
            <div className="listPanel wide">
              {readiness.map(([label, text]) => (
                <div className="principle" key={label}><strong>{label}</strong> · {text}</div>
              ))}
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Evidence principle</p>
            <h2>If evidence requires a two-week audit scramble, it is not 24-hour ready.</h2>
            <p>
              The strongest remediation opportunities usually sit between tools and teams: vulnerability intelligence that is not linked to product inventory, tickets without clear authority, evidence that lives in screenshots, or decisions that depend on one senior engineer being available.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Scope boundary</p>
            <h2>Technical readiness is only one part of CRA compliance</h2>
          </div>
          <div>
            <p>
              This checklist is an operational engineering aid. It does not provide legal advice, determine reportability on behalf of a manufacturer, submit notifications, or certify compliance. Legal interpretation and regulatory responsibility remain with the manufacturer and its authorised advisers.
            </p>
            <div className="heroActions">
              <Link href="/cra-incident-readiness/" className="button">Run a technical dry run</Link>
              <Link href="/contact/?area=CRA%20Incident%20Readiness&engagement=Assessment%20or%20audit" className="button buttonGhost dark">Discuss scope</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
