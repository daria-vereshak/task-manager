import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "../authorization/authorization-slice";
import { Dispatch } from "../../store";

const initialState = {
  notes: [
    { id: 1, title: "note", content: "new task", isDone: false },
    { id: 4, title: "another note", content: "done task", isDone: true },
  ]
};
const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    exit: (state) => {
      //очистить объекты
      Dispatch(signOut());
    }
  }
})

export const { exit } = mainPageSlice.actions;
export default mainPageSlice.reducer;