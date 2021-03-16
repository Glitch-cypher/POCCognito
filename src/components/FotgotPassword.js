import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

export default function ForgotPassword() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked,setChecked] = useState(true);
  const [error, setError] = useState("");

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };

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
  function passwordToggle() {
    setChecked(!checked);
}

  return (
    <div>
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <input
            value={email}
            placeholder= 'Email Address'
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Send verification code</button>
        </form>
      )}
      {stage === 2 && (
        <form onSubmit={resetPassword}>
          <input
            value={code}
            placeholder='Code'
            onChange={(event) => setCode(event.target.value)}
          />
          <input
            value={password}
            type = {checked? 'password':'text'}
            placeholder='New Password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            value={confirmPassword}
            type = {checked? 'password':'text'}
            placeholder='Confirm New Password'
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
           <input type = 'checkbox' checked = {checked} onChange = {()=>passwordToggle()}/>
          <button type="submit">Change passworde</button>
        </form>
      )}
    </div>
  );
}
