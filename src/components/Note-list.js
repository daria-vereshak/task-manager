import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import styles from "./styles/Note-list.module.css";

const NoteList = () => {
  const notes = useSelector(state => state.mainPage.notes);
  console.log(notes);
  
  return (
    <div className={styles.list}>
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            <Note id={note.id} title={note.title} content={note.content} isDone={note.isDone}/>
          </li>
        )}
      </ul>
    </div>
  )
};

export default NoteList;