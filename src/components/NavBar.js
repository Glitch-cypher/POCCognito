import React from "react";
export default function NavBar({ tokens }) {
  let active = window.location.href.slice(22);
  return (
    <div>
      <nav>
        <ul
          id="navigation"
          className="govuk-header__navigation "
          aria-label="Navigation menu"
        >
          {!tokens ? (
            <div>
              <li
                className={`govuk-header__navigation-item ${
                  active === "" ? "govuk-header__navigation-item--active" : ""
                }`}
              >
                <a
                  onClick={() => {
                    console.log("hello");
                  }}
                  className="govuk-header__link"
                  href="/"
                >
                  Sign in
                </a>
              </li>
              <li
                className={`govuk-header__navigation-item ${
                  active === "signup"
                    ? "govuk-header__navigation-item--active"
                    : ""
                }`}
              >
                <a className="govuk-header__link" href="/signup">
                  Create an Account
                </a>
              </li>
            </div>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
