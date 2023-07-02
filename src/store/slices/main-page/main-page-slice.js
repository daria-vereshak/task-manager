import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { id: 1, title: "note", content: "new task", isDone: false },
    { id: 4, title: "another note", content: "done task", isDone: true },
  ]
};
const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {}
})

export default mainPageSlice.reducer;