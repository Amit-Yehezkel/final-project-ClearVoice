export default function HomeModeCard({
  title,
  variant,
  imageSrc,
  imageAlt,
  emoji,
  onClick,
}) {
  return (
    <button
      className={`home-mode-card home-mode-card-${variant}`}
      onClick={onClick}
      type="button"
      aria-label={title}
    >
      <div className={`home-mode-icon ${emoji ? "home-mode-mic" : ""}`}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        {emoji && emoji}
      </div>

      <h2>{title}</h2>
    </button>
  );
}