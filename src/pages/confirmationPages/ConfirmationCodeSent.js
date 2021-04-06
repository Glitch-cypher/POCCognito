import React from "react";
import serviceName from "../../variables";
import Confirmation from "../../components/ConfirmationTemplate";
export default function ConfirmationCodeSent({
  email = "testEmail@testEmail.com",
}) {
  const pageInfo = {
    boxTitle: "Password reset email sent",
    message: `We have sent an email to ${email}`,
    line1: `If the email address is registered with ${serviceName}, you will get a password reset link.`,
    link: "/forgotPassword/stage2",
    linkText: "Click me once you have the emailed code.",
  };
  return <Confirmation pageInfo={pageInfo} />;
}
