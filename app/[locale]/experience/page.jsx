import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { getLocaleContent } from '../../../data/localized';

const alternates = { en: '/experience/', fr: '/fr/experience/', nl: '/nl/experience/', 'x-default': '/experience/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.experience.metaTitle, description: content.experience.intro, alternates: { canonical: `/${locale}/experience/`, languages: alternates } };
}

export default async function LocalizedExperiencePage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.experience;

  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="section"><div className="container experienceGrid">
        {page.cards.map((item) => <article className="experienceCard large caseStudyCard" key={item.title}><p className="tag">{item.tag}</p><p className="caseProof">{item.proof}</p><h2>{item.title}</h2><p>{item.detail}</p><dl className="caseDetails"><div><dt>{page.challenge}</dt><dd>{item.challenge}</dd></div><div><dt>{page.contribution}</dt><dd>{item.role}</dd></div></dl><p className="caseOutcome">{page.outcomes}</p><ul>{item.impact.map((impact) => <li key={impact}>{impact}</li>)}</ul></article>)}
      </div></section>
      <CTA eyebrow={content.home.ctaEyebrow} title={content.home.ctaTitle} text={content.home.ctaText} buttonLabel={content.home.ctaButton} buttonHref={`/${locale}/contact/`} />
    </>
  );
}
