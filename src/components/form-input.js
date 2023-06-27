import React from "react";
import styles from './styles/form-input.module.css';
import { Dispatch } from "../store/store";
import { changeLogin, changePassword } from "../store/slices/authorization/authorization-slice";

const FormInput = ({type = 'text', isRequired = false, placeholder = '', value=''}) => {
  const req = isRequired ? { required: true } : {};
  const dispatch = Dispatch();
  return(
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...req}
      value={value}
      onChange={event => type === 'text' ? dispatch(changeLogin(event.target.value)) : dispatch(changePassword(event.target.value))}
    />
  )
}

export default FormInput;