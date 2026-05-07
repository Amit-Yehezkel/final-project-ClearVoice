import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import HomeModeCard from "../components/HomeModeCard";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-app">
      <AppHeader />

      <main className="home-main">
        <section className="home-choice-section">
          <div className="home-choice-heading">
            <h1>ברוכים הבאים ל- ClearVoice</h1>
            <p>יש לבחור את מצב העבודה המתאים כדי להתחיל להשתמש במערכת.</p>
          </div>

          <div className="home-mode-wrapper">
            <HomeModeCard
              title="מצב למידה"
              variant="light"
              imageSrc="/logo-book.png"
              imageAlt="מצב למידה"
              onClick={() => navigate("/learning")}
            />

            <HomeModeCard
              title="מצב שימוש"
              variant="dark"
              emoji="🎙️"
              onClick={() => navigate("/usage")}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;