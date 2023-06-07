import TextError from './TextError'
import styles from '../App.module.css';
import { Field, ErrorMessage } from 'formik'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className={ styles.formControl }>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select;