import { services } from '@/data/site';

export function ServiceCards() {
  return (
    <div className="cardsGrid">
      {services.map((service) => (
        <article className="card" key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <ul className="checkList">
            {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
