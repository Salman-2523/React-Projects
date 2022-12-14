import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "./utils/localStorage";
import "./style.css";
export default function App() {
  const allNotes = getItemFromLocalStorage("notes");
  const [notes, setNotes] = React.useState(() => allNotes || []);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    setItemToLocalStorage("notes", notes);
  }, [notes]);

  // console.log(notes);
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      let updatedArr = [];
      oldNotes.map((note) => {
        if (note.id === currentNoteId) {
          const updatedNote = { ...note, body: text };
          updatedArr.unshift(updatedNote);
        } else {
          updatedArr.push(note);
        }
      });
      return updatedArr;
    });

    // setNotes((oldNotes) =>
    //   oldNotes.map((oldNote) => {
    //     return oldNote.id === currentNoteId
    //       ? { ...oldNote, body: text }
    //       : oldNote;
    //   })
    // )
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event,noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => {
      return oldNotes.filter((note) => note.id !== noteId);
    });
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
