'use client'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text, 
  Textarea 
} from '@chakra-ui/react'
import { useState } from "react";
import { Field } from 'formik'

function ChakraTextarea(props) {

    const { label, name, ...rest } = props
    
    let [value, setValue] = useState('');

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel htmlFor={name}><Text mb='8px'>Enter Your Message:</Text></FormLabel>
                <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                />
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
            </FormControl>
        )
      }}
    </Field>
  )
}

export default ChakraTextarea;