// 'use client'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
    Box,
}from '@chakra-ui/react'
import { Field } from 'formik'

function ChakraSelectOPtions (props) {
    
    const { label, name, options, ...rest } = props
  
    return (
      <Field name={name} {...rest} as='select'>
        {({ field, form }) => {
          // return options.map(option => {
            return (
                <Box pt='2em'>  {/* key={option.key}*/} 
                    <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        {/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
                        <FormLabel htmlFor={name} color={'blue.100'}>Choose Option:</FormLabel>
                        <Select placeholder='Select option'>
                          {/* <option key={option.value} value={option.value}>
                              {option.key}
                          </option> */}
                          <option value='option1'>Option 1</option>
                          <option value='option2'>Option 2</option>
                          <option value='option2'>Option 3</option>
                          <option value='option2'>Option 4</option>
                          <option value='option2'>Option 5</option>
                          <option value='option3'>Option 6</option>
                        </Select>
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                </Box>
            // )}
          )
        }}
      </Field>
    )
}

export default ChakraSelectOPtions;