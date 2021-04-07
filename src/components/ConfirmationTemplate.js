import React from "react";

export default function Confirmation({ pageInfo }) {
  /* takes in an object like the one below:
    
   const pageInfo = {
    boxTitle: "Application complete",
    boxInfo: "You registered with the following email address",
    boxImportantInfo: email,
    message: "We have sent you a confirmation email.",
    line1:
      "We have sent you a confirmation email, with a verification link inside.",
    line2:
      "To activate your account, click the link within the email. Once this is confirmed you can log in with your email address and password.",
  ;
  
*/
  console.log(pageInfo.boxImportantInfo);

  return (
    <div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="govuk-panel govuk-panel--confirmation">
            <h1 className="govuk-panel__title">{pageInfo.boxTitle}</h1>
            <div className="govuk-panel__body">
              {pageInfo.boxInfo}
              {pageInfo.boxImportantInfo ? (
                <div>
                  <br />
                  <strong>{pageInfo.boxImportantInfo}</strong>
                </div>
              ) : null}
            </div>
          </div>
          <p className="govuk-body">{pageInfo.message}</p>

          <h2 className="govuk-heading-m">What happens next?</h2>

          <p className="govuk-body">{pageInfo.line1}</p>
          <p className="govuk-body">{pageInfo.line2}</p>
          {pageInfo.link ? (
            <li className="govuk-header__navigation-item">
              <a className="govuk-header__navigation-item" href={pageInfo.link}>
                {pageInfo.linkText}
              </a>
            </li>
          ) : null}
        </div>
      </div>
    </div>
  );
}
