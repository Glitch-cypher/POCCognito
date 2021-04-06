import React, { useState } from "react";
import { useHistory } from "react-router";
//AWS
import UserPool from "../UserPool";

export default function Signup({ email, setEmail }) {
  //Here we set empty states for the input fields, err and the visibility of password.
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState("");
  const [err, setErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const history = useHistory();

  //When the onsubmit button is clocked this function is called.
  const onSubmit = (event) => {
    event.preventDefault();
    setErr("");
    setEmailErr("");
    if (passwordDup === password) {
      //the userPool takes in 5 arguments and then console.logs if it is successful or not at creating an account.
      UserPool.signUp(email, password, [], null, (err, data) => {
        if ((err)) {
          setErr(err.message);
          setEmailErr(`Enter an email
            address in the correct format, like names@example.com`);
        } else {
          history.push("/confirmation/registration");
        }
        console.log({ data });
      });
    } else {
      setErr("Passwords do not match, please re-enter and try again");
      // setEmailErr(`Enter an email
      // address in the correct format, like names@example.com`);
    }
  };
  console.log(err.message);
  return (
    <div id="signupPage">
      <form onSubmit={onSubmit}>
        <h1 className="govuk-label-wrapper">
          <label className="govuk-label govuk-label--l" htmlFor="event-name">
Create an account           </label>
        </h1>

        <label className="govuk-heading-m" for="email">
          Enter Email Address
        </label>
        <div id="email-hint" className="govuk-hint">
          Your email address will be used as a username.
        </div>

        <input
          className="govuk-input govuk-!-width-three-quarters"
          name="three-quarters"
          id="email"
          type="email"
          value={email}
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />

        <span id="email-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {emailErr}
        </span>
        <br />
        <br />
        <label class="govuk-heading-m" for="three-quarters">

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

        <br />
        <br />

        <label className="govuk-heading-m" for="three-quarters">
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
        />
        <br />
        <br />
        <div id="event-name-hint" className="govuk-hint">
        Must contain at least 8 characters with at least 1 capital letter, 1
        lower case letter, 1 number and 1 symbol.
      </div>
      <div id="event-name-hint" className="govuk-hint">
       Do not use your username, a
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
        <div className="govuk-label">
          <h2 className="heading-medium gutter-none-top">
            Already got an account?
          </h2>
          <p className="text">
            <a href="/Signin">Sign in</a> if you already have an account.
          </p>
        </div>
      </form>
    </div>
  );
}
