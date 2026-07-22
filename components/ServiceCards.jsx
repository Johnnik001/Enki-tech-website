import Link from 'next/link';
import { services } from '../data/site';

export function ServiceCards({ headingLevel = 'h3' }) {
  const Heading = headingLevel;

  return (
    <div className="cardsGrid">
      {services.map((service) => (
        <article className="card serviceCard" key={service.title}>
          <Heading>{service.title}</Heading>
          <p>{service.summary}</p>
          <ul className="checkList">
            {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <Link
            href={`/services/${service.slug}/`}
            className="textLink serviceCardLink"
            aria-label={`View details for ${service.title}`}
          >
            View service details <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
