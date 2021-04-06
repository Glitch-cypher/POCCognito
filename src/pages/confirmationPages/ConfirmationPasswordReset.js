import React from "react";
import Confirmation from "../../components/ConfirmationTemplate";
export default function ConfirmationPasswordReset({ email }) {
  console.log(email);
  const pageInfo = {
    boxTitle: "Password Changed",
    boxInfo: "You have successfully changed the password associated with:",
    boxImportantInfo: email,
    message: "We have sent you a confirmation email.",
    line1: "We have sent you a confirmation email.",
    line2:
      "You can now use the password you just created to login to this service",
  };
  return <Confirmation pageInfo={pageInfo} />;
}
