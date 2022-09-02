import React, { useContext } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Context from "../scripts/context";

const CompleteArea = () => {
  const { setComplete, setClickedNote, clickedNote } = useContext(Context);

  return (
    <div className="CompleteArea">
      <AiFillCheckCircle
        className="complete-icons icon"
        color="green"
        size="2.6em"
        onClick={() => {
          setComplete(clickedNote.id, true);
        }}
      />
      <AiFillCloseCircle
        className="not_complete-icons icon"
        color="red"
        size="2.6em"
        onClick={() => {
          setComplete(clickedNote.id, false);
        }}
      />
    </div>
  );
};

export default CompleteArea;
