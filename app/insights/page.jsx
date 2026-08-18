import Link from 'next/link';
import { CTA } from '../../components/CTA';
import { insights } from '../../data/site';

export const metadata = {
  title: 'Secure Cloud Insights',
  description:
    'Practical analysis of secure Microsoft Cloud access, continuous governance, privileged identity and post-quantum readiness for European IT leaders.',
  alternates: { canonical: '/insights/' }
};

export default function InsightsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Insights</p>
          <h1>Turn security and infrastructure signals into practical cloud decisions</h1>
          <p>Concise analysis for IT leaders who need to translate changing technology, assurance expectations and market direction into controlled Microsoft Cloud action.</p>
        </div>
      </section>

      <section className="section">
        <div className="container insightIndexGrid">
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
        title="Need to turn a cloud risk into a scoped decision?"
        text="Start with the environment, critical resource and evidence you need. Enki Tech will help define the right assessment or governance step."
        buttonLabel="Discuss the situation"
      />
    </>
  );
}
