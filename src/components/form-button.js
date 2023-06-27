import React from "react";
import styles from './styles/form-button.module.css';

const FormButton = ({text, onClick}) => {
  return(
    <button className={styles.button} onClick = {onClick}>{text}</button>
  )
}

export default FormButton;