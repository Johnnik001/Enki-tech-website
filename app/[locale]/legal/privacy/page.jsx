import { notFound } from 'next/navigation';
import { getLocaleContent } from '../../../../data/localized';
import { site } from '../../../../data/site';

const alternates = { en: '/legal/privacy/', fr: '/fr/legal/privacy/', nl: '/nl/legal/privacy/', 'x-default': '/legal/privacy/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.privacy.metaTitle, description: content.privacy.intro, alternates: { canonical: `/${locale}/legal/privacy/`, languages: alternates } };
}

export default async function LocalizedPrivacyPage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.privacy;
  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></div></section>
      <section className="section"><div className="container narrow legalContent">{page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<section><h2>Contact</h2><p><a href={`mailto:${site.email}`}>{site.email}</a></p></section></div></section>
    </>
  );
}
