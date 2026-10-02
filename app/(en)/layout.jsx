import '../globals.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AttributionCapture } from '../../components/AttributionCapture';
import { site } from '../../data/site';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Enki Tech | Azure & Microsoft 365',
    template: '%s | Enki Tech'
  },
  description:
    'Independent Microsoft Cloud consulting: architecture audits, Microsoft 365 and Azure support, Zero Trust, Terraform and migrations.',
  creator: site.name,
  publisher: site.legalName,
  verification: {
    google: 'zO2AJWR6kd2XPKiO79HsnSQrGEUISEW-1yqcgWlJANc'
  },
  icons: {
    icon: [{ url: '/logo/linkedin-company-logo.png', type: 'image/png', sizes: '1024x1024' }],
    shortcut: '/logo/linkedin-company-logo.png',
    apple: [{ url: '/logo/linkedin-company-logo.png', sizes: '1024x1024', type: 'image/png' }]
  },
  openGraph: {
    title: 'Enki Tech | Azure & Microsoft 365',
    description:
      'Architecture advice, secure operations and controlled Azure and Microsoft 365 delivery for European organisations.',
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/logo/linkedin-company-logo.png',
        width: 1024,
        height: 1024,
        alt: 'Enki Tech'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Enki Tech | Azure & Microsoft 365',
    description:
      'Cloud architecture, Microsoft 365 and Azure support, Zero Trust, Terraform and migrations.',
    images: ['/logo/linkedin-company-logo.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      email: site.email,
      description:
        'Independent European consultancy for cloud architecture, Microsoft 365 and Azure support, Zero Trust, Terraform automation and migrations.',
      logo: `${site.url}/logo/linkedin-company-logo.png`,
      sameAs: [site.linkedin],
      address: { '@type': 'PostalAddress', addressCountry: 'BG' },
      founder: { '@id': `${site.url}/#founder` },
      contactPoint: {
        '@type': 'ContactPoint',
        email: site.email,
        contactType: 'business inquiries',
        areaServed: 'Europe',
        availableLanguage: ['English', 'Russian', 'Bulgarian']
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#professional-service`,
      name: site.name,
      url: site.url,
      parentOrganization: { '@id': `${site.url}/#organization` },
      areaServed: ['Bulgaria', 'Belgium', 'Europe'],
      serviceType: ['Cloud architecture consulting and audit', 'Microsoft 365 and Azure support', 'Zero Trust training and implementation', 'Terraform infrastructure automation', 'Azure and Microsoft 365 migrations']
    },
    {
      '@type': 'Person',
      '@id': `${site.url}/#founder`,
      name: site.founder,
      jobTitle: site.founderRole,
      url: `${site.url}/about/`,
      worksFor: { '@id': `${site.url}/#organization` },
      sameAs: [site.founderLinkedin],
      image: `${site.url}/images/eugene-tsvetov-enhanced.jpg`
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
      </head>
      <body>
        <Header locale="en" />
        <main>{children}</main>
        <Footer locale="en" />
        <AttributionCapture />
        <Analytics />
      </body>
    </html>
  );
}
