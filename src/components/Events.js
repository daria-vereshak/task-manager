import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import Event from "./Event";
import styles from "./styles/Event.module.css";
import { getEventsAsync } from "../store/slices/main-page/main-page-slice";
import { Dispatch } from "../store/store";

const Events = ({day, month, year}) => {
  const events = useSelector(state => state.mainPage.events[day + "." + month + "." + year]);
  const eventsStatus = useSelector(state => state.mainPage.statusEvents);
  const error = useSelector(state => state.mainPage.errorEvents);
  const dispatch = Dispatch();
  
  useEffect(() => {
    if(eventsStatus === 'idle') {
      dispatch(getEventsAsync(day + "." + month + "." + year));
    }    
  },[eventsStatus, dispatch]);
  
  let content;
  if(eventsStatus === 'loading') {
    content = <div>Загружаемся...</div>;
  } else if (eventsStatus === 'succeeded' && events) {
    content = events.map(event => 
      <Event 
        id={event.id} 
        title={event.header} 
        time={event.time}
        isDone={event.isdone}
      />
    );
  } else if(eventsStatus === 'succeeded') {
    content = <div></div>;
  }else if (eventsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <>
      {content}
    </>
  )
};

export default Events;