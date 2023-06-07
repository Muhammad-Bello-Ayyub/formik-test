import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Box
  }from '@chakra-ui/react'
  import { Field } from 'formik'
  
  function ChakraCheckboxGroups(props) {
    
    const { label, name, options, ...rest } = props
  
    return (
      <Field name={name}>
        {({ field, form }) => {
          // return options.map(option => {
            return (
              <Box pt='2em' pb='2em'> {/* key={option.key}*/}
                <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                  {/* <FormLabel htmlFor={name}>{label}</FormLabel> */}
                  <FormLabel htmlFor={name} color={'blue.100'}>Check Only One:</FormLabel>
                  {/* <Checkbox colorScheme='green' value={option.value}>{option.key}</Checkbox> */}
                  <Checkbox colorScheme='green' value='1'>Option1</Checkbox>
                  <Checkbox colorScheme='green' value='2'>Option2</Checkbox>
                  <Checkbox colorScheme='green' value='3'>Option3</Checkbox>
                  <Checkbox colorScheme='green' value='4'>Option4</Checkbox>
                  <Checkbox colorScheme='green' value='5'>Option5</Checkbox>
                  <Checkbox colorScheme='green' value='6'>Option6</Checkbox>
                  <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                </FormControl>
              </Box>
            // )}
          )
        }}
      </Field>
    )
  }
  
  export default ChakraCheckboxGroups;