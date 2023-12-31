import React, { useDebugValue } from "react";
import styles from "./styles/form.module.css";
import FormInput from "./form-input";
import FormButton from "./form-button";
import { onSubmit } from "../utils/utils";
import { Dispatch } from "../store/store";
import { formToggle } from "../store/slices/authorization/authorization-slice";
import { useSelector } from "react-redux";

const Form = () => {
  const form = useSelector((state) => state.authorization);
  const error = useSelector((state) => state.authorization.error);

  const dispatch = Dispatch();

  const onToggleButtonClicked = () => {
    let newType;
    if (form.typeForm === "reg") newType = "auth";
    else newType = "reg";
    dispatch(
      formToggle({
        typeForm: newType,
        login: "",
        password: "",
        error: "",
      })
    );
  };

  if (form.typeForm === "reg") {
    return (
      <div className={styles.auth}>
        <form>
          <h2 className={styles.title}>Регистрация</h2>
          {error ? <p className={styles.error}>{error}</p>:null}
          <FormInput
            type="text"
            placeholder="Логин"
            isRequired={true}
            value={form.login}
          />
          <FormInput
            type="password"
            placeholder="Пароль"
            isRequired={true}
            value={form.password}
          />
          <FormButton
            text="Зарегистрироваться"
            onClick={(event) => onSubmit("reg", dispatch, event)}
          />
        </form>
        <button className={styles.button} onClick={onToggleButtonClicked}>
          Уже зарегистрированы? Авторизуйтесь!
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.auth}>
        <form>
          <h2 className={styles.title}>Авторизация</h2>
          {error ? <p className={styles.error}>{error}</p>:null}
          <FormInput
            type="text"
            placeholder="Логин"
            isRequired={true}
            value={form.login}
          />
          <FormInput
            type="password"
            placeholder="Пароль"
            isRequired={true}
            value={form.password}
          />
          <FormButton
            text="Войти"
            onClick={(event) => onSubmit("auth", dispatch, event)}
          />
        </form>
        <button className={styles.button} onClick={onToggleButtonClicked}>
          В первый раз? Зарегистрируйтесь!
        </button>
      </div>
    );
  }
};

export default Form;
