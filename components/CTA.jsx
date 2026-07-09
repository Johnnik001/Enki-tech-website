import Link from 'next/link';

export function CTA() {
  return (
    <section className="ctaBand">
      <div className="container ctaInner">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Need senior Microsoft Cloud and collaboration expertise?</h2>
          <p>
            Enki Tech can support project delivery, operational improvement, secure collaboration platforms and subcontracting engagements across Europe.
          </p>
        </div>
        <Link href="/contact/" className="button buttonLight">Start a conversation</Link>
      </div>
    </section>
  );
}
