import React from "react";

const Event = (id, title, time, isDone) => {
  //format time
  return (
    <div id={id} className= {isDone ? "event done" : "event"}>
      <p className="event__text">    
        <span className="time">{time}</span>
        {title}
      </p>
    </div>
  )
};

export default Event;