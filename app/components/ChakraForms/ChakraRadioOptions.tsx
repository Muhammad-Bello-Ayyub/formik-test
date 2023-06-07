'use client'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Radio, 
    Stack,
    RadioGroup, 
    Box
  }from '@chakra-ui/react'
  import { Field } from 'formik'
  import { useState } from 'react'
  
  function ChakraRadioOptions (props) {
    
    const { label, name, options, ...rest } = props
  
    const [value, setValue] = useState('1');
  
    return (
      <Field name={name} {...rest}>
  
        {({ field, form }) => {
          // return options.map(option => {
            return (
              <Box pt='2em'> {/* key={option.key}*/}
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                  {/* <FormLabel htmlFor={name} color={'blue.100'}>{label}</FormLabel> */}
                  <FormLabel htmlFor={name} color={'blue.100'}>Select:</FormLabel>
                  <RadioGroup  onChange={setValue} value={value}> 
                    <Stack direction='row'>
                      {/* <Radio colorScheme='green' value={option.value}>{option.key}</Radio> */}
                      <Radio colorScheme='green' value='one'>Option1</Radio>
                      <Radio colorScheme='green' value='two'>Option2</Radio>
                      <Radio colorScheme='green' value='three'>Option3</Radio>
                      <Radio colorScheme='green' value='four'>Option4</Radio>
                      <Radio colorScheme='green' value='five'>Option5</Radio>
                    </Stack>
                  </RadioGroup>
                  <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
              </Box>
            // )}
          )
        }}
      </Field>
    )
  }
  
  export default ChakraRadioOptions;