'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';

const headerContent = {
  en: {
    homeHref: '/',
    homeLabel: 'Enki Tech home',
    menu: 'Menu',
    navLabel: 'Main navigation',
    languageLabel: 'Language',
    cta: 'Discuss a project',
    ctaHref: '/contact/',
    navigation: [
      { label: 'Assurance', href: '/security-assurance/' },
      { label: 'Services', href: '/services/' },
      { label: 'Experience', href: '/experience/' },
      { label: 'Partners', href: '/partners/' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' }
    ]
  },
  fr: {
    homeHref: '/fr/',
    homeLabel: 'Accueil Enki Tech',
    menu: 'Menu',
    navLabel: 'Navigation principale',
    languageLabel: 'Langue',
    cta: 'Parler de votre projet',
    ctaHref: '/fr/contact/',
    navigation: [
      { label: 'Accueil', href: '/fr/' },
      { label: 'Services', href: '/fr/services/' },
      { label: 'Expérience', href: '/fr/experience/' },
      { label: 'À propos', href: '/fr/about/' }
    ]
  },
  nl: {
    homeHref: '/nl/',
    homeLabel: 'Enki Tech startpagina',
    menu: 'Menu',
    navLabel: 'Hoofdnavigatie',
    languageLabel: 'Taal',
    cta: 'Bespreek uw project',
    ctaHref: '/nl/contact/',
    navigation: [
      { label: 'Start', href: '/nl/' },
      { label: 'Diensten', href: '/nl/services/' },
      { label: 'Ervaring', href: '/nl/experience/' },
      { label: 'Over ons', href: '/nl/about/' }
    ]
  }
};

const languageLinks = [
  { locale: 'en', label: 'EN', href: '/' },
  { locale: 'fr', label: 'FR', href: '/fr/' },
  { locale: 'nl', label: 'NL', href: '/nl/' }
];

export function Header({ locale = 'en' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = headerContent[locale] || headerContent.en;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo homeHref={content.homeHref} homeLabel={content.homeLabel} />
        <button
          className="menuToggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menuToggleLabel">{content.menu}</span>
          <span className="menuToggleIcon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
        <nav id="main-navigation" className={`nav ${menuOpen ? 'navOpen' : ''}`} aria-label={content.navLabel}>
          {content.navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <div className="languageSwitch" aria-label={content.languageLabel}>
            {languageLinks.map((item) => (
              <Link key={item.locale} href={item.href} hrefLang={item.locale} aria-current={locale === item.locale ? 'page' : undefined} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="button navCta" href={content.ctaHref} onClick={closeMenu}>{content.cta}</Link>
        </nav>
        <Link className="button buttonSmall" href={content.ctaHref}>{content.cta}</Link>
      </div>
    </header>
  );
}
