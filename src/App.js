import React, {useState} from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Accounts";
import Status from "./components/Status";
import ForgotPassword from "./components/FotgotPassword";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [status, setStatus] = useState(false)
  return (
    <Account>
      <Router>
        <div>
          <nav>
            <Link to="/">Login</Link>
            <Link to="/signUp">Create account</Link>
            <Link to="/forgotPassword">Forgot password</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Status status = {status} setStatus= {setStatus} />
          <Switch>
            <Route path="/signUp">
              <Signup />
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Login status = {status} setStatus= {setStatus} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Account>
  );
}
