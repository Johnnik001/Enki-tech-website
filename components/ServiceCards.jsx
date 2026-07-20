import { services } from '../data/site';

export function ServiceCards({ headingLevel = 'h3' }) {
  const Heading = headingLevel;

  return (
    <div className="cardsGrid">
      {services.map((service) => (
        <article className="card" key={service.title}>
          <Heading>{service.title}</Heading>
          <p>{service.summary}</p>
          <ul className="checkList">
            {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
