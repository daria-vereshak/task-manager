import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "../authorization/authorization-slice";
import { Dispatch } from "../../store";

const initialState = {
  notes: [
    { id: 1, title: "note", content: "new task", isDone: false },
    { id: 4, title: "another note", content: "done task", isDone: true },
  ],
  "12": [
    {id: 6, title: "another event", time:"18:00", isDone: false, date: "12.07.2023"},
  {id: 3, title: "task", time:"20:30", isDone: true, date: "12.07.2023"},
],
  "1": [
    {id: 2, title: "event", time:"12:00", isDone: true, date: "1.07.2023"},
  ],
  "17": [    
    {id: 5, title: "another task", time:"3:15", isDone: false, date: "17.07.2023"}
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