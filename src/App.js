import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import serviceName from "./variables";
//Pages
import Createaccount from "./pages/createaccount";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/FotgotPassword";
import Profile from "./pages/Profile";
import ConfirmationRegistration from "./pages/confirmationPages/ConfirmationRegistration";
import ConfirmationPasswordReset from "./pages/confirmationPages/ConfirmationPasswordReset";
import ConfirmationCodeSent from "./pages/confirmationPages/ConfirmationCodeSent";
import ForgotPasswordStage2 from "./pages/ForgotPasswordStage2";

//Componenets
import CookieBanner from "./components/CookieBanner";
import { AccountContext } from "./components/Accounts";
import Header from "./components/Header";
import PhaseBanner from "./components/PhaseBanner.js";
import Footer from "./components/Footer";
import StarterPage from "./pages/StartPage";

export default function App() {
  const { getSession } = useContext(AccountContext);
  const [tokens, setTokens] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(true);
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
        <CookieBanner
          open={open}
          setOpen={setOpen}
          serviceName="[name of service]"
        />

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
            <h1 className="govuk-heading-xl">{serviceName}</h1>

            <Switch>
              <Route path="/createaccount">
                <Createaccount email={email} setEmail={setEmail} />
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
              <Route path="/confirmation/registration">
                <ConfirmationRegistration email={email} />
              </Route>
              <Route path="/confirmation/passwordReset">
                <ConfirmationPasswordReset email={email} />
              </Route>
              <Route path="/confirmation/codeSent">
                <ConfirmationCodeSent email={email} />
              </Route>
              <Route path="/Signin">
                <Signin tokens={tokens} setTokens={setTokens} />
              </Route>
              <Route path="/">
                <StarterPage />
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
