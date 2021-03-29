import React, { useState } from "react";
import UserPool from "../UserPool";

import { useHistory } from "react-router";

export default function Signup() {
  //Here we set empty states for the input fields, err and the visibility of password.
  const [email, setEmail] = useState("");
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
          history.push("/Confirmation");
        }
        console.log(data);
        history.push("/Confirmation");
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
            Please Register Below
          </label>
        </h1>

        <input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="password"
          type="password"
          value={password}
          placeholder="Create a Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="confirmPassword"
          type="password"
          value={passwordDup}
          placeholder="Confirm Password"
          onChange={(event) => setPasswordDup(event.target.value)}
        />
        <span id="national-insurance-number-error" className="govuk-error-message">
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
