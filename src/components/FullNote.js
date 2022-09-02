import React, { useState, useContext } from "react";
import Tippy from "@tippyjs/react";
import { MdOutlineSystemUpdateAlt, MdDeleteForever } from "react-icons/md";
import Context from "../scripts/context";

const FullNote = ({ setModal }) => {
  const { updateNote, deleteNote, setClickedNote, clickedNote } =
    useContext(Context);
  const [noteText, setNoteText] = useState(clickedNote.text);

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length < 0) {
      setNoteText(event.target.value.substring(0, 200));
    } else {
      setNoteText(event.target.value);
    }
  };

  return (
    <div className="note-modal">
      <textarea
        className="fullNote__area"
        rows="25"
        cols="10"
        placeholder="Type to add a note..."
        style={{ marginBottom: "15px" }}
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <div className="icon-places">
          <Tippy content="Update" delay={[500, 0]}>
            <button
              onClick={() => {
                updateNote(clickedNote.id, noteText);
              }}
              className="icon-button"
              size="2em"
            >
              <MdOutlineSystemUpdateAlt
                className="update-icons icon"
                size="2em"
              />
            </button>
          </Tippy>
          <Tippy content="Delete" delay={[500, 0]}>
            <button
              onClick={() => {
                deleteNote(clickedNote.id);
                setModal((prev) => !prev);
              }}
              className="icon-button"
              size="2em"
            >
              <MdDeleteForever className="delete-icon icon" size="2em" />
            </button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default FullNote;
