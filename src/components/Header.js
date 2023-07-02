import React from "react";
import FormButton from "./form-button";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <header>
    <h1 className={styles.title}>Календарь</h1>
    <form action="#" method="post">
      <div className={styles.exit}>
      <FormButton text="Выход" onClick={()=>{}} />
      </div>
      {/* <input type="submit" value="Выйти" name="exit" className="exit"> */}
    </form>
  </header>
  )
};

export default Header;