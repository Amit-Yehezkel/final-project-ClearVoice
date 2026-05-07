import { useState } from "react";
import AppHeader from "../components/AppHeader";
import PageTitle from "../components/PageTitle";
import PhraseRecordingsModal from "../components/PhraseRecordingsModal";
import { initialPhrases, initialRecordings } from "../data/mockData";

function getTodayDate() {
  return new Date().toLocaleDateString("he-IL");
}

export default function LearningPage() {
  const [phrases, setPhrases] = useState(initialPhrases);
  const [phraseRecordings, setPhraseRecordings] = useState(initialRecordings);
  const [newPhrase, setNewPhrase] = useState("");
  const [searchText, setSearchText] = useState("");
  const [activeRecordingId, setActiveRecordingId] = useState(null);
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const filteredPhrases = phrases.filter((phrase) =>
    phrase.label.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  function getRecordingsCount(phraseId) {
    return phraseRecordings[phraseId]?.length || 0;
  }

  function addPhrase(event) {
    event.preventDefault();

    const cleanPhrase = newPhrase.trim();

    if (!cleanPhrase) {
      return;
    }

    const phrase = {
      id: Date.now(),
      label: cleanPhrase,
    };

    setPhrases([phrase, ...phrases]);

    setPhraseRecordings({
      ...phraseRecordings,
      [phrase.id]: [],
    });

    setNewPhrase("");
  }

  function addRecording(phraseId) {
    setActiveRecordingId(phraseId);

    setTimeout(() => {
      setPhraseRecordings((currentRecordings) => {
        const currentPhraseRecordings = currentRecordings[phraseId] || [];

        const newRecording = {
          id: Date.now(),
          name: `הקלטה ${currentPhraseRecordings.length + 1}`,
          date: getTodayDate(),
        };

        return {
          ...currentRecordings,
          [phraseId]: [...currentPhraseRecordings, newRecording],
        };
      });

      setActiveRecordingId(null);
    }, 1200);
  }

  function deleteRecording(phraseId, recordingId) {
    setPhraseRecordings((currentRecordings) => {
      const currentPhraseRecordings = currentRecordings[phraseId] || [];

      return {
        ...currentRecordings,
        [phraseId]: currentPhraseRecordings.filter(
          (recording) => recording.id !== recordingId
        ),
      };
    });
  }

  return (
    <div className="app">
      <AppHeader />

      <main className="page">
        <div className="page-container">
          <PageTitle
            eyebrow="בניית מחסן מילים קולי"
            title="מצב למידה"
            description="ניתן להוסיף מילים וביטויים שהמערכת תזהה, ולהקליט עבור כל אחד מהם כמה דגימות קול."
          />

          <section className="panel">
            <h3 className="card-title">הוספת ביטוי חדש</h3>

            <p className="card-text">
              יש להזין מילה או משפט קצר שהמערכת תזהה.
            </p>

            <form className="add-row" onSubmit={addPhrase}>
              <input
                className="form-input"
                value={newPhrase}
                onChange={(event) => setNewPhrase(event.target.value)}
                placeholder="לדוגמה: אני רוצה מים"
              />

              <button
                className="primary-button learning-primary-button"
                type="submit"
              >
                הוספת ביטוי
              </button>
            </form>
          </section>

          <section className="phrase-search-wrapper">
            <input
              className="phrase-search-input"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="חיפוש מילה..."
            />
          </section>

          <section className="phrase-list">
            {filteredPhrases.map((phrase) => {
              const isRecording = activeRecordingId === phrase.id;

              return (
                <article className="card phrase-card" key={phrase.id}>
                  <div>
                    <h3 className="phrase-name">{phrase.label}</h3>

                    <p className="phrase-meta">
                      {getRecordingsCount(phrase.id)} דגימות קול שמורות
                    </p>
                  </div>

                  <div className="phrase-actions">
                    <button
                      className="secondary-button"
                      onClick={() => addRecording(phrase.id)}
                      disabled={isRecording}
                    >
                      {isRecording ? "מקליט..." : "הוספת דגימה"}
                    </button>

                    <button
                      className="ghost-button"
                      onClick={() => setSelectedPhrase(phrase)}
                    >
                      עריכה
                    </button>
                  </div>
                </article>
              );
            })}

            {filteredPhrases.length === 0 && (
              <p className="empty-search-text">לא נמצאו ביטויים מתאימים.</p>
            )}
          </section>
        </div>
      </main>

      {selectedPhrase && (
        <PhraseRecordingsModal
          phrase={selectedPhrase}
          recordings={phraseRecordings[selectedPhrase.id] || []}
          isAddingRecording={activeRecordingId === selectedPhrase.id}
          onClose={() => setSelectedPhrase(null)}
          onAddRecording={() => addRecording(selectedPhrase.id)}
          onDeleteRecording={(recordingId) =>
            deleteRecording(selectedPhrase.id, recordingId)
          }
        />
      )}
    </div>
  );
}