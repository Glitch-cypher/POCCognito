const loginHelper = require("../../helperFunctions/login.helper");
const ProfilePage = require("../../pageobjects/profile.page");

require("dotenv").config();
describe("testing every component that renders on the profile page", () => {
  it("should render the page title", () => {
    loginHelper(process.env.testEmail, process.env.testPassword);
    expect(ProfilePage.pageTitle).toHaveAttributeContaining(
      "innerText",
      "Welcome to your profile page."
    );
  });
  it("should render the page info", () => {
    expect(ProfilePage.pageInfo).toHaveAttributeContaining(
      "innerText",
      "You use the following email address to log in."
    );
  });
  it("should render the users email", () => {
    expect(ProfilePage.idDisplay).toHaveAttributeContaining(
      "innerText",
      process.env.testEmail
    );
  });
});
