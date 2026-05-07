import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className="clean-auth-page">
      <Link className="clean-auth-back" to="/">
        חזרה לדף הראשי
      </Link>

      <section className="clean-auth-content">
        <div className="clean-auth-brand">
          <img
            className="clean-auth-wordmark"
            src="/logo-wordmark.png"
            alt="ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="clean-auth-header">
          <h1>התחברות</h1>
          <p>יש להזין את הפרטים כדי להמשיך למערכת.</p>
        </div>

        <form className="clean-auth-form" onSubmit={handleLogin}>
          <div className="clean-field">
            <label htmlFor="loginEmail">אימייל</label>
            <input
              id="loginEmail"
              type="email"
              placeholder="הזנת כתובת אימייל"
            />
          </div>

          <div className="clean-field">
            <label htmlFor="loginPassword">סיסמה</label>
            <input
              id="loginPassword"
              type="password"
              placeholder="הזנת סיסמה"
            />
          </div>

          <button className="clean-primary-button" type="submit">
            התחברות
          </button>
        </form>

        <p className="clean-auth-switch">
          אין לך חשבון? <Link to="/register">יצירת חשבון חדש</Link>
        </p>
      </section>
    </main>
  );
}