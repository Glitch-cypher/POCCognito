// // const { getDefaultNormalizer } = require("@testing-library/dom");
// const LoginPage = require("../pageobjects/login.page");
// const RegisterPage = require("../pageobjects/register.page");
// const ForgotPasswordPage = require("../pageobjects/forgotPassword.page");
// const validateEmail = require("../helperFunctions/validateEmail");
// const deleteUserFromAWS = require("../helperFunctions/deleteUserFromAWS");
// const passwordGenerator = require("../helperFunctions/passwordGenerator");
// const getCode = require("../helperFunctions/getCode");
// const email = "testpocacc@gmail.com";
// const password = "Hello1234!";
// const newPass = "Goodbye4321!";

// describe("My Login application", () => {
//   it("should register a new account with valid credentials", () => {
//     RegisterPage.open();

//     RegisterPage.register(email, password);
//   });
//   it("should go to gmail and check the email has been sent and validate the account", () => {
//     validateEmail(email, password);
//   });
//   it("should login with valid credentials", () => {
//     LoginPage.open();
//     for (let i = 0; i < 10; i++) {
//       let wrongPassword = passwordGenerator();
//       while (wrongPassword === password) {
//         wrongPassword = passwordGenerator();
//       }
//       LoginPage.login(email, wrongPassword);
//       expect($("#errorMessage")).toExist();
//     }

//     LoginPage.login(email, password);
//   });
//   it("should send a forgot password email", () => {
//     ForgotPasswordPage.open();
//     ForgotPasswordPage.sendEmail(email);
//     waitForInterval(5000);
//     let code = getCode();
//     ForgotPasswordPage.resetPassword(code, newPass);
//   });
//   it("should delete the user", () => {
//     deleteUserFromAWS(email);
//   });
// });
