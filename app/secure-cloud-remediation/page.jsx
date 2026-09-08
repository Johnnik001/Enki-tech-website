import Link from 'next/link';
import { CTA } from '../../components/CTA';

export const metadata = {
  title: 'Secure Cloud Remediation Sprint',
  description:
    'A fixed-scope Microsoft Cloud security remediation engagement for Entra ID, Azure, Microsoft 365, Intune and Defender findings, with agreed acceptance criteria, technical verification and closure evidence.',
  alternates: { canonical: '/secure-cloud-remediation/' },
  openGraph: {
    title: 'Secure Cloud Remediation Sprint | Enki Tech',
    description:
      'Turn a bounded Microsoft Cloud or identity security backlog into implemented fixes, technical verification and defensible closure evidence.',
    url: '/secure-cloud-remediation/',
    type: 'website'
  }
};

const deliverables = [
  'Prioritized remediation scope linked to the selected findings and business context',
  'Agreed acceptance criteria for each in-scope remediation item',
  'Hands-on implementation across the relevant Microsoft Cloud controls',
  'Technical verification of the remediated state after implementation',
  'Before-and-after evidence package for the completed work',
  'Exception and residual-risk register for items that cannot be fully closed',
  'Handover notes and a clear follow-on backlog where further work is justified'
];

const workflow = [
  ['01', 'Triage the backlog', 'Confirm the source findings, affected services, urgency, dependencies and which items belong inside the sprint.'],
  ['02', 'Define closure', 'Agree what successful remediation means for each item, including the validation method and evidence required.'],
  ['03', 'Implement the change', 'Execute the agreed remediation through the client change process across the relevant Microsoft Cloud services.'],
  ['04', 'Verify the result', 'Test the post-change state against the agreed acceptance criteria and record any remaining constraint or exception.'],
  ['05', 'Prove and hand over', 'Package the implementation and verification evidence, close completed items and hand over any residual backlog.']
];

const technicalExamples = [
  ['Entra ID & PIM', 'Standing privileged access, excessive role assignment, weak elevation paths, stale privileged identities and governance gaps.'],
  ['Conditional Access', 'Policy coverage gaps, risky exclusions, legacy authentication exposure and control conflicts that need a safer target state.'],
  ['Intune & Defender', 'Endpoint compliance, security baselines, device-control gaps and selected Defender recommendations that require implementation.'],
  ['Azure', 'RBAC exposure, management-plane permissions, configuration weaknesses and control gaps in the agreed subscription or resource scope.'],
  ['Microsoft 365', 'Security-relevant Exchange, Teams, SharePoint or tenant configuration findings that have a clear technical remediation path.'],
  ['Operational evidence', 'Findings that stay open because implementation ownership, validation or closure evidence is incomplete.']
];

const fit = [
  'A security assessment, audit, penetration-test follow-up or internal review has produced a defined Microsoft Cloud backlog',
  'The client has findings but lacks senior Microsoft capacity to move them through controlled implementation',
  'Security and platform teams need a shared definition of what “closed” means for each remediation item',
  'A consultancy, MSSP or integrator needs a specialist Microsoft remediation work package inside a wider client engagement'
];

const boundaries = [
  'The sprint is not a penetration test, formal certification or legal compliance opinion',
  'Scope must be bounded; it is not an unlimited remediation retainer',
  'Client approvals, access, change windows and application-owner decisions remain client responsibilities unless explicitly included',
  '24/7 monitoring, SOC coverage and guaranteed incident-response SLAs are outside the standard sprint'
];

export default function SecureCloudRemediationPage() {
  return (
    <>
      <section className="pageHero assuranceHero">
        <div className="container narrow">
          <p className="eyebrow">Fixed-scope remediation · Microsoft Cloud · Verification & evidence</p>
          <h1>Close the security findings that are still open because implementation is the bottleneck.</h1>
          <p>
            Enki Tech takes a bounded Microsoft Cloud, identity or endpoint security backlog and moves the selected findings through controlled implementation, technical verification and evidence-backed closure.
          </p>
          <div className="heroActions">
            <Link href="/contact/?area=Secure%20Cloud%20Remediation&engagement=Direct%20project" className="button">Discuss a remediation backlog</Link>
            <Link href="/resources/secure-cloud-remediation-checklist/" className="button buttonGhost">Use the 12-point checklist</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceIntroGrid">
          <div>
            <p className="eyebrow">The buying problem</p>
            <h2>The finding is known. The expensive part is getting it safely closed.</h2>
          </div>
          <p>
            Security tools and audits can identify risk quickly, but remediation often stalls between Security, Infrastructure, Workplace, application owners and change management. The sprint creates one owned path from selected finding to implemented change, validation and closure evidence.
          </p>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="assuranceTableHeader">
            <div>
              <p className="eyebrow">What the client receives</p>
              <h2>A defined remediation outcome—not another assessment report.</h2>
            </div>
            <p>The exact scope is agreed before delivery so effort is concentrated on findings that can be materially reduced inside the engagement.</p>
          </div>
          <div className="cardsGrid two">
            {deliverables.map((item, index) => (
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
              <p className="eyebrow">Delivery path</p>
              <h2>Finding → acceptance criteria → implementation → verification → evidence</h2>
            </div>
            <p>Every in-scope item needs a clear closure condition before implementation starts.</p>
          </div>
          <div className="cardsGrid two">
            {workflow.map(([number, title, text]) => (
              <article className="card" key={number}>
                <p className="tag">{number}</p>
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
              <p className="eyebrow">Typical technical scope</p>
              <h2>Focused on Microsoft Cloud controls where senior implementation capacity matters.</h2>
            </div>
            <p>Not every area is included in every sprint. The engagement is intentionally bounded around the selected backlog.</p>
          </div>
          <div className="cardsGrid two">
            {technicalExamples.map(([title, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Commercial format</p>
            <h2>Bounded scope, explicit dependencies and a measurable closure condition.</h2>
            <p>
              The sprint is quoted after a short backlog triage. Delivery timing depends on scope, access, approval and change-window constraints; urgent work can be prioritized where the client can support the required decisions and access.
            </p>
          </div>
          <div className="quoteCard">
            <p className="eyebrow">Acceptance principle</p>
            <h2>A ticket is not closed because a change was attempted.</h2>
            <p>
              Closure requires the agreed change to be implemented, the resulting state to be technically verified, and the evidence or documented exception to be available for review.
            </p>
            <div className="heroActions">
              <Link href="/contact/?area=Secure%20Cloud%20Remediation&engagement=Direct%20project" className="button">Scope the sprint</Link>
              <Link href="/services/continuous-secure-cloud-governance/" className="button buttonGhost dark">See recurring assurance</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Best fit</p>
            <h2>For teams with a real backlog and a real implementation constraint.</h2>
          </div>
          <div className="listPanel wide">
            {fit.map((item) => <div className="principle" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assuranceBoundary">
          <div>
            <p className="eyebrow">Boundaries</p>
            <h2>Keep the offer credible by being explicit about what it is not.</h2>
          </div>
          <div className="listPanel wide">
            {boundaries.map((item) => <div className="principle" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Move the backlog"
        title="Which Microsoft Cloud security findings need to be moved from open to verifiably closed?"
        text="Share the source of the findings, the affected Microsoft services, the approximate backlog size and any fixed deadline. Enki Tech will confirm whether a bounded remediation sprint is the right delivery model."
        buttonLabel="Discuss a remediation sprint"
        buttonHref="/contact/?area=Secure%20Cloud%20Remediation&engagement=Direct%20project"
      />
    </>
  );
}
