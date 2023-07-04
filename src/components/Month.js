import React from "react";
import { useSelector } from "react-redux";
import Events from "./Events";
import styles from "./styles/Month.module.css";

const Month = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const daysNumber = new Date(year, month, 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const daysOfWeek = ["вс", "пн","вт","ср","чт","пт","сб"];

  let emptyDaysBefore = [];  
  let monthCalendar = [];
  let emptyDaysAfter = [];
  for (let i = 1; i <= 35; i++) {
    if (i < firstDay) {
      emptyDaysBefore.push(i);
    }
    else if (i <= firstDay + daysNumber) {
      monthCalendar.push(i - firstDay + 1);
    }
    else {
      emptyDaysAfter.push(i);
    }
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.month}>
        {emptyDaysBefore.map(day =>
          <div className={styles.empty}>
            <p className={styles.dayName}>{daysOfWeek[day % 7]}</p>
          </div>
        )}
        {monthCalendar.map(day =>
          <div className={styles.monthDay}>
            <p className={styles.dayName}>{daysOfWeek[(day + firstDay - 1) % 7]}</p>
            <div className={styles.date}>{day}</div>
            <Events day={day} month={month} year={year} />
          </div>
        )}
      </div>
    </div>
  )
};

export default Month;