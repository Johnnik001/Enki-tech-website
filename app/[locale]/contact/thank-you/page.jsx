import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionHeader } from '../../../../components/SectionHeader';
import { getLocaleContent } from '../../../../data/localized';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.thankYou.metaTitle, description: content.thankYou.intro, robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } } };
}

export default async function LocalizedThankYouPage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.thankYou;
  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p><div className="heroActions"><Link href={`/${locale}/services/`} className="button">{page.services}</Link><Link href={`/${locale}/`} className="button buttonGhost">{page.home}</Link></div></div></section>
      <section className="section sectionAlt"><div className="container"><SectionHeader eyebrow={page.nextEyebrow} title={page.nextTitle} text={page.nextText} /><div className="cardsGrid three">{page.steps.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    </>
  );
}
