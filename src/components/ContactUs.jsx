import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaInbox,
  FaTelegram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function ContactUs() {
  return (
    <VStack>
      <Text fontSize="md" color="white" pt={4}>
        Stay in touch
      </Text>
      {/* <Button
        leftIcon={<FaPhoneAlt />}
        variant="ghost"
        color="white"
        _hover={{
          bg: "gray.600",
        }}
      >
        <a href="tel:+256 771 077 244">+256 771 077 244</a>
      </Button> */}
      {/* icons  */}
      <HStack>
        <IconButton
          aria-label="email"
          icon={<MdOutlineEmail />}
          variant="outline"
          color="white"
          _hover={{
            bg: "red.400",
          }}
          isRound
          onClick={() => {
            // mail to yallahuts@gmail.com
            window.location.href = "mailto:" + "yallahuts@gmail.com";
          }}
        />
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
          aria-label="instagram"
          icon={<FaInstagram />}
          variant="outline"
          color="white"
          isRound
          _hover={{
            bg: "purple.500",
          }}
          onClick={() => window.open("https://instagram.com/yallahuts")}
        />
        <IconButton
          aria-label="telegram"
          icon={<FaTelegram />}
          variant="outline"
          color="white"
          isRound
          _hover={{
            bg: "telegram.500",
          }}
          onClick={() => {
            window.location.href = "https://telegram.me/yallahuts";
          }}
        />
        <IconButton
          aria-label="whatsapp"
          icon={<FaWhatsapp />}
          variant="outline"
          color="white"
          isRound
          _hover={{
            bg: "whatsapp.500",
          }}
          onClick={() => {
            window.location.href = "https://wa.me/256753768771";
          }}
        />
      </HStack>
    </VStack>
  );
}

export default ContactUs;
