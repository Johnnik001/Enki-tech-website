import Link from 'next/link';
import { SectionHeader } from '../../../components/SectionHeader';

export const metadata = {
  title: 'Project brief sent',
  description: 'Confirmation that a project inquiry has been sent to Enki Tech.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true
    }
  }
};

const nextSteps = [
  {
    title: 'Context review',
    text: 'The project background, service area, timeline and engagement model will be reviewed together.'
  },
  {
    title: 'Fit and approach',
    text: 'You will receive a considered response on fit, possible delivery approach and any useful clarifying questions.'
  },
  {
    title: 'Practical next step',
    text: 'If there is a strong match, the conversation can move to scope, availability and the right cooperation model.'
  }
];

export default function ThankYouPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Project brief sent</p>
          <h1>Thank you — your inquiry is on its way.</h1>
          <p>
            Enki Tech has received your project brief. The information will be reviewed and used to prepare a useful response on fit and next steps.
          </p>
          <div className="heroActions">
            <Link href="/services/" className="button">Review services</Link>
            <Link href="/" className="button buttonGhost">Return to home</Link>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <SectionHeader
            eyebrow="What happens next"
            title="A focused follow-up, based on the context you shared."
            text="The goal of the first response is to establish whether Enki Tech is a good match and make the next conversation practical."
          />
          <div className="cardsGrid three">
            {nextSteps.map((step) => (
              <article className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
