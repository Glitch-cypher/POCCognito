import React, { useState } from "react";
import UserPool from '../UserPool'

export default function Signup(){
  //Here we set empty states for the input fields, err and the visibility of password.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDup, setPasswordDup] = useState('');
  const [err,setErr] = useState('');
  const [checked,setChecked] = useState(true);
  
//When the onsubmit button is clocked this function is called. 
  const onSubmit = (event) => {
    event.preventDefault();
    setErr('');
    if(passwordDup === password){
      //the userPool takes in 5 arguments and then console.logs if it is successful or not at creating an account. 
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) setErr(err.message);
            console.log(data);
        });
    }else{
        setErr('Passwords do not match, please re-enter and try again')
    }
  };
//This function checks the passwords match
  function passwordToggle() {
        setChecked(!checked);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <p style = {{fontSize: '1em', color: 'red' }}>{err}</p>
        <input
        
        id = 'username'
        //Here we allow the user to input their email address, password, this is then set as the new state.
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
        
        <input type = 'checkbox' checked = {checked} onChange = {()=>passwordToggle()}
          //This input allows the user to either view their password or hide it.
        /> 
        <button type="submit">Sign Me Up</button>
      </form>
    </div>
  );
};

