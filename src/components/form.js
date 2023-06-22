import React from "react";
import styles from './styles/form.module.css';
import FormInput from "./form-input";
import FormButton from "./form-button";

const Form = ({type}) => {
  return(
    <form className={styles.auth}>
      <h2 className={styles.title}>{type === "auth" ? "Авторизация" : "Регистрация"}</h2>
        <FormInput type="text" placeholder="Логин" isRequired = {true} />
        <FormInput type="password" placeholder="Пароль" isRequired = {true} />
        <FormButton text = "Войти" onClick={()=>{}} />
        <button className={styles.button} onClick={()=>{}}>{type === "auth" ? "В первый раз? Зарегистрируйтесь!" : "Уже зарегестрированы? Авторизуйтесь!"}</button>
      </form>
  )
}

export default Form;