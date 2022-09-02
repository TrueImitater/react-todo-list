import { nanoid } from "nanoid";

export default [
  {
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2022",
    isComplete: true,
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "17/04/2022",
    isComplete: true,
  },
  {
    id: nanoid(),
    text: "This is very cool!",
    date: "18/04/2022",
    isComplete: false,
  },
];
