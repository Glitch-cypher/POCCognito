import React, { useState } from "react";
import UserPool from '../UserPool'

export default function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState('');
  const [err,setErr] = useState('');
  const [checked,setChecked] = useState(true);
  

  const onSubmit = (event) => {
    event.preventDefault();
    setErr('');
    if(passwordDup === password){
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) setErr(err.message);
            console.log(data);
        });
    }else{
        setErr('Passwords do not match, please re-enter and try again')
    }
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
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
        type = {checked? 'password':'text'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
        type = {checked? 'password':'text'}
          value={passwordDup}
          onChange={(event) => setPasswordDup(event.target.value)}
        />
        <input type = 'checkbox' checked = {checked} onClick = {()=>passwordToggle()}/> 
        <button type="submit">Sign Me Up</button>
      </form>
    </div>
  );
};

