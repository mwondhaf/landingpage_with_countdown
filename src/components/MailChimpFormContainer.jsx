import { Flex } from "@chakra-ui/react";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SignUpForm from "./SignUpForm";

function MailChimpFormContainer() {
  const url = import.meta.env.VITE_MAILCHIMP_URL;
  return (
    <Flex w="100%">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <SignUpForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </Flex>
  );
}

export default MailChimpFormContainer;
