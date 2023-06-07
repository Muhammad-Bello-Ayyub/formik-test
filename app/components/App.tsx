'use client'

import { Box } from '@chakra-ui/react';
import FormikContainer from './FormikContainer';
import LoginForm from './ChakraForms/LoginForm';
import RegistrationForm from './RegistrationForm';
import EnrollmentForm from './EnrollmentForm';
import Head from 'next/head';
import ChakraInput from './ChakraForms/ChakraInput';
import ChakraLoginForm from './ChakraForms/ChakraLoginForm';

function App() {
  return (
    <main>
      <Head>Formik Form Data Sampples</Head>
      <Box>
        <FormikContainer />
      </Box>
      <Box mt='5em' mb='5em'>
        <ChakraLoginForm />
      </Box>
    </main>
  )
}

export default App;
   