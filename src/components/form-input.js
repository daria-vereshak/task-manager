import React from "react";
import styles from './styles/form-input.module.css';

const FormInput = ({type = 'text', isRequired = false, placeholder = ''}) => {
  const req = isRequired ? { required: true } : {};
  
  return(
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...req}
    />
  )
}

export default FormInput;