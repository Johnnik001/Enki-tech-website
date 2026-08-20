import Link from 'next/link';
import { PrintButton } from '../../../components/PrintButton';

export const metadata = {
  title: 'High-Assurance Cloud Access Reference Architecture',
  description:
    'A practical reference pattern mapping threats, preventive controls, detective controls and evidence across a privileged Microsoft Cloud access path.',
  alternates: { canonical: '/resources/high-assurance-cloud-access-architecture/' },
  openGraph: {
    title: 'High-Assurance Cloud Access Reference Architecture | Enki Tech',
    description:
      'Trace privileged access from identity and managed device to workload, sensitive data, logging and assurance evidence.',
    url: '/resources/high-assurance-cloud-access-architecture/',
    type: 'website'
  }
};

const stages = [
  {
    number: '01',
    title: 'Privileged identity',
    threat: 'Shared, stale or weakly governed administrative identity.',
    preventive: 'Named admin accounts, role separation and lifecycle ownership.',
    detective: 'Inactive-account and privileged-assignment review.',
    evidence: 'Identity inventory, role owner and last-use report.'
  },
  {
    number: '02',
    title: 'Managed device',
    threat: 'Privileged access from an unmanaged or compromised endpoint.',
    preventive: 'Compliant device requirement and privileged workstation pattern.',
    detective: 'Device compliance, risk and sign-in correlation.',
    evidence: 'Compliance state, device record and access test.'
  },
  {
    number: '03',
    title: 'Strong authentication',
    threat: 'Credential theft, phishing or authentication downgrade.',
    preventive: 'Phishing-resistant MFA and authentication-strength policy.',
    detective: 'Risky sign-in and authentication-method monitoring.',
    evidence: 'Method registration, policy result and sign-in logs.'
  },
  {
    number: '04',
    title: 'Conditional Access',
    threat: 'Bypass through exclusions, legacy protocols or policy gaps.',
    preventive: 'Scoped deny-by-default controls with governed exceptions.',
    detective: 'Policy coverage, exclusion and report-only review.',
    evidence: 'Policy map, exception register and tested scenarios.'
  },
  {
    number: '05',
    title: 'JIT / PIM',
    threat: 'Permanent, excessive or unapproved privilege.',
    preventive: 'Eligible roles, time-bound activation and approval where needed.',
    detective: 'Standing-role scan and unusual activation review.',
    evidence: 'Assignment report, activation history and approval record.'
  },
  {
    number: '06',
    title: 'Workload boundary',
    threat: 'Over-privileged service principals or unmanaged application access.',
    preventive: 'Least-privilege application permissions and managed identities.',
    detective: 'Permission drift, credential expiry and anomalous-use review.',
    evidence: 'Workload inventory, permission graph and named owner.'
  },
  {
    number: '07',
    title: 'Sensitive data',
    threat: 'Unauthorised access, extraction or misuse of critical information.',
    preventive: 'Resource-level RBAC, segmentation and data-protection controls.',
    detective: 'Access analytics, alerting and data-activity review.',
    evidence: 'Access list, protection policy and activity record.'
  },
  {
    number: '08',
    title: 'Logging & detection',
    threat: 'A control fails without timely visibility or investigation context.',
    preventive: 'Required telemetry, retention and protected log destinations.',
    detective: 'Use-case validation, alert review and ingestion monitoring.',
    evidence: 'Coverage map, test event, alert and investigation trail.'
  },
  {
    number: '09',
    title: 'Assurance evidence',
    threat: 'Controls exist in design but cannot be proven or maintained.',
    preventive: 'Named control owner, validation cadence and acceptance criteria.',
    detective: 'Failed-check, exception, drift and overdue-action review.',
    evidence: 'Control status, exception decision and remediation backlog.'
  }
];

const assurancePrinciples = [
  ['Trace the complete path', 'Start with a critical resource and follow every human and workload route that can reach it.'],
  ['Test control effectiveness', 'Record how each preventive and detective control is validated—not only how it is intended to work.'],
  ['Keep evidence operational', 'Give every failed check, exception and remediation action an owner, decision and review date.']
];

export default function HighAssuranceArchitecturePage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Reference architecture · v0.1</p>
          <h1>High-Assurance Cloud Access</h1>
          <p>Map a privileged access path from identity and managed device to workload, sensitive data, logging and evidence—then show how each control is prevented, detected and proven.</p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/contact/?area=Secure%20Cloud%20Access%20%26%20Privileged%20Identity&engagement=Assessment%20or%20audit" className="button">Assess your access path</Link>
          </div>
        </div>
      </section>

      <section className="assurancePathBand" aria-label="High-assurance cloud access path">
        <div className="container">
          <ol className="assurancePath">
            {stages.map((stage) => (
              <li key={stage.number}><span>{stage.number}</span><strong>{stage.title}</strong></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceIntroGrid">
            <div>
              <p className="eyebrow">Assurance objective</p>
              <h2>Prove that the control exists, works and remains governed</h2>
            </div>
            <p>This is a reusable discussion and assessment pattern for Microsoft Cloud environments. It helps technical teams, assurance stakeholders and delivery partners agree what should prevent a failure, what should detect it and which evidence supports the conclusion.</p>
          </div>

          <div className="assurancePrincipleGrid">
            {assurancePrinciples.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Control model</p>
              <h2>Threat → preventive control → detective control → evidence</h2>
            </div>
            <p>Tailor the pattern to the actual resource, identity model, risk tolerance and evidence sources. Each row should ultimately have a named owner and validation cadence.</p>
          </div>

          <div className="assuranceTable" role="table" aria-label="High-assurance cloud access controls">
            <div className="assuranceTableRow assuranceTableLabels" role="row">
              <div role="columnheader">Access stage</div>
              <div role="columnheader">Threat</div>
              <div role="columnheader">Preventive control</div>
              <div role="columnheader">Detective control</div>
              <div role="columnheader">Evidence</div>
            </div>
            {stages.map((stage) => (
              <div className="assuranceTableRow" role="row" key={stage.number}>
                <div className="assuranceStage" role="cell"><span>{stage.number}</span><strong>{stage.title}</strong></div>
                <div role="cell" data-label="Threat">{stage.threat}</div>
                <div role="cell" data-label="Preventive control">{stage.preventive}</div>
                <div role="cell" data-label="Detective control">{stage.detective}</div>
                <div role="cell" data-label="Evidence">{stage.evidence}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Important boundary</p>
            <h2>A reference pattern is not certification or accreditation</h2>
          </div>
          <div>
            <p>This architecture does not claim compliance with a specific defence, classified, national or sector framework. Real assurance requires environment-specific scope, evidence, threat context and validation by the responsible authority.</p>
            <p>Enki Tech can apply the pattern as a secure-cloud assessment or as a specialist work package inside a partner-led engagement.</p>
            <div className="heroActions">
              <Link href="/services/secure-cloud-access-privileged-identity/" className="button">Explore the assessment</Link>
              <Link href="/partners/" className="button buttonGhost dark">Partner delivery</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
