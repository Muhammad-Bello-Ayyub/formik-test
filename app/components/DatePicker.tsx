import TextError from './TextError'
import styles from '../App.module.css';
import DateView from "react-datepicker";
import { Field, ErrorMessage } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'


function DatePicker (props) {

  const { label, name, ...rest } = props

  return (
    <div className={styles.formControl}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form //Allows to programmatically set fields value in the formik state
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage component={TextError } name={name} />
    </div>
  )
}

export default DatePicker;