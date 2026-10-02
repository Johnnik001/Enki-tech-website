import Link from 'next/link';
import { CTA } from './CTA';
import { CloudServices } from './CloudServices';
import { SectionHeader } from './SectionHeader';
import { cloudCopy } from '../data/cloud-services';
const caseSlugs = ['windows-365-cloud-pc-migration', 'secure-digital-collaboration-operations', 'powershell-it-operations-automation'];
export function CloudHome({ locale = 'en' }) {
  const copy = cloudCopy[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return <>
    <section className="hero cloudHero"><div className="container cloudHeroGrid"><div><p className="heroKicker">{copy.kicker}</p><h1>{copy.title}</h1><p className="heroText">{copy.intro}</p><div className="heroActions"><Link href={`${prefix}/contact/`} className="button">{copy.primary}</Link><Link href={`${prefix}/services/`} className="button buttonGhost">{copy.secondary}</Link></div><ul className="heroCredentials">{copy.credentials.map(item => <li key={item}>{item}</li>)}</ul></div><aside className="cloudHeroAside"><p className="eyebrow">{copy.heroLabel}</p><h2>{copy.heroTitle}</h2><div className="cloudPlatformNames"><span>Azure</span><span>Microsoft 365</span></div><p>{copy.heroText}</p></aside></div></section>
    <section className="section cloudServicesSection" id="services"><div className="container"><SectionHeader eyebrow={copy.servicesEyebrow} title={copy.servicesTitle} /><CloudServices locale={locale} /></div></section>
    <section className="section sectionAlt"><div className="container"><SectionHeader eyebrow={copy.experienceEyebrow} title={copy.experienceTitle} text={copy.experienceNote} /><div className="cloudExperienceGrid">{copy.caseCards.map(([proof, title, detail], index) => <article className="cloudExperienceCard" key={title}><p className="cloudCaseProof">{proof}</p><h3>{title}</h3><p>{detail}</p><Link className="textLink" href={locale === 'en' ? `/experience/${caseSlugs[index]}/` : `${prefix}/experience/`}>{copy.caseView}</Link></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeader eyebrow={copy.processEyebrow} title={copy.processTitle} /><ol className="cloudProcessGrid">{copy.steps.map(([title, text], index) => <li key={title}><span className="cloudServiceNumber">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
    <CTA title={copy.ctaTitle} text={copy.ctaText} buttonLabel={copy.primary} buttonHref={`${prefix}/contact/`} />
  </>;
}
