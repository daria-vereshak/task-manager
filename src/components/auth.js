import React from "react";
import styles from './styles/auth.module.css';
import Form from './form'


const Auth = ({typeForm, login, password, error}) => {
  return(
    <div className={styles.wrap}>
      <Form type={typeForm} login={login} password={password} error={error}/>
    </div>
  )
}

export default Auth;