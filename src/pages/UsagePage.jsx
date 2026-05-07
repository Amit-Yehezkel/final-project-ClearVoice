import { useState } from "react";
import AppHeader from "../components/AppHeader";
import PageTitle from "../components/PageTitle";
import { getMockRecognitionResult } from "../data/mockData";

export default function UsagePage() {
  const [status, setStatus] = useState("ready");
  const [result, setResult] = useState("");

  function startRecognition() {
    setResult("");
    setStatus("recording");

    setTimeout(() => {
      setStatus("processing");
    }, 1100);

    setTimeout(() => {
      setResult(getMockRecognitionResult());
      setStatus("done");
    }, 2200);
  }

  function reset() {
    setResult("");
    setStatus("ready");
  }

  function getStatusText() {
    if (status === "recording") {
      return "מקליט כעת...";
    }

    if (status === "processing") {
      return "מעבד את ההקלטה ומחפש התאמה...";
    }

    if (status === "done") {
      return "התקבלה תוצאה";
    }

    return "יש ללחוץ על הכפתור כדי להתחיל זיהוי";
  }

  return (
    <div className="app">
      <AppHeader />

      <main className="page">
        <div className="page-container">
          <PageTitle
            className="usage-page-top"
            descriptionClassName="usage-description"
            eyebrow="זיהוי דיבור חדש"
            title="מצב שימוש"
            description="ניתן להקליט דיבור חדש, והמערכת תזהה אותו בעזרת מחסן המילים האישי שנבנה במצב הלמידה."
          />

          <section className="recorder-box">
            <div
              className={`record-circle ${
                status === "recording" ? "recording" : ""
              }`}
            >
              🎙️
            </div>

            <p className="status-text">{getStatusText()}</p>

            {status === "ready" && (
              <button
                className="primary-button usage-primary-button"
                onClick={startRecognition}
              >
                התחלת הקלטה
              </button>
            )}

            {status === "recording" && (
              <button className="secondary-button" disabled>
                מקליט...
              </button>
            )}

            {status === "processing" && (
              <button className="secondary-button" disabled>
                מעבד...
              </button>
            )}

            {status === "done" && (
              <button className="ghost-button" onClick={reset}>
                ניסיון נוסף
              </button>
            )}
          </section>

          {result && (
            <section className="result-box">
              <p className="result-label">הטקסט שזוהה</p>
              <h3 className="result-text">{result}</h3>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}