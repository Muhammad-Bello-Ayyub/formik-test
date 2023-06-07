'use client'

import TextError from "./TextError"
import styles from '../App.module.css';
import { ErrorMessage, Field } from "formik"

function Input(props) {

  const { label, name, ...rest } = props

  return (
    <div className={ styles.formControl }>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input