import { CTA } from '../../components/CTA';
import { experience } from '../../data/site';

export const metadata = {
  title: 'Experience',
  description: 'Selected enterprise infrastructure and Microsoft Cloud experience behind Enki Tech.'
};

const capabilities = [
  'Microsoft 365, Exchange Online, Teams, SharePoint and OneDrive operations',
  'Azure administration, hybrid identity, Active Directory and Entra Connect',
  'Intune, Windows 365 Cloud PC and endpoint management',
  'PowerShell automation, reporting and operational workflows',
  'ITIL-aligned incident, problem, change and service improvement practices',
  'Security baselines, compliance mindset, Microsoft Defender and Zero Trust alignment'
];

export default function ExperiencePage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <p className="eyebrow">Experience</p>
          <h1>Enterprise infrastructure experience translated into practical consulting value.</h1>
          <p>
            Enki Tech uses sanitized experience summaries to demonstrate capability while respecting confidentiality and avoiding unsupported client endorsements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container experienceGrid">
          {experience.map((item) => (
            <article className="experienceCard large" key={item.title}>
              <p className="tag">{item.label}</p>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <ul>
                {item.impact.map((impact) => <li key={impact}>{impact}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container splitGrid">
          <div>
            <p className="eyebrow">Capability areas</p>
            <h2>Technical depth across cloud, collaboration and secure operations.</h2>
            <p>
              The focus is not only implementation. Enki Tech combines operational support, documentation, troubleshooting, service improvement and automation thinking.
            </p>
          </div>
          <div className="listPanel">
            {capabilities.map((capability) => <div className="principle" key={capability}>{capability}</div>)}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
