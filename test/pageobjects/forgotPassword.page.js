const Page = require("./page");
class ForgotPasswordPage extends Page {
  get inputEmail() {
    return $("#email");
  }
  get inputCode() {
    return $("#code");
  }
  get inputnewPass() {
    return $("#newPass");
  }
  get inputConfirmPass() {
    return $("#confirmPass");
  }
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  sendEmail(username) {
    this.inputEmail.setValue(username);
    this.btnSubmit.click();
  }

  resetPassword(code, newPass) {
    this.inputCode.setValue(code);
    this.inputnewPass.setValue(newPass);
    this.inputConfirmPass.setValue(newPass);
    this.btnSubmit.click();
  }
  // a method to take the user to the forgotPassword page
  open() {
    return super.open("forgotPassword");
  }
}

module.exports = new ForgotPasswordPage();
