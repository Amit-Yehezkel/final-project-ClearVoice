import { useLocation, useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeSection = ["/home", "/learning", "/usage"].includes(
    location.pathname
  );

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <img
            className="header-logo"
            src="/logo-book.png"
            alt="לוגו ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <img
            className="header-wordmark"
            src="/logo-wordmark.png"
            alt="ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <nav className="header-actions">
          <button
            className={`nav-button ${isHomeSection ? "active" : ""}`}
            onClick={() => navigate("/home")}
          >
            בית
          </button>

          <button className="nav-button" onClick={() => navigate("/login")}>
            יציאה
          </button>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;