import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, VStack } from "@chakra-ui/react";
import { Field, Formik } from "formik";

function ChakraLoginForm() {

  return ( // Using Formik Validation e.g

    <Flex bg="gray.400" align="center" justify="center" h="100vh">
      <Box bg="whiteAlpha.600" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start" color={'blackAlpha.900'}>
                <FormControl >
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as='input'
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as='input'
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage >{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as='checkbox'
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                  alignItems='center'
                >
                    <Checkbox border={'1px'} size={'sm'} /> Remember me?
                </Field>
                <Button type="submit" colorScheme="blue" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

export default ChakraLoginForm;