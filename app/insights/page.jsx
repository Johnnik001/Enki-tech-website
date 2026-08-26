import Link from 'next/link';
import { CTA } from '../../components/CTA';
import { insights } from '../../data/site';

export const metadata = {
  title: 'Secure Cloud Insights',
  description:
    'Practical analysis of secure Microsoft Cloud access, continuous governance, privileged identity and procurement-readiness for European IT leaders and delivery partners.',
  alternates: { canonical: '/insights/' }
};

const featuredItems = [
  {
    slug: 'standing-privileged-access-microsoft-entra-id',
    label: 'Privileged identity',
    displayDate: '26 August 2026',
    title: 'Standing privileged access in Microsoft Entra ID: detect it, classify it and prove the result',
    intro:
      'A production-oriented IAM control must separate unnecessary permanent privilege from PIM eligibility, emergency access and legitimate exceptions—and verify what changed after remediation.'
  },
  {
    slug: 'ncia-simplified-procurement-specialist-capabilities',
    label: 'Procurement readiness',
    displayDate: '26 August 2026',
    title: 'NCIA simplified procurement creates a more accessible route for specialist capabilities',
    intro:
      'Neo eProcurement and the simplified-procurement range create a practical middle step between individual consulting and very large institutional programmes—but only for suppliers that package a narrow capability with measurable acceptance criteria.'
  }
];

export default function InsightsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Insights</p>
          <h1>Turn security, procurement and infrastructure signals into practical cloud decisions</h1>
          <p>Concise analysis for IT leaders and delivery partners who need to translate changing technology, assurance expectations and market direction into controlled Microsoft Cloud action.</p>
        </div>
      </section>

      <section className="section">
        <div className="container insightIndexGrid">
          {featuredItems.map((item) => (
            <article className="insightIndexCard" key={item.slug}>
              <div>
                <p className="tag">{item.label}</p>
                <p className="insightDate">{item.displayDate}</p>
              </div>
              <h2>{item.title}</h2>
              <p>{item.intro}</p>
              <Link href={`/insights/${item.slug}/`} className="textLink">Read the analysis <span aria-hidden="true">→</span></Link>
            </article>
          ))}

          {insights.map((insight) => (
            <article className="insightIndexCard" key={insight.slug}>
              <div>
                <p className="tag">{insight.label}</p>
                <p className="insightDate">{insight.displayDate}</p>
              </div>
              <h2>{insight.title}</h2>
              <p>{insight.intro}</p>
              <Link href={`/insights/${insight.slug}/`} className="textLink">Read the analysis <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <CTA
        eyebrow="Apply the analysis"
        title="Need to turn a cloud risk or procurement requirement into a scoped capability?"
        text="Start with the environment, critical resource, acceptance criteria and evidence you need. Enki Tech will help define the right assessment, remediation or partner-delivery step."
        buttonLabel="Discuss the situation"
      />
    </>
  );
}
