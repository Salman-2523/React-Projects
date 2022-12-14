import React from "react";
export default function Sidebar(props) {
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {props.notes.map((note) => (
        <div key={note.id}>
          <div
            className={`title ${
              note.id === props.currentNote.id ? "selected-note" : ""
            }`}
            onClick={() => props.setCurrentNoteId(note.id)}
          >
            <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
