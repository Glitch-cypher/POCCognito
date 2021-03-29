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
    <Account>
      <Router>
        <div
          class="govuk-template__body app-body-class"
          data-test="My value"
          data-other="report:details"
        >
          <script>
            document.body.className = ((document.body.className) ?
            document.body.className + ' js-enabled' : 'js-enabled');
          </script>
          <div
            class="govuk-cookie-banner "
            role="region"
            aria-label="Cookies on [name of service]"
          >
            <div class="govuk-cookie-banner__message govuk-width-container">
              <div class="govuk-grid-row">
                <div class="govuk-grid-column-two-thirds">
                  <h2 class="govuk-cookie-banner__heading govuk-heading-m">
                    Cookies on [name of service]
                  </h2>

                  <div class="govuk-cookie-banner__content">
                    <p>
                      We use some essential cookies to make this service work.
                    </p>
                    <p>
                      We'd also like to use analytics cookies so we can
                      understand how you use the service and make improvements.
                    </p>
                  </div>
                </div>
              </div>

              <div class="govuk-button-group">
                <button
                  value="accept"
                  type="button"
                  name="cookies"
                  class="govuk-button"
                  data-module="govuk-button"
                >
                  Accept analytics cookies
                </button>
                <button
                  value="reject"
                  type="button"
                  name="cookies"
                  class="govuk-button"
                  data-module="govuk-button"
                >
                  Reject analytics cookies
                </button>
                <a class="govuk-link" href="#">
                  View cookies
                </a>
              </div>
            </div>
          </div>

          <a href="#main-content" class="govuk-skip-link">
            Skip to main content
          </a>

          <header
            class="govuk-header "
            role="banner"
            data-module="govuk-header"
          >
            <div class="govuk-header__container app-width-container">
              <div class="govuk-header__logo">
                <a
                  href="#"
                  class="govuk-header__link govuk-header__link--homepage"
                >
                  <span class="govuk-header__logotype">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      class="govuk-header__logotype-crown"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 132 97"
                      height="30"
                      width="36"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6H55.5s6.4 7.2 7.9 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                      ></path>
                      <image
                        src="/assets/images/govuk-logotype-crown.png"
                        xlinkhref="data:,"
                        display="none"
                        class="govuk-header__logotype-crown-fallback-image"
                        width="36"
                        height="32"
                      ></image>
                    </svg>
                    <span class="govuk-header__logotype-text">GOV.UK</span>
                  </span>
                </a>
              </div>
              <div class="govuk-header__content">
                <a
                  href="#"
                  class="govuk-header__link govuk-header__link--service-name"
                >
                  Service name
                </a>

                <nav>
                  <ul
                    id="navigation"
                    class="govuk-header__navigation "
                    aria-label="Navigation menu"
                  >
                    {status ? (
                      <li class="govuk-header__navigation-item">
                        <a class="govuk-header__link" href="/profile">
                          email: Sign out
                        </a>
                      </li>
                    ) : null}
                    {!status ? (
                      <li class="govuk-header__navigation-item govuk-header__navigation-item--active">
                        <a class="govuk-header__link" href="/">
                          Sign in
                        </a>
                      </li>
                    ) : null}
                    {!status ? (
                      <li class="govuk-header__navigation-item">
                        <a class="govuk-header__link" href="/signup">
                          Create an Account
                        </a>
                      </li>
                    ) : null}
                    {!status ? (
                      <li class="govuk-header__navigation-item">
                        <a class="govuk-header__link" href="/forgotpassword">
                          Forgot Password
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <div class="govuk-width-container app-width-container">
            <div class="govuk-phase-banner">
              <p class="govuk-phase-banner__content">
                <strong class="govuk-tag govuk-phase-banner__content__tag">
                  alpha
                </strong>
                <span class="govuk-phase-banner__text">
                  This is a new service – your{" "}
                  <a class="govuk-link" href="#">
                    feedback
                  </a>{" "}
                  will help us to improve it.
                </span>
              </p>
            </div>
            <main
              class="govuk-main-wrapper app-main-class"
              id="main-content"
              role="main"
            >
              <h1 class="govuk-heading-xl">Customised page template</h1>

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
                  <Login status={status} setStatus={setStatus} />
                </Route>
              </Switch>
              <div style={{ height: "1000px" }}>abc</div>
            </main>
          </div>

          <footer class="govuk-footer " role="contentinfo">
            <div class="govuk-width-container ">
              <div class="govuk-footer__meta">
                <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
                  <h2 class="govuk-visually-hidden">Support links</h2>
                  <ul class="govuk-footer__inline-list">
                    <li class="govuk-footer__inline-list-item">
                      <a class="govuk-footer__link" href="#1">
                        Help
                      </a>
                    </li>
                    <li class="govuk-footer__inline-list-item">
                      <a class="govuk-footer__link" href="#2">
                        Cookies
                      </a>
                    </li>
                    <li class="govuk-footer__inline-list-item">
                      <a class="govuk-footer__link" href="#3">
                        Contact
                      </a>
                    </li>
                    <li class="govuk-footer__inline-list-item">
                      <a class="govuk-footer__link" href="#4">
                        Terms and conditions
                      </a>
                    </li>
                  </ul>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    class="govuk-footer__licence-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 483.2 195.7"
                    height="17"
                    width="41"
                  >
                    <path
                      fill="currentColor"
                      d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"
                    />
                  </svg>
                  <span class="govuk-footer__licence-description">
                    All content is available under the
                    <a
                      class="govuk-footer__link"
                      href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                      rel="license"
                    >
                      Open Government Licence v3.0
                    </a>
                    , except where otherwise stated
                  </span>
                </div>
                <div class="govuk-footer__meta-item">
                  <a
                    class="govuk-footer__link govuk-footer__copyright-logo"
                    href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
                  >
                    © Crown copyright
                  </a>
                </div>
              </div>
            </div>
          </footer>

          <script src="/govuk-frontend/all.js"></script>
        </div>
      </Router>
    </Account>
  );
}
