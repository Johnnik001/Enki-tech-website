import Link from 'next/link';

export function Logo({ homeHref = '/', homeLabel = 'Enki Tech home' }) {
  return (
    <Link href={homeHref} className="logo" aria-label={homeLabel}>
      <img
        className="logoImage"
        src="/logo/enki-tech-logo-horizontal-white-exact.png"
        alt="Enki Tech"
        width="900"
        height="171"
      />
    </Link>
  );
}
