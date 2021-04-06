import { useState } from "react";
import { useHistory } from "react-router";

//AWS
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

export default function ForgotPasswordStage2({ email, setEmail }) {
  // Changes the users password to the new one they have typed in as long as the passwords match and the code from their email is correct
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

  const resetPassword = (event) => {
    event.preventDefault();
    setError();
    if (password !== confirmPassword) {
      setError("Passwords do not match, please re-enter and try again");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess", data);
        history.push("/confirmation/passwordReset");
      },
      onFailure: (err) => {
        setError(err.message);
        console.log("onFailure", err);
      },
    });
  };
  return (
    <form onSubmit={resetPassword}>
      {/* displays error messages */}
      <p>{error}</p>
      <h2 className="govuk-label-wrapper">
        <label className="govuk-label govuk-label--l" htmlFor="event-name">
          Enter the information below to reset your password
        </label>
        <label className="govuk-label" htmlFor="three-quarters">
          Email
        </label>
        <input
          className="govuk-input govuk-!-width-three-quarters"
          name="three-quarters"
          id="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
      </h2>
      <label className="govuk-label" htmlFor="three-quarters">
        Verification Code
      </label>
      <input
        autoComplete="off"
        className="govuk-input govuk-!-width-three-quarters"
        name="three-quarters"
        id="code"
        type="text"
        value={code}
        placeholder="Verification Code"
        onChange={(event) => setCode(event.target.value)}
      />
      <br />
      <br />
      <label className="govuk-label" htmlFor="three-quarters">
        Create Password
      </label>
      <div id="event-name-hint" className="govuk-hint">
        Must contain at least 8 characters with at least 1 capital letter, 1
        lower case letter, 1 number and 1 symbol. Do not use your username, a
        common word like 'password' or a sequence like '123'.h.
      </div>

      <input
        className="govuk-input govuk-!-width-three-quarters"
        id="newPass"
        value={password}
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <label className="govuk-label" htmlFor="three-quarters">
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
      <br />
      <br />
      <button className="govuk-button" data-module="govuk-button" type="submit">
        Change password
      </button>
    </form>
  );
}
