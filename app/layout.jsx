import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { site } from '../data/site';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Enki Tech | Microsoft Cloud & Digital Collaboration Consulting',
    template: '%s | Enki Tech'
  },
  description: site.description,
  creator: site.name,
  publisher: site.legalName,
  verification: {
    google: 'zO2AJWR6kd2XPKiO79HsnSQrGEUISEW-1yqcgWlJANc'
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '1024x1024' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [{ url: '/favicon.png?v=2', sizes: '1024x1024', type: 'image/png' }]
  },
  openGraph: {
    title: 'Enki Tech | European IT Consulting',
    description: site.description,
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
    title: 'Enki Tech | European IT Consulting',
    description: site.description,
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
      description: site.description,
      logo: `${site.url}/logo/linkedin-company-logo.png`,
      sameAs: [site.linkedin],
      address: { '@type': 'PostalAddress', addressCountry: 'BG' },
      founder: { '@id': `${site.url}/#founder` },
      contactPoint: {
        '@type': 'ContactPoint',
        email: site.email,
        contactType: 'business inquiries',
        areaServed: 'Europe',
        availableLanguage: ['English']
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#professional-service`,
      name: site.name,
      url: site.url,
      parentOrganization: { '@id': `${site.url}/#organization` },
      areaServed: ['Bulgaria', 'Belgium', 'Europe'],
      serviceType: [
        'Microsoft 365 consulting',
        'Azure and hybrid infrastructure consulting',
        'Digital collaboration consulting',
        'Identity, endpoint and security consulting',
        'IT operations automation'
      ]
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
