import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

import bgImage from "../assets/images/bg.jpeg";

import MailChimpFormContainer from "../components/MailChimpFormContainer";
import Logo from "../components/Logo";
import CountDown from "../components/CountDown";
import ContactUs from "../components/ContactUs";

function Landing() {
  // const bgImage =
  //   "https://images.pexels.com/photos/2387872/pexels-photo-2387872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <Box
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="100vh"
      w={"full"}
      bgSize="cover"
      pt={[1, 2]}
      pb={[24, 1]}
      overflowY="scroll"
    >
      <Container centerContent h="100%">
        <Flex direction="column" justify="space-around" spacing="auto" h="100%">
          <Logo />
          <Heading color="white" size={["lg", "xl"]} align="center">
            We are launching soon
          </Heading>
          <CountDown />
          <MailChimpFormContainer />
          <ContactUs />
        </Flex>
      </Container>
    </Box>
  );
}

export default Landing;
