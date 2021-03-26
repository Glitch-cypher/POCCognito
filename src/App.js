import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./components/Accounts";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Status from "./components/Status";
import ForgotPassword from "./components/FotgotPassword";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const { getSession } = useContext(AccountContext);
  const [tokens, setTokens] = useState();
  useEffect(() => {
    getSession().then((session) => {
      setTokens(session);
    }, []);
  });

  return (
    <Router>
      <div>
        <nav>
          <Link to="/signup">Create account</Link>
          <Link to="/">Login</Link>
          <Link to="/forgotpassword">Forgot password</Link>
          {tokens ? <Link to="/profile">Profile</Link> : null}
        </nav>
        <Status tokens={tokens} setTokens={setTokens} />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/profile">
            {tokens ? <Profile email={tokens.idToken.payload.email} /> : null}
          </Route>
          <Route path="/">
            <Login setTokens={setTokens} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
