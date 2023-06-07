import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'
import FormikControl from '../FormikControl'

function LoginForm () {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              // control='input'
              control='chakraInput'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              // control='input'
              control='chakraInput'
              type='password'
              label='Password'
              name='password'
            />
            <Button type='submit' colorScheme="blue.600" width="full" disabled={!formik.isValid}>Submit</Button>
            {/* <button type='submit' disabled={!formik.isValid}>Submit</button> */}
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm;