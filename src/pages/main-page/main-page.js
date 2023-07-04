import React from "react";
import { useSelector } from "react-redux";
import NoteList from "../../components/Note-list";
import styles from "./main-page.module.css"
import Header from "../../components/Header";
import Month from "../../components/Month";

const MainPage = () => {
  return (
    <div>
      <Header />
      <NoteList />
      <Month />
      
    </div>
  )
}

export default MainPage;