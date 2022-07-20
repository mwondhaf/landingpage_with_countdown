import { Flex } from "@chakra-ui/react";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SignUpForm from "./SignUpForm";

function MailChimpFormContainer() {
  const url =
    "https://gmail.us17.list-manage.com/subscribe/post?u=d1b411008f2633309a39b2fa0&amp;id=a87051a8bd";
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
