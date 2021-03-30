const LoginPage = require("../../pageobjects/login.page");

describe("testing every component that renders on the login page", () => {
  it("should render username input ", () => {
    expect(LoginPage.pageTitle).toHaveAttributeContaining(
      "innerText",
      "Welcome to your profile page."
    );
  });
  it("should render the page info", () => {
    expect(LoginPage.pageInfo).toHaveAttributeContaining(
      "innerText",
      "You use the following email address to log in."
    );
  });
  it("should render the users email", () => {
    expect(LoginPage.idDisplay).toHaveAttributeContaining(
      "innerText",
      process.env.testEmail
    );
  });
});
