import '../globals.css';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { AttributionCapture } from '../../components/AttributionCapture';
import { getLocaleContent, supportedLocales } from '../../data/localized';
import { site } from '../../data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);

  if (!content) return {};

  return {
    metadataBase: new URL(site.url),
    title: { default: content.siteTitle, template: `%s | Enki Tech` },
    description: content.siteDescription,
    creator: site.name,
    publisher: site.legalName,
    icons: {
      icon: [{ url: '/logo/linkedin-company-logo.png', type: 'image/png', sizes: '1024x1024' }],
      shortcut: '/logo/linkedin-company-logo.png',
      apple: [{ url: '/logo/linkedin-company-logo.png', sizes: '1024x1024', type: 'image/png' }]
    },
    openGraph: {
      title: content.siteTitle,
      description: content.siteDescription,
      siteName: site.name,
      type: 'website',
      locale: locale === 'fr' ? 'fr_BE' : 'nl_BE',
      images: [{ url: '/logo/linkedin-company-logo.png', width: 1024, height: 1024, alt: 'Enki Tech' }]
    },
    twitter: { card: 'summary', title: content.siteTitle, description: content.siteDescription, images: ['/logo/linkedin-company-logo.png'] },
    robots: { index: true, follow: true }
  };
}

export default async function LocalizedLayout({ children, params }) {
  const { locale } = await params;
  const content = getLocaleContent(locale);

  if (!content) notFound();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/${locale}/#professional-service`,
    name: site.name,
    url: `${site.url}/${locale}/`,
    description: content.siteDescription,
    parentOrganization: { '@id': `${site.url}/#organization` },
    areaServed: ['Belgium', 'Bulgaria', 'Europe'],
    availableLanguage: ['English', 'French', 'Dutch'],
    serviceType: ['Microsoft Cloud audit', 'Privileged identity assessment', 'Secure cloud governance', 'Security remediation']
  };

  return (
    <html lang={locale}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      </head>
      <body>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <AttributionCapture />
        <Analytics />
      </body>
    </html>
  );
}
