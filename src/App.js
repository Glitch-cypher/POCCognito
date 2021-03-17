import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Accounts";
import Status from "./components/Status";
import ForgotPassword from './components/FotgotPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Account>
      <Router>
        <div>
          <nav>
            <Link to = '/'>Login</Link>
            <Link to = '/signUp'>Create account</Link>
            <Link to = '/forgotPassword'>Forgot password</Link>
          </nav>
          <Switch>
            <Route path = '/'>
              <Status />
              <Login />
            </Route>
            <Route path = '/signUp'>
              <Signup />
            </Route>
            <Route path = '/forgotPassword'>
              <ForgotPassword/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Account>
  );
}
