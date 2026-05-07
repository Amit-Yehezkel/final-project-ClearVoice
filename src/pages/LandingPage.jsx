import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <header className="landing-header">
        <div className="landing-brand">
          <img
            className="landing-brand-logo"
            src="/logo-book.png"
            alt="לוגו ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <img
            className="landing-brand-wordmark"
            src="/logo-wordmark.png"
            alt="ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <nav className="landing-nav">
          <a href="#how-it-works">איך זה עובד?</a>
          <a href="#about">על הפרויקט</a>

          <button className="nav-link" onClick={() => navigate("/login")}>
            התחברות
          </button>

          <button className="nav-primary" onClick={() => navigate("/register")}>
            יצירת חשבון
          </button>
        </nav>
      </header>

      <section className="landing-hero">
        <div className="hero-inner">
          <span className="hero-label">מערכת לזיהוי דיבור אישי</span>

          <img
            className="hero-wordmark"
            src="/logo-wordmark.png"
            alt="ClearVoice"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <h1>קול ברור. תקשורת פשוטה.</h1>

          <p>
            מערכת המסייעת לזהות דיבור אישי ולהציג אותו כטקסט ברור, פשוט ונגיש.
          </p>

          <button
            className="hero-main-button"
            onClick={() => navigate("/register")}
          >
            התחלה
          </button>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <h2>איך זה עובד?</h2>
          <p>
            ClearVoice בנויה מתהליך פשוט וברור: בונים מאגר אישי, מקליטים דיבור,
            ומקבלים פלט טקסטואלי מובן.
          </p>
        </div>

        <div className="steps-wrapper">
          <article className="step-card">
            <span className="step-number">01</span>
            <h3>בונים מאגר אישי</h3>
            <p>
              מוסיפים מילים וביטויים חשובים ומקליטים עבורם דגימות קול אישיות.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">02</span>
            <h3>מזהים דיבור חדש</h3>
            <p>
              המשתמש מקליט דיבור חדש, והמערכת משווה אותו לדגימות שנשמרו.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">03</span>
            <h3>מקבלים טקסט ברור</h3>
            <p>הביטוי המתאים מוצג כטקסט קצר, ברור ונגיש לקריאה.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <span className="section-label">על הפרויקט</span>

          <h2>למה בחרנו לפתח את ClearVoice?</h2>

          <p>
            בחרנו בפרויקט מתוך רצון לפתח פתרון טכנולוגי בעל משמעות חברתית,
            שיכול לסייע לאנשים המתמודדים עם דיבור לא טיפוסי בתקשורת היומיומית.
          </p>

          <p>
            במהלך התיכון והשירות הצבאי נחשפנו לאוכלוסייה על הרצף האוטיסטי,
            ומתוך ההיכרות הזו עלה הצורך בכלי פשוט, רגוע ומותאם אישית.
          </p>
        </div>
      </section>

      <section className="landing-cta">
        <div className="cta-overlay">
          <h2>מוכנים להתחיל?</h2>
          <p>צרו מאגר קולי אישי והתחילו להשתמש במערכת בצורה פשוטה וברורה.</p>

          <button className="cta-button" onClick={() => navigate("/register")}>
            התחלה
          </button>
        </div>
      </section>

      <div className="footer-separator" />

      <footer className="landing-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/logo-book.png"
              alt="ClearVoice"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div>
              <h2>ClearVoice</h2>
              <p>מערכת לזיהוי דיבור אישי ולהצגתו כטקסט ברור ונגיש.</p>
            </div>
          </div>

          <div className="footer-links-group">
            <h3>ניווט</h3>
            <a href="#how-it-works">איך זה עובד?</a>
            <a href="#about">על הפרויקט</a>
            <button onClick={() => navigate("/login")}>התחברות</button>
            <button onClick={() => navigate("/register")}>יצירת חשבון</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-left">
            © ClearVoice. All rights reserved.
          </span>

          <div className="footer-bottom-right">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </main>
  );
}