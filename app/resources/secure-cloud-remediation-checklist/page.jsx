import Link from 'next/link';
import { PrintButton } from '../../../components/PrintButton';

export const metadata = {
  title: 'Secure Cloud Remediation Readiness Checklist',
  description:
    'A practical checklist for turning Microsoft Cloud security findings into a bounded remediation scope with owners, acceptance criteria, implementation evidence and verified closure.',
  alternates: { canonical: '/resources/secure-cloud-remediation-checklist/' },
  openGraph: {
    title: 'Secure Cloud Remediation Readiness Checklist | Enki Tech',
    description:
      'Use twelve checks to determine whether a Microsoft Cloud security backlog is ready to move from finding to controlled remediation and evidence-backed closure.',
    url: '/resources/secure-cloud-remediation-checklist/',
    type: 'article'
  }
};

const checks = [
  ['01', 'Source finding', 'Can each item be traced to an audit, assessment, scanner, security recommendation or approved internal decision?'],
  ['02', 'Affected service', 'Is the affected tenant, subscription, identity, policy, device scope or workload clearly identified?'],
  ['03', 'Business context', 'Is the technical finding connected to exposure, service criticality or a concrete operational consequence?'],
  ['04', 'Named owner', 'Is there a technical owner who can implement or coordinate the remediation?'],
  ['05', 'Decision authority', 'Is the person who can approve risk, outage, exception or design trade-offs known?'],
  ['06', 'Acceptance criteria', 'Is there an explicit condition that defines what “closed” means before implementation starts?'],
  ['07', 'Validation method', 'Is there a technical test, configuration check, query or evidence source that can verify the post-change state?'],
  ['08', 'Dependencies', 'Are application owners, network dependencies, emergency access, service accounts and change prerequisites known?'],
  ['09', 'Change path', 'Are the approval route, maintenance window, rollback expectation and communication path understood?'],
  ['10', 'Evidence capture', 'Can before-and-after configuration, implementation records and verification results be preserved for review?'],
  ['11', 'Residual risk', 'Is there a defined way to document items that cannot be fully remediated inside the current scope?'],
  ['12', 'Follow-on ownership', 'After closure, is there an owner for drift review, recurring control validation or remaining backlog?']
];

const score = [
  ['Ready', 'Most items have a clear owner, acceptance criterion, validation method and delivery path. A bounded remediation sprint can be scoped quickly.'],
  ['Constrained', 'Several items are technically understood but depend on missing approvals, unclear ownership, weak evidence or application decisions. Resolve these blockers before promising a delivery date.'],
  ['Not ready', 'The backlog is still a list of observations rather than an executable work package. Start with triage and scope definition before implementation.']
];

export default function SecureCloudRemediationChecklistPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Enki Tech resource · Microsoft Cloud remediation</p>
          <h1>Secure Cloud Remediation Readiness Checklist</h1>
          <p>
            Twelve checks for turning a Microsoft Cloud security backlog into an executable work package with clear ownership, acceptance criteria, technical verification and closure evidence.
          </p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/secure-cloud-remediation/" className="button">View the remediation sprint</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">How to use it</p>
            <h2>Score the backlog before committing engineering time</h2>
          </div>
          <p>
            Review one real set of findings with Security, the relevant Microsoft platform owner and the person who can approve change or residual risk. The goal is to expose execution blockers before delivery starts—not to create another assessment document.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTable" role="table" aria-label="Secure Cloud remediation readiness checklist">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">Check</div>
              <div role="columnheader">Control point</div>
              <div role="columnheader">Question</div>
              <div role="columnheader">Evidence</div>
              <div role="columnheader">Status</div>
            </div>
            {checks.map(([number, title, text]) => (
              <div className="assuranceTableRow" role="row" key={number}>
                <div className="assuranceStage" role="cell"><strong>{number}</strong></div>
                <div role="cell" data-label="Control point"><strong>{title}</strong></div>
                <div role="cell" data-label="Question">{text}</div>
                <div role="cell" data-label="Evidence">Name the ticket, configuration source, owner, test or approval record.</div>
                <div role="cell" data-label="Status">Ready / Constrained / Missing</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Readiness interpretation</p>
            <h2>Do not confuse a finding list with a deliverable scope</h2>
            <div className="listPanel wide">
              {score.map(([label, text]) => (
                <div className="principle" key={label}><strong>{label}</strong> · {text}</div>
              ))}
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Closure principle</p>
            <h2>A remediation item needs a testable end state.</h2>
            <p>
              “Implemented” is not the same as “closed.” A useful work package defines the target state, validates the result and preserves enough evidence to show what changed and what remains.
            </p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Turn the ready items into a bounded remediation sprint</h2>
          </div>
          <div>
            <p>
              If the backlog is sufficiently defined, Enki Tech can scope a focused remediation engagement across Entra ID, PIM, Conditional Access, Intune, Defender, Azure and selected Microsoft 365 controls. If ownership or acceptance criteria are still unclear, begin with short triage instead of committing to open-ended engineering effort.
            </p>
            <div className="heroActions">
              <Link href="/secure-cloud-remediation/" className="button">Explore the remediation sprint</Link>
              <Link href="/contact/?area=Secure%20Cloud%20Remediation&engagement=Direct%20project" className="button buttonGhost dark">Discuss your backlog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
