import Link from 'next/link';
import { site } from '../data/site';
import { Logo } from './Logo';

const linkedInCompanyUrl = 'https://www.linkedin.com/company/144942935/';

const footerContent = {
  en: {
    homeHref: '/', homeLabel: 'Enki Tech home', company: 'Company', contact: 'Contact', privacy: 'Privacy',
    description: 'Independent Microsoft Cloud consulting: architecture, secure operations, Zero Trust, Terraform and migrations.',
    links: [
      { label: 'Services', href: '/services/' },
      { label: 'Experience', href: '/experience/' }, { label: 'Partners', href: '/partners/' }, { label: 'About', href: '/about/' }, { label: 'Insights', href: '/insights/' }
    ],
    privacyHref: '/legal/privacy/',
    location: site.location,
    legal: `registered in Bulgaria. All rights reserved.`,
    disclaimer: 'Independent consulting company. No implied endorsement by any client or institution.'
  },
  fr: {
    homeHref: '/fr/', homeLabel: 'Accueil Enki Tech', company: 'Entreprise', contact: 'Contact', privacy: 'Confidentialité',
    description: 'Conseil Microsoft Cloud indépendant : architecture, opérations sécurisées, Zero Trust, Terraform et migrations.',
    links: [
      { label: 'Accueil', href: '/fr/' }, { label: 'Services', href: '/fr/services/' },
      { label: 'Expérience', href: '/fr/experience/' }, { label: 'À propos', href: '/fr/about/' }
    ],
    privacyHref: '/fr/legal/privacy/',
    location: 'Bulgarie · Belgique · Europe',
    legal: `immatriculée en Bulgarie. Tous droits réservés.`,
    disclaimer: 'Société de conseil indépendante. Aucun soutien d’un client ou d’une institution n’est implicitement revendiqué.'
  },
  nl: {
    homeHref: '/nl/', homeLabel: 'Enki Tech startpagina', company: 'Bedrijf', contact: 'Contact', privacy: 'Privacy',
    description: 'Onafhankelijk Microsoft Cloud-advies: architectuur, veilige operations, Zero Trust, Terraform en migraties.',
    links: [
      { label: 'Start', href: '/nl/' }, { label: 'Diensten', href: '/nl/services/' },
      { label: 'Ervaring', href: '/nl/experience/' }, { label: 'Over ons', href: '/nl/about/' }
    ],
    privacyHref: '/nl/legal/privacy/',
    location: 'Bulgarije · België · Europa',
    legal: `geregistreerd in Bulgarije. Alle rechten voorbehouden.`,
    disclaimer: 'Onafhankelijk adviesbureau. Er wordt geen impliciete goedkeuring door een klant of instelling geclaimd.'
  }
};

export function Footer({ locale = 'en' }) {
  const content = footerContent[locale] || footerContent.en;

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Logo homeHref={content.homeHref} homeLabel={content.homeLabel} />
          <p className="muted footerText">{content.description}</p>
        </div>
        <div>
          <h3>{content.company}</h3>
          <ul>
            {content.links.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link href={content.privacyHref}>{content.privacy}</Link></li>
          </ul>
        </div>
        <div>
          <h3>{content.contact}</h3>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={linkedInCompanyUrl} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>{content.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} {site.legalName}, {content.legal}</span>
        <span>{content.disclaimer}</span>
      </div>
    </footer>
  );
}
