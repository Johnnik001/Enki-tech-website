import Link from 'next/link';

export const metadata = {
  title: 'CRA Reporting Starts 11 September 2026: What Manufacturers Should Test',
  description:
    'A practical technical-readiness view of CRA Article 14 reporting, the ENISA Single Reporting Platform, 24/72-hour workflows, access readiness and evidence handoffs.',
  alternates: { canonical: '/insights/cra-reporting-11-september-2026/' },
  openGraph: {
    title: 'CRA Reporting Starts 11 September 2026 | Enki Tech',
    description:
      'What manufacturers should test before the first CRA 24/72-hour reporting clock starts: awareness time, ownership, SRP access, evidence and remediation handoffs.',
    url: '/insights/cra-reporting-11-september-2026/',
    type: 'article'
  }
};

const checks = [
  ['Authoritative awareness time', 'Can the organisation preserve the exact time it became aware of an actively exploited vulnerability or severe incident, and the source that established credibility?'],
  ['24/72-hour ownership', 'Is there a primary owner, backup owner and escalation path for the early warning and follow-on notification workflow?'],
  ['SRP access readiness', 'Do the intended Assigned Representative users have working EU Login access with MFA, and is backup coverage understood before a real event?'],
  ['Product and evidence retrieval', 'Can product/version, impact, mitigation and supporting technical evidence be retrieved from named source systems quickly enough?'],
  ['Remediation and closure', 'Does reporting connect to owned corrective action, technical verification and a reproducible evidence package rather than ending at notification?']
];

export default function CRASeptember2026InsightPage() {
  return (
    <article>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">CRA operational readiness · 9 September 2026</p>
          <h1>CRA reporting starts on 11 September. The real test is whether the technical workflow works under a clock.</h1>
          <p>
            Article 14 of the Cyber Resilience Act applies from 11 September 2026. ENISA says the Single Reporting Platform is scheduled to become operational on the same date for mandatory manufacturer notifications. The immediate operational question is not whether the regulation has been read, but whether Product, Security, Engineering and Compliance can move from awareness to owned reporting data, submission access, remediation and evidence without avoidable delay.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>What changes on 11 September 2026</h2>
          <p>
            Under CRA Article 14, manufacturers must report actively exploited vulnerabilities and severe incidents affecting products with digital elements through the Single Reporting Platform. The regulation provides for an early warning without undue delay and in any event within 24 hours of awareness, followed by a fuller notification within 72 hours where the relevant information has not already been provided.
          </p>
          <p>
            ENISA&apos;s latest SRP FAQ, updated on 8 September 2026, states that the platform is scheduled to be operational from 11 September. ENISA&apos;s user-registration guidance also states that Assigned Representative users authenticate through EU Login and need MFA to access the platform.
          </p>

          <h2>Five things to test before the first real event</h2>
          <div className="listPanel wide">
            {checks.map(([title, text]) => (
              <div className="principle" key={title}><strong>{title}</strong> — {text}</div>
            ))}
          </div>

          <h2>The commercial implication is an execution gap, not another policy document</h2>
          <p>
            A policy, scanner, ticketing platform, SBOM and reporting portal do not automatically create a working response path. The expensive failure point is often between systems and teams: unclear ownership, slow evidence retrieval, fragile access, unresolved product mapping or remediation that cannot be verified afterwards.
          </p>
          <p>
            That is why Enki Tech treats CRA as a technical readiness and operational assurance problem. The entry point is a bounded dry run; follow-on work should focus on the actual bottlenecks found in the exercise, including evidence retrieval, Microsoft Cloud and identity controls, workflow automation and verified remediation.
          </p>

          <h2>Primary sources</h2>
          <ul>
            <li><a href="https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/frequently-asked-questions" target="_blank" rel="noreferrer">ENISA — CRA Single Reporting Platform FAQ</a></li>
            <li><a href="https://www.enisa.europa.eu/topics/product-security/single-reporting-platform-srp/cra-srp-guidance-ar-user-registration" target="_blank" rel="noreferrer">ENISA — Assigned Representative user registration guidance</a></li>
            <li><a href="https://eur-lex.europa.eu/eli/reg/2024/2847/2024-11-20/eng" target="_blank" rel="noreferrer">EUR-Lex — Regulation (EU) 2024/2847</a></li>
          </ul>

          <div className="heroActions">
            <Link href="/resources/cra-incident-dry-run-playbook/" className="button">Run the checklist</Link>
            <Link href="/cra-incident-readiness/" className="button buttonGhost dark">Explore the CRA readiness sprint</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
