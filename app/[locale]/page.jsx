import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../components/CTA';
import { SectionHeader } from '../../components/SectionHeader';
import { getLocaleContent } from '../../data/localized';

const homeAlternates = { en: '/', fr: '/fr/', nl: '/nl/', 'x-default': '/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};

  return {
    title: content.home.metaTitle,
    description: content.siteDescription,
    alternates: { canonical: `/${locale}/`, languages: homeAlternates },
    openGraph: { url: `/${locale}/`, title: content.home.metaTitle, description: content.siteDescription }
  };
}

export default async function LocalizedHomePage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const home = content.home;

  return (
    <>
      <section className="hero">
        <div className="container secureHeroGrid">
          <div className="secureHeroCopy">
            <p className="heroKicker"><span aria-hidden="true"></span>{home.kicker}</p>
            <h1>{home.title}</h1>
            <p className="heroText">{home.intro}</p>
            <div className="heroActions">
              <Link href={`/${locale}/services/`} className="button">{home.primary}</Link>
              <Link href={`/${locale}/contact/`} className="button buttonGhost">{home.secondary}</Link>
            </div>
            <ul className="heroCredentials">
              {home.credentials.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <aside className="trustMap" aria-label={home.mapLabel}>
            <div className="trustMapHeader">
              <div><p className="trustMapLabel">{home.mapLabel}</p><h2>{home.mapTitle}</h2></div>
              <span className="trustStatus"><i aria-hidden="true"></i>{home.mapStatus}</span>
            </div>
            <ol className="trustPath">
              {home.path.map((node, index) => <li key={node}><span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong></li>)}
            </ol>
            <div className="trustControlGrid">
              {home.controls.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
            </div>
            <div className="trustOutcome"><span>{home.resultLabel}</span><strong>{home.result}</strong></div>
          </aside>
        </div>
      </section>

      <section className="section commercialOffersSection">
        <div className="container">
          <SectionHeader eyebrow={home.offersEyebrow} title={home.offersTitle} text={home.offersText} />
          <div className="commercialOfferGrid">
            {content.services.map((service) => (
              <article className="commercialOfferCard" key={service.id}>
                <p className="tag">{service.title}</p>
                <h2>{service.metaTitle}</h2>
                <p>{service.summary}</p>
                <div className="commercialOfferResult"><span>{home.output}</span>{service.outputs}</div>
                <Link href={`/${locale}/services/${service.slug}/`} className="textLink">{home.viewOffer} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader eyebrow={home.whyEyebrow} title={home.whyTitle} />
          <div className="cardsGrid three">
            {home.why.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <CTA eyebrow={home.ctaEyebrow} title={home.ctaTitle} text={home.ctaText} buttonLabel={home.ctaButton} buttonHref={`/${locale}/contact/`} />
    </>
  );
}
