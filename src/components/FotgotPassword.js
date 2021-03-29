import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

// Function for the user to be able to get a new password
export default function ForgotPassword() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState("");

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
        setStage(2);
      },
      onFailure: (err) => {
        console.log("onFailure", err);
      },
      InputVerificationCode: (data) => {
        console.log("Input code:", data);
      },
    });
  };

  // Changes the users password to the new one they have typed in as long as the passwords match and the code from their email is correct
  const resetPassword = (event) => {
    event.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match, please re-enter and try again");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess", data);
      },
      onFailure: (err) => {
        console.log("onFailure", err);
      },
    });
  };

  // toggles the screen view of their password to be characters or just stars.
  function passwordToggle() {
    setChecked(!checked);
  }console.log(passwordToggle)

  return (
    <div id="forgotPasswordPage">
      {/* displays error messages */}
      <p>{error}</p>
      {/* stage 1 is where the user puts in their email in order to recieve a code. moves on to stage 2 once an email that is in the system is selected */}
      {stage === 1 && (
        <form onSubmit={sendCode}>
        <h2 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="event-name">
            Enter your email address to reset your password
          </label>
        </h2>
        <input
        class="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
          
          <button class="govuk-button" data-module="govuk-button" type="submit">
            Send verification code
          </button>
        </form>
      )}
      {/* stage 2 is the user inputting their code that has been emailed to them and typing out their new password twice to ensure there are no typos */}
      {stage === 2 && (
        <form onSubmit={resetPassword}>
        <h2 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="event-name">
            Enter the information below to reset your password
          </label>
        </h2>
        <input
        class="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="code"
          value={code}
            placeholder="Enter Verification Code"
            onChange={(event) => setCode(event.target.value)}
        />
          
          <input class="govuk-input govuk-!-width-one-quarter"
          id = 'newPass'
            value={password}
            type={checked ? "password" : "text"}
            placeholder="New Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input class="govuk-input govuk-!-width-one-quarter"
          id='confirmNewPass'
            value={confirmPassword}
            type={checked ? "password" : "text"}
            placeholder="Confirm New Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          
          <button class="govuk-button" data-module="govuk-button" type="submit">
            Change passworde
          </button>
        </form>
      )}
    </div>
  );
}
