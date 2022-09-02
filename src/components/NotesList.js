import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, handleAddNote, handleDeleteNote, setModal }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          setModal={setModal}
          key={note.id}
          id={note.id}
          text={note.text}
          isComplete={note.isComplete}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
