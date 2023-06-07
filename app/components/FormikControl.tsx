'use client'

import Input from './Input'
import Select from './Select'
import TextArea from './Textarea'
import DatePicker from './DatePicker'
import RadioButton from './RadioButtons'
import CheckboxGroups from './CheckboxGroup'
import ChakraInput from './ChakraForms/ChakraInput'
import ChakraTextarea from './ChakraForms/ChakraTextarea'
import ChakraCheckboxGroups from './ChakraForms/ChakraCheckbox'
import ChakraRadioOptions from './ChakraForms/ChakraRadioOptions'
import ChakraSelectOPtions from './ChakraForms/ChakraSelectOPtions'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <RadioButton {...rest} />
    case 'checkbox':
      return <CheckboxGroups {...rest} />
    case 'date':
      return <DatePicker {...rest} />

      //Trying ChakraUI Library
    case 'chakraInput':
      return <ChakraInput {...rest} />
    case 'chakratextarea':
      return <ChakraTextarea {...rest} />
    case 'chakraCheckbox':
      return <ChakraCheckboxGroups {...rest} />
    case 'chakraRadioOption':
      return <ChakraRadioOptions {...rest} />
    case 'chakraSelectOptions':
      return <ChakraSelectOPtions {...rest} />
    default:
      return null;
  }
}

export default FormikControl