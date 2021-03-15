import React, { useState } from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const poolData = {
    UserPoolId: "eu-west-1_Nxdovi3Ge",
    ClientId: "78am6ect9vgb2volqbrp9i4qh0",
  };
  const UserPool = new CognitoUserPool(poolData);
  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign Me Up</button>
      </form>
    </div>
  );
};

