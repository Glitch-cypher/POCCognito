import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErr] = useState('');
  const [checked,setChecked] = useState(true);
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setErr('');
    authenticate(email, password)
      .then((data) => {
        console.log("logged in!", data);
      })
      .catch((err) => {
        setErr( err.message);
      });
  };

  function passwordToggle() {
    setChecked(!checked);
}

  return (
    <div>
      <form onSubmit={onSubmit}>
      <p style = {{fontSize: '1em', color: 'red' }}>{err}</p>
        <input
          value={email}
          placeholder='Email Address'
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
        type = {checked? 'password':'text'}
          value={password}
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type = 'checkbox' checked = {checked} onChange = {()=>passwordToggle()}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
