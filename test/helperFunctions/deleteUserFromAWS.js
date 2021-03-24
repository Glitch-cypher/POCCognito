function deleteUserFromAWS(email) {
  const IAMSelector = $("#iam_user_radio_button");
  const IDInput = $("#resolving_input");
  const nextButton = $("#next_button");
  const usernameInput = $("#username");
  const passwordInput = $("#password");
  const signInButton = $("#signin_button");
  const searchBar = $(".globalNav-search-0318.globalNav-search-0322");
  const cognito = $(".globalNav-search-0369");
  const userPool = $("#btnStart");
  const specificUserPool = $("article:nth-child(2)");
  const userGroup = $("a[href = '#/pool/eu-west-1_a6Z6hPgM0/users']");
  const userGroupDropDown = $(
    '[data-reactid=".0.0.1.0.1.0.0.2.1.0.1.1.0.0.1"]'
  );
  const userGroupDropDownEmail = $(
    '[data-reactid=".0.0.1.0.1.0.0.2.1.0.1.1.0.0.2.$option_email"]'
  );
  const userGroupSearchBar = $('[placeholder="Search for value... "]');
  const pageRefresh = $('[href="#"]');
  const user = $("tbody tr td a");
  const disableUserButton = $('[data-reactid=".0.0.1.0.1.0.0.3.4"]');
  const deleteUserButton = $('[data-reactid=".0.0.1.0.1.0.0.3.5"]');
  const acceptCookiesButton = $('[aria-label="Accept all cookies"]');

  browser.url(
    "https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fbilling%2Fhome%3Fstate%3DhashArgs%2523%252Faccount%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A934814114565%3Auser%2Fportal-aws-auth&forceMobileApp=0&code_challenge=qOcvbJe91Z7KKA5uuXw_aLUPWX4lh_xo5Ka3dV1muJQ&code_challenge_method=SHA-256"
  );
  IAMSelector.click();
  IDInput.setValue(process.env.AWSAccountID);
  nextButton.click();
  usernameInput.setValue(process.env.IAMUsername);
  passwordInput.setValue(process.env.IAMPassword);
  signInButton.click();
  acceptCookiesButton.click();
  searchBar.setValue("cognito");
  cognito.click();
  userPool.click();
  specificUserPool.click();
  userGroup.click();
  userGroupDropDown.click();
  userGroupDropDownEmail.click();
  userGroupSearchBar.setValue(email);
  pageRefresh.click();
  user.waitForDisplayed();
  user.click();
  disableUserButton.click();
  deleteUserButton.click();
}
module.exports = deleteUserFromAWS;
