// describe("test to see which page renders when different urls are entered when not logged in", () => {
//   it("should load the login page when going to /", () => {
//     browser.url("http://localhost:3000/");

//     expect($("#loginPage")).toExist();
//     expect($("#profilePage")).not.toExist();
//     expect($("#signupPage")).not.toExist();
//     expect($("#forgotPasswordPage")).not.toExist();
//   });
//   it("should load the login page when going to /profile", () => {
//     browser.url("http://localhost:3000/profile");

//     expect($("#loginPage")).not.toExist();
//     expect($("#profilePage")).not.toExist();
//     expect($("#signupPage")).not.toExist();
//     expect($("#forgotPasswordPage")).not.toExist();
//   });
//   it("should load the login page when going to /signup", () => {
//     browser.url("http://localhost:3000/signup");

//     expect($("#loginPage")).not.toExist();
//     expect($("#profilePage")).not.toExist();
//     expect($("#signupPage")).toExist();
//     expect($("#forgotPasswordPage")).not.toExist();
//   });
//   it("should load the login page when going to /forgotpassword", () => {
//     browser.url("http://localhost:3000/forgotpassword");

//     expect($("#loginPage")).not.toExist();
//     expect($("#profilePage")).not.toExist();
//     expect($("#signupPage")).not.toExist();
//     expect($("#forgotPasswordPage")).toExist();
//   });
// });
