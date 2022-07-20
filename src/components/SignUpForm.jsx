import {
  Button,
  FormControl,
  FormHelperText,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

function SignUpForm({ status, message, onValidated }) {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);

  useEffect(() => {
    if (status === "success") {
      setSuccessMessage(
        "You have successfully subscribed to our mailing list!"
      );
      setEmail(null);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    // check if enter is pressed
    if (e.keyCode === "Enter") {
      onValidated({ EMAIL: email });
    }
    if (email && email.includes("@")) {
      //   validate email
      onValidated({ EMAIL: email });
    }
    {
      setError("Please enter a valid email address");
    }
  };
  return (
    <VStack w="100%">
      <Heading color="white" size="md" zIndex={2} align="center">
        Get notified once we launch
      </Heading>
      <SimpleGrid w="full" columns={3} columnGap={3} rowGap={6}>
        <GridItem colSpan={2}>
          <FormControl>
            <Input
              type="email"
              bg="gray.300"
              placeholder="Enter your email here"
              fontSize="14px"
              size="lg"
              htmlSize={2}
              mx="0px"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <Button
              onClick={handleSubmit}
              type="submit"
              colorScheme="orange"
              size="lg"
              fontSize="14px"
              w="100%"
            >
              NOTIFY ME
            </Button>
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl>
            <FormHelperText color="green.300">{successMessage}</FormHelperText>
          </FormControl>
        </GridItem>
      </SimpleGrid>
      <Text
        fontSize="14px"
        lineHeight="24px"
        color="#ADADAD"
        noOfLines={[2, 1]}
        textAlign="center"
      >
        We are revolutionizing the way you book your stays, tours & travels
      </Text>
    </VStack>
    // <FormControl w="full" onSubmit={handleSubmit}>
    //   <HStack w="100%">
    //     <Input
    //       type="email"
    //       //   isInvalid={error ? true : false}
    //       bg="gray.300"
    //       placeholder="Enter your email here"
    //       fontSize="14px"
    //       size="lg"
    //       htmlSize={2}
    //       mx="0px"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <Button
    //       onClick={handleSubmit}
    //       type="submit"
    //       colorScheme="orange"
    //       size="lg"
    //       fontSize="14px"
    //     >
    //       NOTIFY ME
    //     </Button>
    //   </HStack>
    // </FormControl>
  );
}

export default SignUpForm;
