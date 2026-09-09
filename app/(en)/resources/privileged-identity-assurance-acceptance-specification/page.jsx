import Link from 'next/link';
import { PrintButton } from '../../../../components/PrintButton';

export const metadata = {
  title: 'Privileged Identity Assurance Acceptance Specification',
  description:
    'Ten measurable acceptance outcomes for Microsoft Entra privileged identity assurance, including standing access, PIM, emergency accounts, authentication strength, drift and evidence.',
  alternates: { canonical: '/resources/privileged-identity-assurance-acceptance-specification/' },
  openGraph: {
    title: 'Privileged Identity Assurance Acceptance Specification | Enki Tech',
    description:
      'A procurement-ready acceptance model for measuring privileged identity security outcomes in Microsoft Entra ID.',
    url: '/resources/privileged-identity-assurance-acceptance-specification/',
    type: 'website'
  }
};

const criteria = [
  {
    id: 'A-01',
    outcome: 'Privileged roles are fully inventoried',
    measurement: 'Enumerate active and eligible privileged role assignments across the agreed Entra scope.',
    evidence: 'Timestamped role inventory, principal identifiers and role classification.',
    threshold: '100% of in-scope privileged role assignments represented in the evidence package.'
  },
  {
    id: 'A-02',
    outcome: 'Standing human privilege is classified',
    measurement: 'Classify every permanent active human privileged assignment as approved, exception-based or requiring remediation.',
    evidence: 'Standing-role report linked to owner, rationale and exception status.',
    threshold: '100% of standing human privileged assignments have a documented disposition.'
  },
  {
    id: 'A-03',
    outcome: 'PIM / JIT coverage is measured',
    measurement: 'Compare eligible/JIT-capable role assignments with permanent active assignments for in-scope privileged roles.',
    evidence: 'PIM eligibility report, activation configuration and coverage metric.',
    threshold: 'Coverage metric produced for all in-scope privileged roles; target value agreed per policy.'
  },
  {
    id: 'A-04',
    outcome: 'Emergency access is validated',
    measurement: 'Verify designated break-glass identities, role state, authentication path, monitoring and latest test status.',
    evidence: 'Emergency-access register, configuration evidence and validation record.',
    threshold: 'Every designated emergency account has an owner, documented purpose and current validation record.'
  },
  {
    id: 'A-05',
    outcome: 'Privileged authentication strength is tested',
    measurement: 'Evaluate authentication methods and policy coverage for privileged human identities.',
    evidence: 'Authentication-method inventory, Conditional Access coverage and test results.',
    threshold: '100% of in-scope privileged users evaluated against the agreed authentication-strength policy.'
  },
  {
    id: 'A-06',
    outcome: 'Conditional Access exclusions are governed',
    measurement: 'Identify privileged identities excluded from relevant Conditional Access controls and validate each exclusion.',
    evidence: 'Policy map, exclusion list, owner and approved exception reference.',
    threshold: '100% of privileged exclusions are either approved and time-bounded or raised for remediation.'
  },
  {
    id: 'A-07',
    outcome: 'Privileged workload identities are visible',
    measurement: 'Identify service principals, managed identities or applications with material privileged access in scope.',
    evidence: 'Workload identity inventory, owners, credentials and permission summary.',
    threshold: '100% of identified privileged workload identities have a named owner or are raised as findings.'
  },
  {
    id: 'A-08',
    outcome: 'Exceptions are controlled',
    measurement: 'Review security exceptions for owner, rationale, compensating control, approval and expiry.',
    evidence: 'Exception register and approval trail.',
    threshold: 'No in-scope exception remains without owner, rationale, approval state and review/expiry date.'
  },
  {
    id: 'A-09',
    outcome: 'Drift is detected and owned',
    measurement: 'Repeat agreed control checks and compare current state with the approved baseline.',
    evidence: 'Drift report, failed checks and assigned remediation backlog.',
    threshold: 'All detected material drift is assigned a status, owner and next action within the agreed review cycle.'
  },
  {
    id: 'A-10',
    outcome: 'Evidence is generated and traceable',
    measurement: 'Generate an evidence bundle linking control result, source data, timestamp and integrity record.',
    evidence: 'Control-to-evidence matrix, raw exports, summary results and SHA-256 manifest where applicable.',
    threshold: 'Every reported control result is linked to retrievable evidence and an identifiable collection time.'
  }
];

export default function PrivilegedIdentityAcceptanceSpecificationPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Procurement-ready resource · v1.0</p>
          <h1>Privileged Identity Assurance Acceptance Specification</h1>
          <p>
            Define a security capability by measurable outcomes, evidence and acceptance thresholds—not by a list of technologies. This reference specification turns privileged identity assurance into a work package a buyer can objectively accept.
          </p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/contact/?area=Secure%20Cloud%20Access%20%26%20Privileged%20Identity&engagement=Assessment%20or%20audit" className="button">Discuss an assurance pilot</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">Acceptance model</p>
            <h2>Outcome → measurement → evidence → threshold</h2>
          </div>
          <div>
            <p>Each criterion is designed to support a bounded Microsoft Entra identity-assurance engagement. Thresholds must still be aligned to the client policy, risk tolerance and procurement context.</p>
            <p>This page is a reference specification, not a certification, accreditation or claim that a specific environment is compliant.</p>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTable" role="table" aria-label="Privileged Identity Assurance acceptance criteria">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">ID / outcome</div>
              <div role="columnheader">Measurement</div>
              <div role="columnheader">Evidence</div>
              <div role="columnheader">Acceptance threshold</div>
              <div role="columnheader">Purpose</div>
            </div>
            {criteria.map((item) => (
              <div className="assuranceTableRow" role="row" key={item.id}>
                <div className="assuranceStage" role="cell"><span>{item.id}</span><strong>{item.outcome}</strong></div>
                <div role="cell" data-label="Measurement">{item.measurement}</div>
                <div role="cell" data-label="Evidence">{item.evidence}</div>
                <div role="cell" data-label="Acceptance threshold">{item.threshold}</div>
                <div role="cell" data-label="Purpose">Make delivery objectively testable and suitable for assessment, remediation and recurring assurance.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Commercial use</p>
            <h2>One capability, three buying steps</h2>
          </div>
          <div>
            <p><strong>Assessment:</strong> establish the baseline and produce evidence-backed findings.</p>
            <p><strong>Remediation:</strong> convert approved findings into controlled changes with verification and rollback planning.</p>
            <p><strong>Continuous assurance:</strong> repeat the material checks, detect drift and maintain current evidence.</p>
            <div className="heroActions">
              <Link href="/services/secure-cloud-access-privileged-identity/" className="button">Explore the assessment</Link>
              <Link href="/services/continuous-secure-cloud-governance/" className="button buttonGhost dark">Explore recurring assurance</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
