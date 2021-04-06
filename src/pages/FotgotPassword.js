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
        history.push("/confirmation/codeSent");
      },
      onFailure: (err) => {
        setError(err);
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
      <p>{error}</p>

      {/* stage 1 is where the user puts in their email in order to recieve a code. moves on to stage 2 once an email that is in the system is selected */}
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <h2 className="govuk-label-wrapper">
            <label className="govuk-label govuk-label--l" htmlFor="event-name">
              Enter your email address to reset your password
            </label>
          </h2>
          <label className="govuk-label" for="three-quarters">
          Email Address
        </label>
        <input
          className="govuk-input govuk-!-width-three-quarters"
            name="three-quarters"
            id="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className="govuk-button"
            data-module="govuk-button"
            type="submit"
          >
            Send verification code
          </button>
        </form>
      )}
      {/* stage 2 is the user inputting their code that has been emailed to them and typing out their new password twice to ensure there are no typos */}
      {stage === 2 && (
        <form onSubmit={resetPassword}>
          <h2 className="govuk-label-wrapper">
            <label className="govuk-label govuk-label--l" htmlFor="event-name">
              Enter the information below to reset your password
            </label>
          </h2>
          <label className="govuk-label" for="three-quarters">
          Verification Code

        </label>
      </h2>
      <label className="govuk-heading-m" for="three-quarters">
        Email Address
      </label>
      <input
        className="govuk-input govuk-!-width-three-quarters"
        name="three-quarters"
        id="email"
        value={email}
        placeholder="Enter Email Address"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br/>
      <br/>
      <button className="govuk-button" data-module="govuk-button" type="submit">
        Send verification code
      </button>
      <div className="govuk-label">
        <h2 className="govuk-heading-m">Already have a verification code?</h2>
      <p className="text">
        <a  href="/forgotPassword/stage2">
            Click here 
          </a> to reset your password.
        </p>
        </div>
    </form>
  );
}
