import Drawer from "@material-ui/core/Drawer";

export default function CookieBanner({ serviceName, open, setOpen, ls }) {
  return (
    <Drawer open={open} anchor="top">
      <div
        className="govuk-cookie-banner "
        role="region"
        aria-label="Cookies on [name of service]"
      >
        <div className="govuk-cookie-banner__message govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h2 className="govuk-cookie-banner__heading govuk-heading-m">
                Cookies on {serviceName}
              </h2>

              <div className="govuk-cookie-banner__content">
                <p>We use some essential cookies to make this service work.</p>
                <p>
                  We'd also like to use analytics cookies so we can understand
                  how you use the service and make improvements.
                </p>
              </div>
            </div>
          </div>

          <div className="govuk-button-group">
            <button
              value="accept"
              type="button"
              name="cookies"
              className="govuk-button"
              data-module="govuk-button"
              onClick={() => {
                setOpen(false);
                ls.set("open", false);
              }}
            >
              Accept analytics cookies
            </button>
            <button
              value="reject"
              type="button"
              name="cookies"
              className="govuk-button"
              data-module="govuk-button"
              onClick={() => {
                setOpen(false);

                ls.set("open", false);
              }}
            >
              Reject analytics cookies
            </button>
            <a className="govuk-link" href="/">
              View cookies
            </a>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
