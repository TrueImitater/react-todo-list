import React, { useEffect, useMemo, useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import useNotes from "./hooks/useNotes";
import Modal from "./components/Modal";
import Context from "./scripts/context";

function App() {
  const [notes, setNotes, addNote, deleteNote, updateNote, setComplete] =
    useNotes();
  const [modal, setModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [clickedNote, setClickedNote] = useState("");

  useEffect(() => {
    if (localStorage.length == 0) {
      localStorage.setItem("react-notes-array", JSON.stringify(notes));
    } else {
      setNotes(JSON.parse(localStorage.getItem("react-notes-array")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-array", JSON.stringify(notes));
  }, [notes]);

  return (
    <Context.Provider
      value={{
        notes,
        updateNote,
        deleteNote,
        setClickedNote,
        clickedNote,
        setComplete,
      }}
    >
      <div className="container">
        {modal && <Modal setModal={setModal} />}
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.trim().toLowerCase())
          )}
          setModal={setModal}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
