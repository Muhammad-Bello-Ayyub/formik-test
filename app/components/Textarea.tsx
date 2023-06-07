import TextError from './TextError'
import styles from '../App.module.css';
import { Field, ErrorMessage } from 'formik'

function TextArea (props) {
  const { label, name, ...rest } = props
  return (
    <div className={ styles.formControl }>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} rows='6'/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default TextArea;