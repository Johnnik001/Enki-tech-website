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
  '@type': 'ProfessionalService',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  description: site.description,
  logo: `${site.url}/logo/linkedin-company-logo.png`,
  sameAs: [site.linkedin],
  areaServed: ['Bulgaria', 'Belgium', 'Europe'],
  founder: {
    '@type': 'Person',
    name: site.founder,
    jobTitle: site.founderRole,
    url: `${site.url}/about/`,
    sameAs: [site.founderLinkedin],
    image: `${site.url}/images/eugene-tsvetov-enhanced.jpg`
  },
  serviceType: [
    'Microsoft 365 consulting',
    'Azure and hybrid infrastructure consulting',
    'Digital collaboration consulting',
    'Identity, endpoint and security consulting',
    'IT operations automation'
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
