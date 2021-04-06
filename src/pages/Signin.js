import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import serviceName from "../variables";
//Componenets
import { AccountContext } from "../components/Accounts";

export default function Login({ setTokens }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState();
  const { authenticate } = useContext(AccountContext);
  const history = useHistory();
  console.log(err);
  // checks if the user is in the system and has entered the correct password and if so it will log them in
  const onSubmit = (event) => {
    event.preventDefault();
    setErr();
    authenticate(email, password)
      .then((data) => {
        console.log("logged in!", data);
        setTokens(data);
        history.push("/profile");
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err.message);
      });
  };

  return (
    <div id="loginPage">
      <form
        className={`govuk-form-group ${err ? "govuk-form-group--error" : null}`}
        onSubmit={onSubmit}
      >
        <h1 className="govuk-label-wrapper">
          <label className="govuk-label govuk-label--l" htmlFor="event-name">
            Sign in to your {serviceName}{" "}
          </label>
        </h1>
        <label className="govuk-heading-m" htmlFor="three-quarters">
          Email Address
        </label>
        <div id="event-name-hint" className="govuk-hint">
          This is the email address you used to sign up with.
        </div>
        <input
          className="govuk-input govuk-!-width-three-quarters"
          id="username"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label className="govuk-heading-m" htmlFor="three-quarters">
          Password
        </label>
        <input
          className="govuk-input govuk-!-width-three-quarters"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <br />
        <span id="email-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {err}
        </span>
        <br />
        <span
          id="national-insurance-number-error"
          className="govuk-error-message"
        >
          <span className="govuk-visually-hidden">Error:</span> {err}
        </span>{" "}
        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">
              Problem Signing in?
            </span>
          </summary>
          <div className="govuk-details__text">
            <li className="govuk-header__navigation-item">
              <a
                className="govuk-header__navigation-item"
                href="/forgotpassword"
              >
                Forgotten your password?
              </a>
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
        <p>
          <a className="govuk-label" href="/forgotpassword">
            Forgotten your password?
          </a>
          <br />
          <a className="govuk-label" href="/createAnAccount">
            Create an account to use this service
          </a>
        </p>
      </form>
    </div>
  );
}
