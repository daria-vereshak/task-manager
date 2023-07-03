import React from "react";
import styles from "./styles/Header.module.css";
import { Dispatch } from "../store/store";
import { Navigate } from "react-router-dom";
import { signOut } from "../store/slices/authorization/authorization-slice";


const Header = () => {
  const dispatch = Dispatch();
  const onExit = () => {
    dispatch(signOut());
    <Navigate to="/" />;
  }
  return (
    <header>
      <h1 className={styles.title}>Календарь</h1>
      <button className={styles.exit} onClick={onExit}>Выход</button>

    </header>
  );
};

export default Header;
