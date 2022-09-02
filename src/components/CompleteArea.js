import React, { useContext } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Context from "../scripts/context";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const CompleteArea = () => {
  const { setComplete, setClickedNote, clickedNote } = useContext(Context);

  return (
    <div className="CompleteArea">
      <Tippy delay={[500, 0]} className="Tippy" content={"Mark as completed"}>
        <button
          className="icon-button"
          onClick={() => {
            setComplete(clickedNote.id, true);
          }}
        >
          <AiFillCheckCircle
            className="complete-icons icon"
            color="green"
            size="2.6em"
          />
        </button>
      </Tippy>
      <Tippy
        delay={[500, 0]}
        placement="bottom"
        className="Tippy"
        content={"Mark as not completed"}
      >
        <button
          className="icon-button"
          onClick={() => {
            setComplete(clickedNote.id, false);
          }}
        >
          <AiFillCloseCircle
            className="not_complete-icons icon"
            color="red"
            size="2.6em"
          />
        </button>
      </Tippy>
    </div>
  );
};

export default CompleteArea;
