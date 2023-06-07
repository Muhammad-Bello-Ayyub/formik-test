'use client'

import * as Yup from 'yup'
import styles from '../App.module.css'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import { Button } from '@chakra-ui/react'

//The Container Component, This is where we write and test our code on the browser

function FormikContainer () {
  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
  })

  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='chakraInput' //Using ChakraUI for form styles instead of (input comps)
            type='email'
            label='Email'
            name='email'
            // className={styles.input}
          /> 
          <FormikControl
            control='chakratextarea' //Using ChakraUI for form styles instead of (textarea comps)
            label='Description'
            name='description'
            // className={styles.textarea}
          />
          <FormikControl
            control='chakraSelectOptions'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
            // className={styles.select}
          />
          <FormikControl
            control='chakraRadioOption' //Using ChakraUI for form styles instead of (chakraRadioOptions comps)
            label='Radio topic'
            name='radioOption'
            options={radioOptions}
            // className={styles.radio}
          />
          <FormikControl
            control='chakraCheckbox' //Using ChakraUI for form styles instead of (chakraCheckbox comps)
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions}
            // className={styles.checkbox}
          />
          <FormikControl
            control='date'
            label='Pick a date'
            name='birthDate'
          />
          <Button type='submit' colorScheme='blue'>Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer;