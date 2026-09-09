import { notFound } from 'next/navigation';
import { ProjectBriefForm } from '../../../components/ProjectBriefForm';
import { getLocaleContent } from '../../../data/localized';
import { site } from '../../../data/site';

const alternates = { en: '/contact/', fr: '/fr/contact/', nl: '/nl/contact/', 'x-default': '/contact/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.contact.metaTitle, description: content.contact.intro, alternates: { canonical: `/${locale}/contact/`, languages: alternates } };
}

export default async function LocalizedContactPage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.contact;

  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="section"><div className="container briefLayout"><div><p className="eyebrow">{page.briefEyebrow}</p><h2>{page.briefTitle}</h2><p>{page.briefText}</p><p className="directEmail">{page.direct}: <a href={`mailto:${site.email}`}>{site.email}</a></p></div><ProjectBriefForm locale={locale} /></div></section>
      <section className="section sectionAlt"><div className="container splitGrid"><div><p className="eyebrow">{page.contextEyebrow}</p><h2>{page.contextTitle}</h2></div><div className="listPanel">{page.context.map((item) => <div className="principle" key={item}>{item}</div>)}</div></div></section>
    </>
  );
}
