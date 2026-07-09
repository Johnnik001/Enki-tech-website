import Link from 'next/link';
import { navigation } from '@/data/site';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo />
        <nav className="nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button buttonSmall" href="/contact/">Discuss a project</Link>
      </div>
    </header>
  );
}
