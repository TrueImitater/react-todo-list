import React, { useState } from "react";
import tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length < 0) {
      setNoteText(event.target.value.substring(0, 200));
    } else {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        rows="6"
        cols="10"
        placeholder="Type to add a note..."
        style={{ marginBottom: "15px" }}
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick} id="myButton">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
