import Link from 'next/link';
import { CTA } from '../../../components/CTA';
import { CloudServices } from '../../../components/CloudServices';
export const metadata = { title: 'Microsoft Cloud Partner Delivery', description: 'Senior Azure and Microsoft 365 architecture, support, Zero Trust, Terraform and migration workstreams for European consultancies and integrators.', alternates: { canonical: '/partners/' } };
export default function PartnersPage() { return <>
  <section className="pageHero"><div className="container narrow"><p className="eyebrow">Partner delivery · Europe</p><h1>Senior Microsoft Cloud capability for your delivery team.</h1><p>Enki Tech supports consultancies, MSPs and integrators with defined technical workstreams and L2/L3 capacity. Your organisation keeps the client relationship; scope, ownership, confidentiality and specialist needs are agreed before delivery.</p><div className="heroActions"><Link className="button" href="/contact/?area=Partner%20or%20subcontracting%20opportunity&engagement=Partner%20delivery">Discuss partner delivery</Link><a className="button buttonGhost" href="/downloads/enki-tech-capability-statement.pdf">Download service sheet</a></div></div></section>
  <section className="section"><div className="container"><CloudServices /></div></section>
  <section className="section sectionAlt"><div className="container cloudProcessGrid"><article><h2>Project capacity</h2><p>A defined architecture, migration, security or automation workstream with agreed acceptance criteria.</p></article><article><h2>Senior escalation</h2><p>Complex Microsoft 365 and Azure troubleshooting within agreed coverage and capacity.</p></article><article><h2>Clear handover</h2><p>Technical documentation, validation records and knowledge transfer to your delivery and support teams.</p></article></div></section>
  <CTA title="Which Microsoft Cloud workstream needs additional capacity?" text="Share the scope, timing and responsibilities. We will confirm the technical fit and available delivery capacity." buttonLabel="Discuss partner delivery" buttonHref="/contact/?area=Partner%20or%20subcontracting%20opportunity&engagement=Partner%20delivery" />
</>;
}
