import { notFound } from 'next/navigation';
import { CloudHome } from '../../components/CloudHome';
import { getLocaleContent } from '../../data/localized';
export async function generateMetadata({ params }) { const { locale } = await params; const content = getLocaleContent(locale); if (!content) return {}; return { title: content.home.metaTitle, description: content.siteDescription, alternates: { canonical: `/${locale}/`, languages: { en: '/', fr: '/fr/', nl: '/nl/', 'x-default': '/' } } }; }
export default async function LocalizedHomePage({ params }) { const { locale } = await params; if (!getLocaleContent(locale)) notFound(); return <CloudHome locale={locale} />; }
