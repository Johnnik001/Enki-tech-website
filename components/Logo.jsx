import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Enki Tech home">
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
