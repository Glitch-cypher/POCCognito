import Input from './GovInput'
export default function Form(){
    return <form onSubmit={onSubmit}>
        <h1 className="govuk-label-wrapper">
          <label className="govuk-label govuk-label--l" htmlFor="event-name"> 
            Please Register Below
          </label>
        </h1>

        <Input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="email"
          value={email}
          placeholder="Enter Email Address"
          handleChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="password"
          type="password"
          value={password}
          placeholder="Create a Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="govuk-input govuk-!-width-one-quarter"
          name="three-quarters"
          id="confirmPassword"
          type="password"
          value={passwordDup}
          placeholder="Confirm Password"
          onChange={(event) => setPasswordDup(event.target.value)}
        />
        <span id="national-insurance-number-error" className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {err}
        </span>
        <button
          className="govuk-button"
          data-module="govuk-button"
          type="submit"
                 >
          Create an account
        </button>
      </form>
}