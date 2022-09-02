import { useEffect } from "react";

const useStorage = (notes, setNotes) => {
  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("react-notes-array", JSON.stringify(notes));
    } else {
      setNotes(JSON.parse(localStorage.getItem("react-notes-array")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-array", JSON.stringify(notes));
  }, [notes]);
};

export default useStorage;
