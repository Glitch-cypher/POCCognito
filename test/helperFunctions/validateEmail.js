function validateEmail(email, password) {
  browser.url("https://mail.google.com/");
  const Input = $(".whsOnd");
  const nextButton = $(".VfPpkd-LgbsSe");
  const passwordCheckBox = $(".YZrg6");
  const emailList = $(".zA");
  const emailLink = $(".gs a");
  const meatballIcon = $(".ajV");
  const kebabButton = $(
    'div[class="T-I J-J5-Ji T-I-Js-Gs aap T-I-awG T-I-ax7 L3"]'
  );
  const deleteButton = $('[tabindex="0"][act="10"] div div');
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
  emailLink.waitForDisplayed();
  emailLink.click();
  browser.switchWindow("https://mail.google.com/");
  kebabButton.click();
  //   deleteButton.click();
}

module.exports = validateEmail;
