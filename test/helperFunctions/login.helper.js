const LoginPage = require("../pageobjects/login.page");

function loginHelper(email, password) {
  LoginPage.open();
  LoginPage.login(email, password);
}
module.exports = loginHelper;
