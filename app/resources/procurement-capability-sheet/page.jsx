import Link from 'next/link';
import { PrintButton } from '../../../../components/PrintButton';

export const metadata = {
  title: 'Procurement Capability Sheet — Privileged Identity & Secure Cloud Assurance',
  description:
    'A procurement-ready capability sheet for bounded Microsoft identity and secure-cloud assurance work packages, with scope, deliverables, acceptance criteria, dependencies and delivery model.',
  alternates: { canonical: '/resources/procurement-capability-sheet/' },
  openGraph: {
    title: 'Procurement Capability Sheet | Enki Tech',
    description:
      'Privileged Identity & Secure Cloud Assurance expressed as a bounded, measurable delivery capability for integrators, regulated enterprises and institutional procurement.',
    url: '/resources/procurement-capability-sheet/',
    type: 'website'
  }
};

const rows = [
  ['Problem', 'Privileged access and cloud security controls may be correctly configured once but drift over time, while evidence is recreated manually when assurance stakeholders ask for it.'],
  ['Capability', 'Privileged Identity & Secure Cloud Assurance for Microsoft Entra ID and Azure, combining evidence-backed assessment, controlled remediation and repeatable validation.'],
  ['Core scope', 'Privileged roles, PIM/JIT, Conditional Access, authentication strength, emergency access, selected workload identities, control evidence and drift.'],
  ['Primary deliverables', 'Baseline inventory, control-to-evidence matrix, findings, exception register, remediation backlog, verification results and reusable evidence pack.'],
  ['Acceptance model', 'Outcome → measurement → evidence → threshold. Acceptance criteria are agreed before delivery and verified against the final evidence package.'],
  ['Dependencies', 'Read-only or approved administrative access, named technical owner, agreed scope, access to relevant policy context and client change/approval processes.'],
  ['Delivery team', 'Senior Microsoft Cloud / identity lead with additional specialist engineering capacity added where scope, duration or procurement requirements justify it.'],
  ['Typical duration', 'Bounded assessments can begin in days or weeks; remediation and recurring assurance are scoped from the accepted baseline and client change windows.'],
  ['Commercial model', 'Fixed-scope assessment, defined remediation work package, recurring assurance, or partner-led subcontracting. Pricing is agreed against scope and acceptance criteria rather than hourly effort alone.'],
  ['Reusable IP', 'Reference architecture, control specification standard, identity-control library, evidence model, exception workflow, remediation patterns and collector automation.'],
  ['Partner fit', 'MSPs, systems integrators, cyber/GRC advisers and primes that need a narrow Microsoft identity/security capability without building every specialist function internally.'],
  ['Boundary', 'Enki Tech does not claim NATO affiliation, defence accreditation, security clearance or compliance for a specific environment unless independently established for that engagement.']
];

export default function ProcurementCapabilitySheetPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Procurement capability sheet · v0.1</p>
          <h1>Privileged Identity & Secure Cloud Assurance</h1>
          <p>
            A bounded specialist work package for organisations and delivery partners that need measurable Microsoft identity and secure-cloud outcomes, objective acceptance criteria and reusable technical evidence.
          </p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/contact/?area=Secure%20Cloud%20Access%20%26%20Privileged%20Identity&engagement=Partner%20delivery" className="button">Discuss a work package</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">From expertise to contractable outcome</p>
            <h2>Define what is delivered before discussing how many engineering hours it takes</h2>
          </div>
          <p>
            The capability is designed to be purchased directly by a regulated organisation or inserted into a larger integrator or prime-led programme. Scope remains deliberately narrow: identity, secure-cloud access and continuous technical assurance.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTable" role="table" aria-label="Procurement capability sheet">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">Capability field</div>
              <div role="columnheader">Definition</div>
              <div role="columnheader">Buyer value</div>
              <div role="columnheader">Acceptance relevance</div>
              <div role="columnheader">Reuse</div>
            </div>
            {rows.map(([label, value]) => (
              <div className="assuranceTableRow" role="row" key={label}>
                <div className="assuranceStage" role="cell"><strong>{label}</strong></div>
                <div role="cell" data-label="Definition">{value}</div>
                <div role="cell" data-label="Buyer value">Reduces ambiguity between security intent, technical delivery and evidence.</div>
                <div role="cell" data-label="Acceptance relevance">Can be linked to measurable deliverables and buyer-approved thresholds.</div>
                <div role="cell" data-label="Reuse">Designed to reuse Enki architecture, controls, evidence and automation across engagements.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Opportunity filter</p>
            <h2>What Enki should pursue</h2>
            <div className="listPanel wide">
              <div className="principle">Identity, secure cloud or continuous assurance is at least 70% of the requirement</div>
              <div className="principle">The work package has objective deliverables and can be accepted through evidence</div>
              <div className="principle">Delivery can be bounded without creating an unmanaged 24/7 operations obligation</div>
              <div className="principle">Security, procurement and eligibility barriers are known before bid investment</div>
              <div className="principle">Existing Enki IP materially reduces delivery effort or risk</div>
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">What Enki should reject</p>
            <h2>Do not chase procurement volume for its own sake</h2>
            <div className="listPanel">
              <div className="principle">Generic hardware or infrastructure supply with little identity/security content</div>
              <div className="principle">Opportunities requiring unsupported accreditation, clearance or legal eligibility</div>
              <div className="principle">Work that depends primarily on staffing volume rather than a specialist capability</div>
              <div className="principle">Procurements that require speculative hiring or tooling before qualification</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Next buyer step</p>
            <h2>Turn the sheet into a specific Statement of Work</h2>
          </div>
          <div>
            <p>For an active requirement, the next step is to agree the in-scope tenant/resources, acceptance criteria, dependencies, delivery interfaces, change authority and evidence package.</p>
            <div className="heroActions">
              <Link href="/resources/privileged-identity-assurance-acceptance-specification/" className="button">View acceptance specification</Link>
              <Link href="/partners/" className="button buttonGhost dark">Partner delivery</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
