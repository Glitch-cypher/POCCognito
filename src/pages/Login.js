import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
//Componenets
import { AccountContext } from "../components/Accounts";

export default function Login({ setTokens }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
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

  return (
    <div id="loginPage">
      <form onSubmit={onSubmit}>
        <h1 className="govuk-label-wrapper">
          <label className="govuk-label govuk-label--l" htmlFor="event-name">
            Please Login Below
          </label>
        </h1>
        <label class="govuk-label" for="three-quarters">
          Email Address
        </label>
        <div id="event-name-hint" class="govuk-hint">
          This is the email address you used to sign up with.
        </div>
        <input
          class="govuk-input govuk-!-width-three-quarters"
          id="username"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label class="govuk-label" for="three-quarters">
          Password
        </label>
        <input
          class="govuk-input govuk-!-width-three-quarters"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <span
          id="national-insurance-number-error"
          className="govuk-error-message"
        >
          <span className="govuk-visually-hidden">Error:</span> {err}
        </span>{" "}
        <details class="govuk-details" data-module="govuk-details">
          <summary class="govuk-details__summary">
            <span class="govuk-details__summary-text">Problem Signing in?</span>
          </summary>
          <div class="govuk-details__text">
            <li className="govuk-header__navigation-item">
              <li>
                <a
                  className="govuk-header__navigation-item"
                  href="/forgotpassword"
                >
                  Forgotten your password?
                </a>
              </li>
            </li>
          </div>
        </details>
        <button
          className="govuk-button"
          data-module="govuk-button"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
