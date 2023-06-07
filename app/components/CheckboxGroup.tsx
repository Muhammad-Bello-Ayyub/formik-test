import React from 'react'
import styles from '../App.module.css'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

function CheckboxGroup(props) {
  
    const { label, name, options, ...rest } = props
  
    return (
      <div className={ styles.formControl }>
        <label className={styles.label}>{label}</label>
        <Field name={name}  {...rest}>
          {({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    type='checkbox'
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                    className={styles.checkbox}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
  }

export default CheckboxGroup;