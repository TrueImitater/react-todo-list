import React from "react";
import FullNote from "./FullNote";
import CompleteArea from "./CompleteArea";

const Modal = ({ setModal }) => {
  return (
    <div
      className="Modal"
      onClick={(e) => {
        if (e.target.classList.value.includes("Modal")) {
          setModal((prev) => !prev);
        }
      }}
    >
      <FullNote setModal={setModal} />
      <CompleteArea />
    </div>
  );
};

export default Modal;
