import React from "react";
import styles from './styles/authorization.module.css';
import Form from './form'
const Authorization = () => {
  return(
    <div className='auth'>
      <Form type="auth"/>
    </div>
  )
}

export default Authorization;