import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import {Dispatch} from "../store/store";
import Note from "./Note";
import styles from "./styles/Note-list.module.css";
import { getNotesAsync } from '../store/slices/main-page/main-page-slice';

const NoteList = () => {
  const notes = useSelector(state => state.mainPage.notes);
  const notesStatus = useSelector(state => state.mainPage.statusNotes);
  const error = useSelector(state => state.mainPage.errorNotes);
  const dispatch = Dispatch();

  useEffect(()=>{
    if(notesStatus === 'idle') {
      dispatch(getNotesAsync());
    }    
  },[notesStatus, dispatch]);
  
  let content;
  if(notesStatus === 'loading') {
    content = <div>Загружаемся...</div>;
  } else if (notesStatus === 'succeeded') {
    content = notes.map(note => 
      <li key={note.id}>
        <Note id={note.id} title={note.header} content={note.content} isDone={note.isdone}/>
      </li>
    );
  } else if (notesStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className={styles.list}>
      <ul>
        {content}
      </ul>
    </div>
  )
};

export default NoteList;