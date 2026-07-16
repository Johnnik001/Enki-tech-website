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
  openGraph: {
    title: 'Enki Tech | European IT Consulting',
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
