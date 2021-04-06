import React, { useState, useContext } from "react";

//Componenets

export default function StarterPage() {
  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper" id="main-content" role="main">
        <h1 className="govuk-heading-xl">Sign in or create an account</h1>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <h2 className="govuk-heading-m">Create an account</h2>
            <p className="govuk-label">
              Select if you have not used this service before
            </p>

            <a
              href="/createaccount"
              role="button"
              draggable="false"
              className="govuk-button"
            >
              Create account
            </a>

            <br />
            <br />
          </div>
          <div className="gocuk-grid-column-one-half">
            <h2 className="govuk-heading-m">Sign in</h2>
            <p className="govuk-label">
              Select if you already have an account for this service
            </p>
            <a
              href="/Signin"
              role="button"
              dragabble="false"
              className="govuk-button"
              data-module="govuk-button"
            >
              Sign in
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
