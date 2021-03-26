import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";
import { useHistory } from "react-router";

export default function Login({ setTokens }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [checked, setChecked] = useState(true);
  const { authenticate } = useContext(AccountContext);
  const history = useHistory();

  // checks if the user is in the system and has entered the correct password and if so it will log them in
  const onSubmit = (event) => {
    event.preventDefault();
    setErr("");
    authenticate(email, password)
      .then((data) => {
        console.log("logged in!", data);
        setTokens(data);
        history.push("/profile");
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  // toggles the screen view of their password to be characters or just stars.
  function passwordToggle() {
    setChecked(!checked);
  }

  return (
    <div id="loginPage">
      <form onSubmit={onSubmit}>
        
        <input
         class="govuk-input govuk-!-width-one-quarter"
          id="username"
          value={email}
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
         class="govuk-input govuk-!-width-one-quarter"
          id="password"
          type={checked ? "password" : "text"}
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <span id="national-insurance-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> {err}
  </span>
        <button class="govuk-button" data-module="govuk-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
