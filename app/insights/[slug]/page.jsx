import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { insights, site } from '../../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

function getInsight(slug) {
  return insights.find((insight) => insight.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  return {
    title: insight.metaTitle,
    description: insight.metaDescription,
    alternates: { canonical: `/insights/${insight.slug}/` },
    openGraph: {
      title: `${insight.metaTitle} | ${site.name}`,
      description: insight.metaDescription,
      url: `/insights/${insight.slug}/`,
      type: 'article',
      publishedTime: insight.datePublished
    }
  };
}

export default async function InsightPage({ params }) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const articleUrl = `${site.url}/insights/${insight.slug}/`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.metaDescription,
    datePublished: insight.datePublished,
    dateModified: insight.datePublished,
    mainEntityOfPage: articleUrl,
    author: { '@id': `${site.url}/#founder` },
    publisher: { '@id': `${site.url}/#organization` }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <article>
        <header className="articleHero">
          <div className="container articleWidth">
            <Link href="/insights/" className="articleBack">← All insights</Link>
            <p className="eyebrow">{insight.label} · {insight.displayDate}</p>
            <h1>{insight.title}</h1>
            <p className="articleLead">{insight.intro}</p>
          </div>
        </header>

        <div className="container articleLayout">
          <div className="articleBody">
            <aside className="signalPanel">
              <span>Market signal</span>
              <p>{insight.signal}</p>
            </aside>

            {insight.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul className="checkList articleList">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="articleSources">
              <h2>Primary sources</h2>
              <p>These links support the external market signal. The recommendations above are Enki Tech&apos;s practical interpretation for cloud decision-makers.</p>
              <ul>
                {insight.sources.map((source) => (
                  <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="articleAside">
            <p className="eyebrow">Related service</p>
            <h2>Apply this insight to your environment</h2>
            <p>Turn the signal into an evidence-based scope, decision and remediation path.</p>
            <Link href={`/services/${insight.relatedService}/`} className="button">{insight.relatedServiceLabel}</Link>
          </aside>
        </div>
      </article>

      <CTA
        title="Need an independent view of your secure cloud controls?"
        text="Describe the critical resource, access concern or governance gap. Enki Tech will help define a practical next step."
        buttonHref={`/contact/?engagement=Assessment%20or%20audit`}
      />
    </>
  );
}
