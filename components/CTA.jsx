import Link from 'next/link';

export function CTA({
  eyebrow = 'Next step',
  title = 'Need senior Microsoft Cloud and collaboration expertise?',
  text = 'Enki Tech can support project delivery, operational improvement, secure collaboration platforms and subcontracting engagements across Europe.',
  buttonLabel = 'Start a conversation'
}) {
  return (
    <section className="ctaBand">
      <div className="container ctaInner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/contact/" className="button buttonLight">{buttonLabel}</Link>
      </div>
    </section>
  );
}
