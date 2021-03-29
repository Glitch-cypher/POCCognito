export default function Profile({ email }) {
  //In order for the profile page we use getSession to see whether the user is a user or not.
  //Next we then take the information stored in state and display it on the screen.
  return (
    <div>
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-two-thirds">
          <div class="govuk-panel govuk-panel--confirmation">
            <h1 class="govuk-panel__title">Application complete</h1>
            <div class="govuk-panel__body">
              You registered with the following email address
              <br />
              <strong>{email}</strong>
            </div>
          </div>
          <p class="govuk-body">We have sent you a confirmation email.</p>

          <h2 class="govuk-heading-m">What happens next</h2>

          <p class="govuk-body">
            We’ve sent you an email with a verification link.
          </p>
          <p class="govuk-body">
            Once you have verfied your email address you will be able to log in and access the service.
          </p>
        </div>
      </div>
    </div>
  );
}
