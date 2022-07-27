import {
  Button,
  Flex,
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
    <VStack direction="column" w="100%" pt={[8, 0]}>
      <Heading color="whiteAlpha.800" size="md" zIndex={2} align="center">
        Get notified once we launch
      </Heading>
      <SimpleGrid w="full" columns={[3, 4]} columnGap={2} rowGap={6} py={2}>
        <GridItem colSpan={[2, 3]}>
          <FormControl>
            <Input
              type="email"
              bg="gray.300"
              placeholder="Enter your email here"
              fontSize="14px"
              size="md"
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
              size="md"
              fontSize="12px"
              w="100%"
            >
              NOTIFY ME
            </Button>
          </FormControl>
        </GridItem>
        {successMessage && (
          <GridItem colSpan={3}>
            <FormControl>
              <FormHelperText color="green.300">
                {successMessage}
              </FormHelperText>
            </FormControl>
          </GridItem>
        )}
      </SimpleGrid>
      <Text
        fontSize={"16px"}
        color="#ADADAD"
        noOfLines={[2, 1]}
        textAlign="center"
      >
        We are creating a better and simplified experience in booking for tours
        & stays
      </Text>
    </VStack>
  );
}

export default SignUpForm;
