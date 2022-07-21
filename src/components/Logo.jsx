import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import whiteLogo from "../assets/images/logowhite.png";
function Logo() {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      alignItems="center"
      py={[6, 0]}
    >
      <Flex w="80px">
        <Image src={whiteLogo} alignSelf="center" />
      </Flex>
      <Heading size="xs" p={1} m={0} color="whiteAlpha.900">
        YALLAHUTS
      </Heading>
    </Flex>
  );
}

export default Logo;
