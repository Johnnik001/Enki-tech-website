import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTA } from '../../../components/CTA';
import { SectionHeader } from '../../../components/SectionHeader';
import { getLocaleContent } from '../../../data/localized';

const alternates = { en: '/services/', fr: '/fr/services/', nl: '/nl/services/', 'x-default': '/services/' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) return {};
  return { title: content.servicesPage.metaTitle, description: content.servicesPage.metaDescription, alternates: { canonical: `/${locale}/services/`, languages: alternates } };
}

export default async function LocalizedServicesPage({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);
  if (!content) notFound();
  const page = content.servicesPage;

  return (
    <>
      <section className="pageHero"><div className="container narrow"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p><div className="heroActions"><Link href={`/${locale}/contact/`} className="button">{page.ctaButton}</Link></div></div></section>
      <section className="section"><div className="container"><SectionHeader eyebrow={page.sectionEyebrow} title={page.sectionTitle} text={page.sectionText} />
        <div className="cardsGrid three">
          {content.services.map((service) => <article className="card serviceCard" key={service.id}><p className="tag">{service.title}</p><h2>{service.metaTitle}</h2><p>{service.intro}</p><p className="caseOutcome">{page.outputs}</p><p>{service.outputs}</p><Link href={`/${locale}/services/${service.slug}/`} className="textLink serviceCardLink">{page.view} <span aria-hidden="true">→</span></Link></article>)}
        </div>
      </div></section>
      <section className="section sectionAlt"><div className="container narrow">
        <p className="eyebrow">CRA · NIS2</p>
        <h2>{locale === 'fr' ? 'Préparation, remédiation et suivi des contrôles.' : 'Voorbereiding, remediatie en opvolging van controles.'}</h2>
        <p>{locale === 'fr' ? 'Un exercice CRA concerne le processus de notification des fabricants de produits concernés. Pour NIS2, nous intervenons sur les contrôles Microsoft convenus dans votre programme de cybersécurité. Votre responsable réglementaire confirme les obligations applicables.' : 'Een CRA-oefening gaat over het meldproces van fabrikanten van producten die binnen het toepassingsgebied vallen. Voor NIS2 ondersteunen wij de afgesproken Microsoft-beheersmaatregelen binnen uw cyberbeveiligingsprogramma. Uw verantwoordelijke voor regelgeving bevestigt welke verplichtingen gelden.'}</p>
        <Link href="/security-assurance/#cra-nis2" hrefLang="en" className="textLink">{locale === 'fr' ? 'Comparer les parcours de service (en anglais) →' : 'Vergelijk de diensten (in het Engels) →'}</Link>
      </div></section>
      <CTA title={page.ctaTitle} text={page.ctaText} buttonLabel={page.ctaButton} buttonHref={`/${locale}/contact/`} />
    </>
  );
}
