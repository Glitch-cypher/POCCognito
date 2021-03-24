// const { getDefaultNormalizer } = require("@testing-library/dom");
const LoginPage = require("../pageobjects/login.page");
const RegisterPage = require("../pageobjects/register.page");
const validateEmail = require("../helperFunctions/validateEmail");
const deleteUserFromAWS = require("../helperFunctions/deleteUserFromAWS");
const email = "testpocacc@gmail.com";
const password = "Hello1234!";
require("dotenv").config();

describe("My Login application", () => {
  it("should register a new account with valid credentials", () => {
    RegisterPage.open();

    RegisterPage.register(email, password);
  });
  it("should go to gmail and check the email has been sent and validate the account", () => {
    validateEmail(email, password);
  });
  it("should login with valid credentials", () => {
    LoginPage.open();

    LoginPage.login(email, password);
  });
  it("should delete the user", () => {
    deleteUserFromAWS(email);
  });
});
