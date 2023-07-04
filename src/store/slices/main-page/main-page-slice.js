import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signOut } from "../authorization/authorization-slice";
import { Dispatch } from "../../store";
import NotesRequests from "../../../api/requests/notes/notes";

export const getNotesAsync = createAsyncThunk(
  'notes/getNotesAsync',
  async(_,{rejectWithValue}) => {
    try {
      const {data} = await NotesRequests.getRecords();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const getEventsAsync = createAsyncThunk(
  'notes/getEventsAsync',
  async(day,{rejectWithValue}) => {
    try {
      const body = {
        day: day
      }
      const {data} = await NotesRequests.getEvents(body);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  notes: [],
  statusNotes: 'idle',//loading, succeeded, failed
  errorNotes: '',
  events:{},
  statusEvents: 'idle',//loading, succeeded, failed
  errorEvents: '',
  // notes: [
  //   { id: 1, title: "note", content: "new task", isDone: false },
  //   { id: 4, title: "another note", content: "done task", isDone: true },
  // ],
//   "12": [
//     {id: 6, title: "another event", time:"18:00", isDone: false, date: "12.07.2023"},
//   {id: 3, title: "task", time:"20:30", isDone: true, date: "12.07.2023"},
// ],
//   "1": [
//     {id: 2, title: "event", time:"12:00", isDone: true, date: "1.07.2023"},
//   ],
//   "17": [    
//     {id: 5, title: "another task", time:"3:15", isDone: false, date: "17.07.2023"}
//   ]
};
const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    exit: (state) => {
      //очистить объекты
      Dispatch(signOut());
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getNotesAsync.pending, (state, action) => {
        state.statusNotes = 'loading';
      })
      .addCase(getNotesAsync.fulfilled, (state, action) => {
        state.statusNotes = 'succeeded';
        state.notes = action.payload;
      })
      .addCase(getNotesAsync.rejected, (state, action) => {
        state.statusNotes = 'failed';
        state.errorNotes = action.error.message;
      })
      .addCase(getEventsAsync.pending, (state, action) => {
        state.statusEvents = 'loading';
      })
      .addCase(getEventsAsync.fulfilled, (state, action) => {
        state.statusEvents = 'succeeded';
        state.events[action.payload.day] = action.payload.data;
      })
      .addCase(getEventsAsync.rejected, (state, action) => {
        state.statusEvents = 'failed';
        state.errorEvents = action.error.message;
      })
  }
})

export const { exit } = mainPageSlice.actions;
export default mainPageSlice.reducer;