import { cloudCopy } from '../data/cloud-services';
export function CompanyMission({ locale = 'en' }) {
  const copy = cloudCopy[locale];
  return <section className="section sectionAlt"><div className="container"><p className="eyebrow">{copy.missionLabel}</p><h2>{copy.mission}</h2><h3 className="cloudValuesHeading">{copy.valuesLabel}</h3><ul className="cloudValuesGrid">{copy.values.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul></div></section>;
}
