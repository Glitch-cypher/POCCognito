import React, { useState } from "react";
import UserPool from "../UserPool";

import { useHistory } from "react-router";

export default function Signup() {
  //Here we set empty states for the input fields, err and the visibility of password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState("");
  const [err, setErr] = useState("");
  const [checked, setChecked] = useState(true);
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
          history.push("/");
        }
        console.log(data);
      });
    } else {
      setErr("Passwords do not match, please re-enter and try again");
    }
  };

  //This function checks the passwords match
  function passwordToggle() {
    setChecked(!checked);
  }

  return (
    <div id="signupPage">
      <form onSubmit={onSubmit}>
        <h1 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="event-name">
            Please Register Below
          </label>
        </h1>

        <input
        class="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="email"
          value={email}
                    placeholder="Enter Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
         class="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="password"
          type={checked ? "password" : "text"}
          value={password}
          placeholder="Create a Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
         class="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="confirmPassword"
          type={checked ? "password" : "text"}
          value={passwordDup}
          placeholder="Confirm Password"
          onChange={(event) => setPasswordDup(event.target.value)}
        />

<span id="national-insurance-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> {err}
  </span>
        <button class="govuk-button" data-module="govuk-button" type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
}
