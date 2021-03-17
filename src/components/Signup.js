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
        
        id = 'username'
          value={email}
          placeholder='Email Address'
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
        
        id = 'password'
        type = {checked? 'password':'text'}
          value={password}
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
        
        id = 'confirm-password'
        type = {checked? 'password':'text'}
          value={passwordDup}
          placeholder='Confirm Password'
          onChange={(event) => setPasswordDup(event.target.value)}
        />
        <input type = 'checkbox' checked = {checked} onChange = {()=>passwordToggle()}/> 
        <button type="submit">Sign Me Up</button>
      </form>
    </div>
  );
};

