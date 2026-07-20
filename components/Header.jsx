'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation } from '../data/site';
import { Logo } from './Logo';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo />
        <button
          className="menuToggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menuToggleLabel">Menu</span>
          <span className="menuToggleIcon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
        <nav id="main-navigation" className={`nav ${menuOpen ? 'navOpen' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link className="button navCta" href="/contact/" onClick={closeMenu}>Discuss a project</Link>
        </nav>
        <Link className="button buttonSmall" href="/contact/">Discuss a project</Link>
      </div>
    </header>
  );
}
