import React, { useContext } from "react";
import { MdCleaningServices, MdDeleteForever } from "react-icons/md";
import Context from "../scripts/context";

const Note = ({ id, text, date, isComplete, handleDeleteNote, setModal }) => {
  const { setClickedNote, notes } = useContext(Context);

  const noteClickFunction = (value) => {
    if (value.includes("note-effect")) {
      setModal((prev) => !prev);
    }
  };

  return (
    <div
      id={id}
      className={"note note-effect" + (isComplete ? " note-complete" : "")}
      onClick={(e) => {
        console.log(e.target);
        setClickedNote(notes.filter((item) => item.id === e.target.id)[0]);
        noteClickFunction(e.target.classList.value);
      }}
    >
      <span className="note-span">
        {text.substring(0, 40)}
        {text.length > 40 ? "..." : null}
      </span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => {
            handleDeleteNote(id);
          }}
          className="delete-icon icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
