//main page object containing all methods, selectors and functionality
//that is shared across all page objects

module.exports = class Page {
  //Opens a sub page of the page
  //e.g. takes you to /login or /profile

  open(path) {
    return browser.url(`http://localhost:3000/${path}`);
  }
};
