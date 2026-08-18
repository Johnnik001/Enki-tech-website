import Link from 'next/link';
import { PrintButton } from '../../../components/PrintButton';

export const metadata = {
  title: 'Secure Cloud Control Matrix',
  description:
    'Twenty practical questions for reviewing Microsoft Cloud access, privileged identity, workloads, evidence and continuous security governance.',
  alternates: { canonical: '/resources/secure-cloud-control-matrix/' }
};

const groups = [
  {
    title: 'Identity & authentication',
    outcome: 'Know which identities can begin a path to critical resources and under which conditions.',
    questions: [
      ['Which human, guest and emergency identities can reach each critical resource?', 'Named identity inventory linked to resource ownership'],
      ['Is phishing-resistant authentication required for privileged and high-risk access?', 'Authentication method policy and sign-in evidence'],
      ['Do Conditional Access policies cover every relevant access path without unmanaged exclusions?', 'Policy map, exclusions and tested scenarios'],
      ['Are legacy authentication and unmanaged access paths blocked or explicitly risk-accepted?', 'Protocol settings, exceptions and owner approval'],
      ['Can the team explain how device trust affects access to sensitive workloads and data?', 'Compliance policy, device state and access test']
    ]
  },
  {
    title: 'Privileged access',
    outcome: 'Reduce standing privilege and make elevation deliberate, time-bound and reviewable.',
    questions: [
      ['Which privileged roles are permanent, eligible, unused or assigned outside the expected process?', 'Role export, PIM status and last-used evidence'],
      ['Does privilege activation require justification, approval and strong authentication where appropriate?', 'PIM configuration and activation history'],
      ['Are administrative duties separated from everyday user accounts and endpoints?', 'Admin account model and privileged workstation controls'],
      ['Are emergency access accounts protected, monitored and tested without weakening normal controls?', 'Break-glass procedure and last test evidence'],
      ['Who reviews privileged access, how often and what happens when ownership is unclear?', 'Review schedule, decisions and removal record']
    ]
  },
  {
    title: 'Workloads & data',
    outcome: 'Make non-human access and data dependencies visible before they become hidden risk.',
    questions: [
      ['Which service principals, managed identities and applications can reach critical resources?', 'Workload identity inventory and permission graph'],
      ['Does every high-impact application permission have a business and technical owner?', 'Owner register and consent rationale'],
      ['Are secrets, certificates and keys inventoried with expiry and rotation responsibilities?', 'Key and certificate inventory with lifecycle data'],
      ['Can cryptographic dependencies be replaced without redesigning the dependent service?', 'Crypto-agility assessment and dependency map'],
      ['Are critical data paths logged well enough to investigate misuse or control failure?', 'Logging coverage, retention and test query']
    ]
  },
  {
    title: 'Evidence & continuous governance',
    outcome: 'Keep controls effective as configuration, people and operational exceptions change.',
    questions: [
      ['Which controls are material enough to validate every month or quarter?', 'Approved control baseline and validation cadence'],
      ['Can each control produce evidence without a manual reconstruction exercise?', 'Repeatable query, report or validation procedure'],
      ['Who owns failed checks, exceptions and remediation deadlines?', 'Named owner, due date and escalation path'],
      ['How is drift from the approved baseline detected and risk-ranked?', 'Configuration comparison and risk criteria'],
      ['Can management see control status, open risk and remediation progress in one concise view?', 'Current evidence pack and prioritized backlog']
    ]
  }
];

export default function ControlMatrixPage() {
  let questionNumber = 0;

  return (
    <>
      <section className="pageHero resourcePageHero">
        <div className="container narrow">
          <p className="eyebrow">Practical resource</p>
          <h1>Secure Cloud Control Matrix</h1>
          <p>Twenty questions to expose gaps in access, privileged identity, workload trust and recurring control evidence across a Microsoft Cloud environment.</p>
          <div className="heroActions resourceActions">
            <PrintButton />
            <Link href="/contact/?area=Secure%20Cloud%20Access%20%26%20Privileged%20Identity&engagement=Assessment%20or%20audit" className="button">Request an independent assessment</Link>
          </div>
        </div>
      </section>

      <section className="section resourceMatrixSection">
        <div className="container">
          <div className="resourceIntroPanel">
            <div><span>How to use it</span><strong>Answer each question with evidence—not intent.</strong></div>
            <div><span>Record</span><strong>Risk · control · test · evidence · owner · action.</strong></div>
            <div><span>Prioritize</span><strong>Start with access to the resources that matter most.</strong></div>
          </div>

          <div className="matrixGroupGrid">
            {groups.map((group) => (
              <section className="matrixGroup" key={group.title}>
                <header>
                  <p className="eyebrow">Control domain</p>
                  <h2>{group.title}</h2>
                  <p>{group.outcome}</p>
                </header>
                <ol>
                  {group.questions.map(([question, evidence]) => {
                    questionNumber += 1;
                    return (
                      <li className="matrixQuestion" key={question}>
                        <span className="matrixQuestionNumber">{String(questionNumber).padStart(2, '0')}</span>
                        <div>
                          <h3>{question}</h3>
                          <p className="matrixEvidence"><strong>Evidence example:</strong> {evidence}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>

          <div className="matrixNextStep">
            <div>
              <p className="eyebrow">Next step</p>
              <h2>Several uncertain answers usually indicate an evidence or ownership gap</h2>
              <p>Enki Tech can turn the matrix into a scoped trust-path assessment, prioritized remediation plan and repeatable governance baseline.</p>
            </div>
            <Link href="/services/secure-cloud-access-privileged-identity/" className="button">Explore the assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
