import React from "react";
import styles from "./styles/Note.module.css"

const Note = ({id, title, content, isDone}) => {
  return (
    <div id={id} className={isDone ? styles.done: ""}>
      <div className="task__content">
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.content}>{content}</p>
      </div>        
    </div>
  )
};

export default Note;