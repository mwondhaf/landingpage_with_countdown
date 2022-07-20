import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

function ContactUs() {
  return (
    <VStack>
      <Text fontSize="md" color="white" pt={4}>
        Call us today
      </Text>
      <Button
        leftIcon={<FaPhoneAlt />}
        variant="ghost"
        color="white"
        _hover={{
          bg: "gray.600",
        }}
      >
        <a href="tel:+256 771 077 244">+256 771 077 244</a>
      </Button>
      {/* icons  */}
      <HStack>
        <IconButton
          aria-label="facebook"
          icon={<FaFacebookF />}
          variant="outline"
          color="white"
          _hover={{
            bg: "facebook.500",
          }}
          isRound
          onClick={() => window.open("https://facebook.com/yallahuts")}
        />
        <IconButton
          aria-label="twitter"
          icon={<FaTwitter />}
          variant="outline"
          color="white"
          _hover={{
            bg: "twitter.500",
          }}
          isRound
          onClick={() => window.open("https://twitter.com/yallahuts")}
        />
        <IconButton
          aria-label="twitter"
          icon={<FaInstagram />}
          variant="outline"
          color="white"
          isRound
          _hover={{
            bg: "purple.500",
          }}
          onClick={() => window.open("https://instagram.com/yallahuts")}
        />
      </HStack>
    </VStack>
  );
}

export default ContactUs;
