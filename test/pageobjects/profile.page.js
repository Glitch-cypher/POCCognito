const Page = require("./page");
class ProfilePage extends Page {
  get pageTitle() {
    return $("#pageTitle");
  }
  get pageInfo() {
    return $("#pageInfo");
  }
  get idDisplay() {
    return $("#idDisplay");
  }

  open() {
    return super.open("profile");
  }
}

module.exports = new ProfilePage();
