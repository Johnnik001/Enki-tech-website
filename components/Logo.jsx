import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Enki Tech home">
      <span className="logoMark">ET</span>
      <span>
        <strong>Enki Tech</strong>
        <small>European IT Consulting</small>
      </span>
    </Link>
  );
}
