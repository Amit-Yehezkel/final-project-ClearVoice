import { useState } from "react";

export default function PhraseRecordingsModal({
  phrase,
  recordings,
  isAddingRecording,
  onClose,
  onAddRecording,
  onDeleteRecording,
}) {
  const [playingRecordingId, setPlayingRecordingId] = useState(null);

  function togglePlay(recordingId) {
    if (playingRecordingId === recordingId) {
      setPlayingRecordingId(null);
      return;
    }

    setPlayingRecordingId(recordingId);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="recordings-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="modal-kicker">ניהול דגימות קול</span>
            <h2>עריכת ביטוי: {phrase.label}</h2>
          </div>

          <button
            className="modal-close-button"
            onClick={onClose}
            aria-label="סגירת החלון"
            type="button"
          >
            ×
          </button>
        </div>

        <div className="modal-recordings-list">
          {recordings.length > 0 ? (
            recordings.map((recording) => {
              const isPlaying = playingRecordingId === recording.id;

              return (
                <article className="modal-recording-row" key={recording.id}>
                  <div>
                    <h3>{recording.name}</h3>
                    <p>נשמרה בתאריך {recording.date}</p>
                  </div>

                  <div className="modal-recording-actions">
                    <button
                      className={`modal-play-button ${
                        isPlaying ? "playing" : ""
                      }`}
                      onClick={() => togglePlay(recording.id)}
                      type="button"
                    >
                      {isPlaying ? "מתנגן..." : "השמעה"}
                    </button>

                    <button
                      className="modal-delete-icon-button"
                      onClick={() => onDeleteRecording(recording.id)}
                      aria-label="מחיקת הקלטה"
                      title="מחיקה"
                      type="button"
                    >
                      ×
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="modal-empty-text">
              עדיין לא נשמרו דגימות קול עבור הביטוי הזה.
            </p>
          )}
        </div>

        <div className="modal-bottom-actions">
          <button
            className="primary-button learning-primary-button"
            onClick={onAddRecording}
            disabled={isAddingRecording}
            type="button"
          >
            {isAddingRecording ? "מקליט..." : "הוספת הקלטה חדשה"}
          </button>

          <button className="ghost-button" onClick={onClose} type="button">
            סגירה
          </button>
        </div>
      </section>
    </div>
  );
}