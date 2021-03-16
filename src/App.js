import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Accounts";
import Status from "./components/Status";
import ForgotPassword from './components/FotgotPassword'

export default function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <ForgotPassword/>
    </Account>
  );
}
