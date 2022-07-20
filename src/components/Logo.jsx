import { Flex, Heading, Image } from "@chakra-ui/react";
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
      <Flex w="60px" h="60px">
        <Image src={whiteLogo} alignSelf="center" />
      </Flex>
      <Heading size="sm" color="whiteAlpha.800">
        YALLAHUTS
      </Heading>
    </Flex>
  );
}

export default Logo;
