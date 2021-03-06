import React, { useState } from "react";
import { useHistory } from "react-router";
//AWS
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

// Function for the user to be able to get a new password
export default function ForgotPassword({ email, setEmail }) {
  const [error, setError] = useState("");
  const history = useHistory();

  // function to check if the user is in the system
  const getUser = () => {
    if (!email) {
      email = "no email";
    }
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };

  // Sends out a code to the user if they are in the system and have verified their email
  const sendCode = (event) => {
    event.preventDefault();
    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess", data);
        history.push("/confirmation/codesent");
      },
      onFailure: (err) => {
        setError(err.message);
        console.log("onFailure", err);
      },
      InputVerificationCode: (data) => {
        console.log("Input code:", data);
      },
    });
  };

  return (
    <form onSubmit={sendCode}>
      {/* displays error messages */}
      <span id="email-error" className="govuk-error-message">
        <span className="govuk-visually-hidden">Error:</span> {error}
      </span>
      <h2 className="govuk-label-wrapper">
        <label className="govuk-label govuk-label--l" htmlFor="event-name">
          Enter your email address to reset your password
        </label>
      </h2>
      <label className="govuk-label" htmlFor="three-quarters">
        Email Address
      </label>
      <input
        className="govuk-input govuk-!-width-three-quarters"
        name="three-quarters"
        id="email"
        type="email"
        value={email}
        placeholder="Enter Email Address"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <br />
      <button className="govuk-button" data-module="govuk-button" type="submit">
        Send verification code
      </button>
    </form>
  );
}
