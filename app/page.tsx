'use client'

import { Box } from '@chakra-ui/react';
import App from './components/App';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box color='red' pb='2em'>
        Hello, Formik... Click Below to get Started.
      </Box>
      <App />
    </main>
  )
}