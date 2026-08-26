import Link from 'next/link';

export const metadata = {
  title: 'Standing Privileged Access in Microsoft Entra ID: Detection, Exceptions & Evidence',
  description:
    'How to detect, classify and evidence standing privileged access in Microsoft Entra ID, including PIM eligibility, emergency accounts, exceptions and verified remediation.',
  alternates: { canonical: '/insights/standing-privileged-access-microsoft-entra-id/' },
  openGraph: {
    title: 'Standing Privileged Access in Microsoft Entra ID | Enki Tech',
    description:
      'A practical assurance workflow for permanent privileged role assignments, PIM, exceptions, remediation and evidence.',
    url: '/insights/standing-privileged-access-microsoft-entra-id/',
    type: 'article'
  }
};

const workflow = [
  ['Discover', 'Inventory active and eligible privileged role assignments in the agreed Entra scope.'],
  ['Evaluate', 'Separate standing human privilege from JIT/PIM eligibility, emergency access and legitimate temporary exceptions.'],
  ['Approve', 'Require an accountable decision before changing privileged access.'],
  ['Remediate', 'Remove unnecessary access, reduce privilege or move appropriate assignments to controlled eligibility/JIT.'],
  ['Verify', 'Re-collect the configuration and confirm that the intended state actually changed.'],
  ['Evidence', 'Link the control result to timestamped source data, exception records and change evidence.']
];

export default function StandingPrivilegedAccessPage() {
  return (
    <article>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Identity assurance · IAM-001</p>
          <h1>Standing privileged access in Microsoft Entra ID: detect it, classify it and prove the result</h1>
          <p>
            Permanent privileged access is easy to find and easy to oversimplify. A useful enterprise control must distinguish unnecessary standing privilege from PIM eligibility, emergency access and approved exceptions—and it must prove what happened after remediation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Why a list of Global Administrators is not enough</h2>
          <p>
            A role export answers who has privilege now. It does not answer whether the privilege is appropriate, whether it should be eligible instead of permanently active, whether the account is a controlled emergency identity, whether an exception is still valid or whether a previous remediation actually stayed in place.
          </p>
          <p>
            The assurance problem is therefore broader than inventory. The control needs classification, ownership, exception handling, change approval, verification and evidence.
          </p>

          <h2>A production-oriented control workflow</h2>
          <div className="listPanel wide">
            {workflow.map(([title, text]) => (
              <div className="principle" key={title}><strong>{title}</strong> — {text}</div>
            ))}
          </div>

          <h2>What should be classified</h2>
          <p>An IAM-001-style review should at minimum distinguish:</p>
          <ul>
            <li><strong>Permanent active human privilege</strong> — usually the primary review population.</li>
            <li><strong>PIM eligible privilege</strong> — not standing access, but still subject to separate activation-quality controls.</li>
            <li><strong>Emergency access accounts</strong> — legitimate permanent privilege may exist when the account is explicitly designated, monitored and periodically tested.</li>
            <li><strong>Approved temporary exceptions</strong> — must have an owner, rationale, compensating controls and review/expiry date.</li>
            <li><strong>Workload identities</strong> — should be evaluated separately from human privileged access because remediation patterns differ.</li>
          </ul>

          <h2>PASS/FAIL alone creates false confidence</h2>
          <p>
            Enterprise assurance needs at least four practical states: PASS, FAIL, REVIEW and EXEMPTED. A permanent administrator without an approved rationale may be a FAIL. A current emergency-access identity may be EXEMPTED. A recent PIM activation may require REVIEW under a different control rather than failing the standing-access control.
          </p>

          <h2>Remediation must be supervised</h2>
          <p>
            Automatically removing or converting privileged access can create an outage or lock out the organisation. Before remediation, validate emergency access, dependencies, last-admin conditions, authentication readiness and the client change process. The change plan should state the intended target state and the rollback path before execution.
          </p>

          <h2>The evidence package is part of the product</h2>
          <p>
            A completed control should link the conclusion to retrievable evidence: privileged role inventory, eligibility state, exception or emergency-access record, approved change, post-change collection and collection timestamps. Where useful, an integrity manifest can make the evidence bundle easier to trace and reproduce.
          </p>

          <h2>From one-time review to continuous assurance</h2>
          <p>
            The recurring value appears when the same control is re-run against the approved baseline. New standing privilege, expired exceptions and unexpected changes become drift that can be assigned, remediated and re-verified rather than rediscovered during the next audit.
          </p>

          <div className="heroActions">
            <Link href="/resources/privileged-identity-assurance-acceptance-specification/" className="button">View acceptance specification</Link>
            <Link href="/services/secure-cloud-access-privileged-identity/" className="button buttonGhost dark">Explore the assessment</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
