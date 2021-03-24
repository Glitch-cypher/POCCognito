const Page = require("./page");

// register page specific methods

class RegisterPage extends Page {
  get inputUsername() {
    return $("#username");
  }
  get inputPassword() {
    return $("#password");
  }
  get inputConfirmPassword() {
    return $("#confirm-password");
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  // Method to test register functionality

  register(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.inputConfirmPassword.setValue(password);
    this.btnSubmit.click();
  }

  //opens register page

  open() {
    return super.open("signUp");
  }
}

module.exports = new RegisterPage();
