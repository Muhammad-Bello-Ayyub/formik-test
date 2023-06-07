// 'use client'

// import styles from '../App.module.css'
// import { } from '@chakra-ui/react'


import React from 'react';
import TextError from './TextError'
import styles from '../App.module.css';
import { Field, ErrorMessage } from 'formik'

function RadioButtons (props) {

  const { label, name, options, ...rest } = props
  
  return (
    <div className={ styles.formControl }>
      <label className={styles.label}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                  className={styles.radio}
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

export default RadioButtons;