import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { getLocaleContent } from '../../../data/localized';
import { site } from '../../../data/site';

const alternates = { en: '/about/', fr: '/fr/about/', nl: '/nl/about/', 'x-default': '/about/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.about.metaTitle, description: content.about.intro, alternates: { canonical: `/${locale}/about/`, languages: alternates } };
}

export default async function LocalizedAboutPage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.about;

  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="section"><div className="container founderGrid">
        <article className="founderCard"><Image className="founderPortrait" src="/images/evgeniy-tsvetov-professional.jpg" alt={`${site.founder}, Enki Tech`} width={1024} height={1024} sizes="(max-width: 980px) 420px, 360px" /><div className="founderCardBody"><p className="tag">{page.founderTag}</p><h2 className="founderName">{site.founder}</h2><p className="founderTitle">{site.founderRole}</p><a className="textLink" href={site.founderLinkedin}>{page.linkedin} <span aria-hidden="true">→</span></a></div></article>
        <div className="founderStory"><p className="eyebrow">{page.founderEyebrow}</p><h2>{page.founderTitle}</h2><p>{page.founderText}</p><p>{page.founderText2}</p></div>
      </div></section>
      <section className="section sectionAlt"><div className="container"><p className="eyebrow">{page.principlesEyebrow}</p><h2>{page.principlesTitle}</h2><div className="listPanel wide">{page.principles.map((item) => <div className="principle" key={item}>{item}</div>)}</div></div></section>
      <CTA eyebrow={content.home.ctaEyebrow} title={content.home.ctaTitle} text={content.home.ctaText} buttonLabel={content.home.ctaButton} buttonHref={`/${locale}/contact/`} />
    </>
  );
}
