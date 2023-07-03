import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";
import styles from "./styles/Event.module.css";

const Events = (day) => {
  const events = useSelector(state => state.mainPage[day.day]);
  
  if(events)
    return (
      <>
        {events.map(event => 
          <Event 
            id={event.id} 
            title={event.title} 
            time={event.time}
            isDone={event.isDone}
          />
        )}
      </>
    )
  else return;
};

export default Events;