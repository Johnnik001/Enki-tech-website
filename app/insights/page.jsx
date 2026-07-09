import { CTA } from '@/components/CTA';
import { insightIdeas } from '@/data/site';

export const metadata = {
  title: 'Insights',
  description: 'Microsoft Cloud, Digital Collaboration, Automation and AI-enhanced IT Operations insights from Enki Tech.'
};

export default function InsightsPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Insights</p>
          <h1>Practical thinking on Microsoft Cloud, secure collaboration and IT operations.</h1>
          <p>
            This section is prepared as a future content engine for search visibility, LinkedIn distribution and sales credibility.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cardsGrid three">
          {insightIdeas.map((title, index) => (
            <article className="card insightCard" key={title}>
              <p className="tag">Planned article {index + 1}</p>
              <h2>{title}</h2>
              <p>
                Draft-ready topic for future thought leadership, outbound support and SEO. This can be expanded into a full article after launch.
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
