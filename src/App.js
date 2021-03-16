import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Accounts";
import Status from "./components/Status";

export default function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
}
