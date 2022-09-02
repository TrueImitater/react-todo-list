import { useState } from "react";
import { nanoid } from "nanoid";
import startNotes from "../scripts/startNotes";

const useNotes = () => {
  console.log("Вызвался useNotes");
  const [notes, setNotes] = useState(startNotes);

  const addNote = (text) => {
    setNotes((prev) => [
      ...prev,
      {
        id: nanoid(),
        text: text,
        date: new Date().toLocaleDateString(),
        isComplete: false,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const updateNote = (id, text) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text } : note)));
  };

  const setComplete = (id, isComplete) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, isComplete } : note))
    );
  };

  return [notes, setNotes, addNote, deleteNote, updateNote, setComplete];
};

export default useNotes;
