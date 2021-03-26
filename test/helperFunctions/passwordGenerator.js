function passwordGenerator() {
  let allowedChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz¬!£$%^&*()_+-=[]{}#@~;:,./?><";
  let stringLength = 10;
  let password = "";
  for (let i = 0; i < stringLength.length; i++) {
    let randN = Math.floor(Math.random * allowedChars.length);
    password += allowedChars[randN];
  }
  return password;
}
module.exports = passwordGenerator;
