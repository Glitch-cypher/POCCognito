import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/FotgotPassword";
import Profile from "./pages/Profile";
import Confirmation from "./pages/Confirmation";
import ForgotPasswordStage2 from "./pages/ForgotPasswordStage2";

//Componenets
import CookieBanner from "./components/CookieBanner";
import { AccountContext } from "./components/Accounts";
import Header from "./components/Header";
import PhaseBanner from "./components/PhaseBanner.js";
import Footer from "./components/Footer";

export default function App() {
  const { getSession } = useContext(AccountContext);
  const [tokens, setTokens] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    getSession().then((session) => {
      console.log(session);
      setTokens(session);
    });
  }, []);

  return (
    <Router>
      <div
        className="govuk-template__body app-body-className"
        data-test="My value"
        data-other="report:details"
      >
        <script>
          document.body.classNameName = ((document.body.classNameName) ?
          document.body.classNameName + ' js-enabled' : 'js-enabled');
        </script>
        <CookieBanner serviceName="[name of service]" />

        <a href="#main-content" className="govuk-skip-link">
          Skip to main content
        </a>

        <Header tokens={tokens} setTokens={setTokens} />
        <div className="govuk-width-container app-width-container">
          <PhaseBanner />
          <main
            className="govuk-main-wrapper app-main-className"
            id="main-content"
            role="main"
          >
            <h1 className="govuk-heading-xl">Customised page template</h1>

            <Switch>
              <Route path="/signUp">
                <Signup email={email} setEmail={setEmail} />
              </Route>
              <Route path="/forgotPassword/stage2">
                <ForgotPasswordStage2 email={email} setEmail={setEmail} />
              </Route>
              <Route path="/forgotPassword">
                <ForgotPassword email={email} setEmail={setEmail} />
              </Route>
              <Route path="/profile">
                {tokens ? <Profile email={email} /> : null}
              </Route>
              <Route path="/confirmation">
                <Confirmation email={email} />
              </Route>
              <Route path="/">
                <Login tokens={tokens} setTokens={setTokens} />
              </Route>
            </Switch>
          </main>
        </div>

        <Footer />

        <script src="/govuk-frontend/all.js"></script>
      </div>
    </Router>
  );
}
