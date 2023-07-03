import React from "react";
import styles from "./styles/Event.module.css"

const Event = ({id, title, time, isDone}) => {
  //format time
  return (
    <div id={id} className= {isDone ? styles.done : styles.event}>
      <p className={styles.eventText}>    
        <span className={styles.time}>{time}</span>
        {title}
      </p>
    </div>
  )
};

export default Event;