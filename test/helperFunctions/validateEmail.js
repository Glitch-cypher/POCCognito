function validateEmail(email, password) {
  browser.url("https://mail.google.com/");
  const Input = $(".whsOnd");
  const nextButton = $(".VfPpkd-LgbsSe");
  const passwordCheckBox = $(".YZrg6");
  const emailList = $(".zA");
  const emailCode = $('[class="a3s aiL "]');
  const emailLink = $(".gs a");
  const meatballIcon = $(".ajV");
  Input.setValue(email);
  nextButton.click();
  browser.waitUntil(() => passwordCheckBox.isClickable(), {
    timeout: 5000,
    timeoutMsg: "expect password checkbox to be clickable",
  });
  Input.setValue(password);
  nextButton.click();
  emailList.waitForDisplayed();
  emailList.click();
  if (meatballIcon.isExisting()) {
    meatballIcon.click();
  }
  emailLink.click();
  browser.switchWindow("https://mail.google.com/");
}

module.exports = validateEmail;
