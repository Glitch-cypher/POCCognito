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
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          {!tokens ? (
            <div>
              <Link to="/signup">Create account</Link>
              <Link to="/">Login</Link>{" "}
              <Link to="/forgotpassword">Forgot password</Link>
            </div>
          ) : (
            <Link to="/profile">Profile</Link>
          )}
        </nav>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/profile">
            {tokens ? (
              <div>
                <Status tokens={tokens} setTokens={setTokens} />
                <Profile email={tokens.idToken.payload.email} />
              </div>
            ) : null}
          </Route>
          <Route path="/">
            <Login tokens={tokens} setTokens={setTokens} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
