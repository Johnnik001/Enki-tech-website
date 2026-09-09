import '../globals.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AttributionCapture } from '../../components/AttributionCapture';
import { site } from '../../data/site';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Enki Tech | Secure Cloud & Operational Assurance',
    template: '%s | Enki Tech'
  },
  description:
    'Enki Tech helps European organisations turn Microsoft Cloud, identity and security risks into verified remediation, evidence and repeatable operational controls.',
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
    title: 'Enki Tech | Secure Cloud & Operational Assurance',
    description:
      'From security finding to verified remediation. Specialist Microsoft Cloud, identity, remediation and recurring assurance delivery for European organisations.',
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
    title: 'Enki Tech | Secure Cloud & Operational Assurance',
    description:
      'From security finding to verified remediation across Microsoft Cloud, identity and operational security.',
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
        'Independent European Microsoft Cloud consulting company focused on secure cloud, identity, verified remediation, operational assurance and automation-driven operations.',
      logo: `${site.url}/logo/linkedin-company-logo.png`,
      sameAs: [site.linkedin],
      address: { '@type': 'PostalAddress', addressCountry: 'BG' },
      founder: { '@id': `${site.url}/#founder` },
      contactPoint: {
        '@type': 'ContactPoint',
        email: site.email,
        contactType: 'business inquiries',
        areaServed: 'Europe',
        availableLanguage: ['English', 'French', 'Dutch']
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
        'Secure Cloud and Cyber Operational Assurance',
        'Secure Cloud Remediation',
        'Continuous Security Assurance',
        'Secure Cloud Access and Privileged Identity Assessment',
        'Continuous Secure Cloud Governance',
        'CRA Incident Reporting Readiness',
        'Crypto Agility and Post-Quantum Readiness',
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
        <Header locale="en" />
        <main>{children}</main>
        <Footer locale="en" />
        <AttributionCapture />
        <Analytics />
      </body>
    </html>
  );
}
