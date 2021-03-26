function getCode() {
  browser.url("https://mail.google.com/");
  const emailList = $(".zA");
  const emailCode = $('[class="a3s aiL "]');
  emailList.waitForDisplayed();
  emailList.click();
  console.log(emailCode.value);
  browser.switchWindow("https://mail.google.com/");
  return emailCode.innerText.slice(26, 32);
}

module.exports = getCode;
