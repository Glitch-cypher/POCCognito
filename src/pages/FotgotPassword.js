import React, { useState } from "react";
import { useHistory } from "react-router";
//AWS
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

// Function for the user to be able to get a new password
export default function ForgotPassword() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        history.push("/");
      },
      onFailure: (err) => {
        console.log("onFailure", err);
      },
    });
  };

  return (
    <div id="forgotPasswordPage">
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
          <label class="govuk-label" for="three-quarters">
          Email Address
        </label>
        <input
          class="govuk-input govuk-!-width-three-quarters"
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
        <input
          className="govuk-input govuk-!-width-three-quarters"
            name="three-quarters"
            id="code"
            value={code}
            placeholder="Verification Code"
            onChange={(event) => setCode(event.target.value)}
          />
<label className="govuk-label" for="three-quarters">
         Create Password
        </label>
        <div id="event-name-hint" className="govuk-hint">
        Must contain at least 8 characters with at least 1 capital letter, 1 lower case letter, 1 number and 1 symbol.
Do not use your username, a common word like 'password' or a sequence like '123'.h.
        </div>

        <input
          className="govuk-input govuk-!-width-three-quarters"
            id="newPass"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
         <label className="govuk-label" for="three-quarters">
         Re-type your password
        </label>
        <input
          className="govuk-input govuk-!-width-three-quarters"
            id="confirmNewPass"
            value={confirmPassword}
            type="password"
            placeholder="Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button
            className="govuk-button"
            data-module="govuk-button"
            type="submit"
          >
            Change passworde
          </button>
        </form>
      )}
    </div>
  );
}
