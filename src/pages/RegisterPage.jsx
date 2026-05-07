import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  function handleRegister(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className="clean-auth-page">
      <Link className="clean-auth-back" to="/">
        חזרה לדף הראשי
      </Link>

      <section className="clean-auth-content clean-auth-content-wide">
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
          <h1>יצירת חשבון</h1>
          <p>יש למלא את הפרטים כדי לפתוח חשבון חדש במערכת.</p>
        </div>

        <form className="clean-auth-form" onSubmit={handleRegister}>
          <div className="clean-field">
            <label htmlFor="fullName">שם מלא</label>
            <input
              id="fullName"
              type="text"
              placeholder="הזנת שם מלא"
            />
          </div>

          <div className="clean-field">
            <label htmlFor="registerEmail">אימייל</label>
            <input
              id="registerEmail"
              type="email"
              placeholder="הזנת כתובת אימייל"
            />
          </div>

          <div className="clean-field">
            <label htmlFor="registerPassword">סיסמה</label>
            <input
              id="registerPassword"
              type="password"
              placeholder="הזנת סיסמה"
            />
          </div>

          <div className="clean-field">
            <label htmlFor="confirmPassword">אימות סיסמה</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="הזנת הסיסמה שוב"
            />
          </div>

          <button className="clean-primary-button" type="submit">
            יצירת חשבון
          </button>
        </form>

        <p className="clean-auth-switch">
          כבר יש לך חשבון? <Link to="/login">להתחברות</Link>
        </p>
      </section>
    </main>
  );
}