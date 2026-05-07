export default function PageTitle({
  eyebrow,
  title,
  description,
  className = "",
  descriptionClassName = "",
}) {
  return (
    <section className={`page-top ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>

      <h2 className="section-title">{title}</h2>

      <p className={`section-description ${descriptionClassName}`.trim()}>
        {description}
      </p>
    </section>
  );
}