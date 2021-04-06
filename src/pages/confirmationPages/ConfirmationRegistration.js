import React from "react";
import Confirmation from "../../components/ConfirmationTemplate";
export default function ConfirmationRegistration({ email }) {
  console.log(email);
  const pageInfo = {
    boxTitle: "Application complete",
    boxInfo: "You registered with the following email address",
    boxImportantInfo: email,
    message: "We have sent you a confirmation email.",
    line1:
      "We have sent you a confirmation email, with a verification link inside.",
    line2:
      "To activate your account, click the link within the email. Once this is confirmed you can log in with your email address and password.",
  };
  return <Confirmation pageInfo={pageInfo} />;
}
