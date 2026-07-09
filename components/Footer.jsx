import Link from 'next/link';
import { navigation, site } from '@/data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Logo />
          <p className="muted footerText">{site.description}</p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link href="/legal/privacy/">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin}>LinkedIn</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <span>Independent consulting company. No implied endorsement by any client or institution.</span>
      </div>
    </footer>
  );
}
