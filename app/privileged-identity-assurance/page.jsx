import Link from 'next/link';
import { CTA } from '../../components/CTA';

export const metadata = {
  title: 'Continuous Privileged Identity Assurance',
  description:
    'Assess, remediate and continuously evidence privileged access across Microsoft Entra ID with measurable acceptance criteria and repeatable control validation.',
  alternates: { canonical: '/privileged-identity-assurance/' },
  openGraph: {
    title: 'Continuous Privileged Identity Assurance | Enki Tech',
    description:
      'A three-stage commercial capability: assess privileged-access risk, remediate to agreed acceptance criteria and continuously detect drift with audit-ready evidence.',
    url: '/privileged-identity-assurance/',
    type: 'website'
  }
};

const stages = [
  {
    number: '01',
    tag: 'Assessment',
    title: 'Discover and classify privileged-access risk',
    text: 'Build an evidence-backed baseline across privileged roles, standing access, PIM/JIT, authentication strength, emergency access, guests, workload identities and exceptions.',
    output: 'Baseline · classified findings · exception register · remediation backlog'
  },
  {
    number: '02',
    tag: 'Remediation',
    title: 'Bring controls to agreed acceptance criteria',
    text: 'Remove, reduce or time-bound privilege; improve PIM, authentication and access controls; document approved exceptions; then re-test the changed state.',
    output: 'Change plan · controlled remediation · re-test · before/after evidence'
  },
  {
    number: '03',
    tag: 'Continuous Assurance',
    title: 'Detect drift and keep the evidence current',
    text: 'Repeat the agreed tests on a defined cadence, identify failed checks and expired exceptions, maintain an owned backlog and provide current evidence for management and assurance stakeholders.',
    output: 'Drift review · exception governance · monthly evidence · remediation tracking'
  }
];

const acceptance = [
  'Privileged roles inventoried',
  'Standing privilege classified',
  'PIM / JIT coverage measured',
  'Privileged authentication strength tested',
  'Emergency access validated',
  'Stale privileged identities identified',
  'Privileged workload identities reviewed',
  'Privileged guest access governed',
  'Exceptions documented and time-bounded',
  'Evidence freshness and traceability verified'
];

const buyers = [
  ['IAM / Identity Operations', 'Reduce standing privilege and keep privileged-access state explainable over time.'],
  ['Security Engineering / SecOps', 'Turn identity-control drift into owned remediation rather than periodic audit findings.'],
  ['Compliance / Internal Audit', 'Receive current, retrievable evidence without recreating it manually for each review.'],
  ['MSPs / Integrators / Primes', 'Add a bounded specialist work package with measurable acceptance criteria and reusable evidence outputs.']
];

export default function PrivilegedIdentityAssurancePage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Privileged Identity · Microsoft Entra ID · Continuous Assurance</p>
          <h1>Prove privileged access stays secure—even as the environment changes.</h1>
          <p>
            Enki Tech packages privileged identity security as one measurable commercial capability: assess the current state, remediate material gaps and continuously prove that agreed controls remain effective.
          </p>
          <div className="heroActions">
            <Link href="/contact/?area=Privileged%20Identity%20Assurance&engagement=Assessment%20or%20audit" className="button">Discuss an assurance assessment</Link>
            <Link href="/resources/privileged-identity-assurance-acceptance-specification/" className="button buttonGhost">View acceptance specification</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceIntroGrid">
            <div>
              <p className="eyebrow">Commercial ladder</p>
              <h2>Assessment → Remediation → Continuous Assurance</h2>
            </div>
            <p>
              Each stage has a different buying decision, but all three use the same control model, evidence structure and acceptance logic. This makes the capability easier to buy, repeat and hand off than open-ended identity consulting.
            </p>
          </div>

          <div className="cardsGrid three">
            {stages.map((stage) => (
              <article className="card serviceCard" key={stage.number}>
                <p className="tag">{stage.number} · {stage.tag}</p>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <div className="commercialOfferResult"><span>Output</span>{stage.output}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Acceptance model</p>
            <h2>Ten tests that make the outcome objectively reviewable</h2>
            <p>
              The exact thresholds are agreed with the client. The important design principle is that every test has a threshold, evidence source and remediation path.
            </p>
            <div className="listPanel wide">
              {acceptance.map((item, index) => <div className="principle" key={item}>{String(index + 1).padStart(2, '0')} · {item}</div>)}
            </div>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Delivery principle</p>
            <h2>Configured is not the same as assured</h2>
            <p>
              The capability follows one repeatable path: discover → evaluate → approve → remediate → verify → evidence. Exceptions and emergency access remain explicit, owned and reviewable rather than being hidden as false positives.
            </p>
            <div className="heroActions">
              <Link href="/insights/standing-privileged-access-entra-id/" className="button">See IAM-001 example</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">Who can fund it</p>
              <h2>One capability can sit under different existing budget owners</h2>
            </div>
            <p>The buyer depends on whether the immediate problem is operational identity risk, security engineering capacity, audit evidence or partner delivery.</p>
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
            <p className="eyebrow">Commercial boundary</p>
            <h2>Price follows scope and accepted outcome—not an hourly rate card</h2>
          </div>
          <div>
            <p>
              Enki Tech uses a defined-scope model for assessment and remediation, then a recurring model for continuous assurance. Public pricing is intentionally not fixed before the in-scope tenant, control thresholds, delivery dependencies and evidence requirements are agreed.
            </p>
            <p>
              For partner or procurement-led delivery, the same capability can be expressed as a bounded work package with deliverables, dependencies and acceptance criteria.
            </p>
            <div className="heroActions">
              <Link href="/resources/procurement-capability-sheet/" className="button">View procurement capability</Link>
              <Link href="/partners/" className="button buttonGhost dark">Partner delivery</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Start with measurable privileged-access risk"
        title="Need to know whether privileged access is controlled—and prove the result?"
        text="Share the tenant scope, current concern and evidence requirement. Enki Tech will identify whether the right first step is assessment, remediation or recurring assurance."
        buttonLabel="Discuss Privileged Identity Assurance"
      />
    </>
  );
}
