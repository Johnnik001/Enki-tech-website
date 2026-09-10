import Link from 'next/link';

const offers = [
  {
    tag: 'Assess · Microsoft Cloud',
    title: 'Privileged Identity Assurance',
    text: 'Understand who can reach critical cloud resources, how privileged access is controlled and which gaps need attention first.',
    result: 'Access baseline · control evidence · prioritized remediation plan',
    href: '/privileged-identity-assurance/',
    action: 'Explore the identity assessment'
  },
  {
    tag: 'Assess · Product manufacturers',
    title: 'CRA Incident Reporting Readiness Sprint',
    text: 'Rehearse one product-security event with your Security, Product and Engineering teams. Find delays in ownership, reporting data and evidence retrieval.',
    result: 'Timed exercise · reporting runbook · owners · evidence gaps',
    href: '/cra-incident-readiness/',
    action: 'Explore the CRA readiness sprint'
  },
  {
    tag: 'Fix · Agreed technical scope',
    title: 'Secure Cloud Remediation Sprint',
    text: 'Move selected Microsoft Cloud, identity or endpoint findings through approved changes and technical verification.',
    result: 'Implemented changes · verification · closure evidence · handover',
    href: '/secure-cloud-remediation/',
    action: 'Scope a remediation sprint'
  },
  {
    tag: 'Operate · Scheduled assurance',
    title: 'Continuous Secure Cloud Governance',
    text: 'Review agreed controls, privilege and configuration drift at a defined cadence. Keep evidence current and assign new findings to an owner.',
    result: 'Control review · drift findings · evidence · owned action plan',
    href: '/services/continuous-secure-cloud-governance/',
    action: 'Explore recurring governance'
  }
];

export function AssuranceOffers() {
  return (
    <div className="commercialOfferGrid assuranceOfferGrid">
      {offers.map((offer) => (
        <article className="commercialOfferCard" key={offer.href}>
          <p className="tag">{offer.tag}</p>
          <h3>{offer.title}</h3>
          <p>{offer.text}</p>
          <div className="commercialOfferResult"><span>You receive</span>{offer.result}</div>
          <Link href={offer.href} className="textLink">{offer.action} <span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  );
}
