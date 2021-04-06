import React, { useState } from "react";
import { useHistory } from "react-router";
//AWS
import UserPool from "../UserPool";

export default function Signup({ email, setEmail }) {
  //Here we set empty states for the input fields, err and the visibility of password.
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState("");
  const [err, setErr] = useState("");

  const history = useHistory();

  //When the onsubmit button is clocked this function is called.
  const onSubmit = (event) => {
    event.preventDefault();
    setErr("");
    if (passwordDup === password) {
      //the userPool takes in 5 arguments and then console.logs if it is successful or not at creating an account.
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          setErr(err.message);
        } else {
          history.push("/confirmation");
        }
        console.log({ data });
      });
    } else {
      setErr("Passwords do not match, please re-enter and try again");
    }
  };

  return (
    <div id="signupPage">
      <form onSubmit={onSubmit}>
        <h1 className="govuk-label-wrapper">
          <label className="govuk-label govuk-label--l" htmlFor="event-name">
Create an account           </label>
        </h1>

        <label className="govuk-label" for="email">
          Enter Email Address
        </label>
        <div id="email-hint" className="govuk-hint">
          Your email address will be used as a username.
        </div>
        <span id="email-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span>Enter an email
          address in the correct format, like name@example.com
        </span>
        <input
          className="govuk-input govuk-!-width-three-quarters"
          name="three-quarters"
          id="email"
          value={email}
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="govuk-label" for="three-quarters">
          Create password
        </label>
        
        <input
          className="govuk-input govuk-!-width-three-quarters"
          name="three-quarters"
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className="govuk-label" for="three-quarters">
          Re-type your password
        </label>
        <input
          className="govuk-input govuk-!-width-three-quarters"
          name="three-quarters"
          id="confirmPassword"
          type="password"
          value={passwordDup}
          placeholder="Confirm Password"
          onChange={(event) => setPasswordDup(event.target.value)}
        /><div id="event-name-hint" className="govuk-hint">
        Must contain at least 8 characters with at least 1 capital letter, 1
        lower case letter, 1 number and 1 symbol. Do not use your username, a
        common word like 'password' or a sequence like '123'.
      </div>
   
        <span
        
          id="national-insurance-number-error"
          className="govuk-error-message"
        >
          <span className="govuk-visually-hidden">Error:</span> {err}
        </span>
        <button
          className="govuk-button"
          data-module="govuk-button"
          type="submit"
        >
          Create an account
        </button>
      </form>
    </div>
  );
}
