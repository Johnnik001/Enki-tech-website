export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="sectionHeader">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
