const LoginPage = require('../pageobjects/login.page');
const RegisterPage = require('../pageobjects/register.page');

describe('My Login application', () => {
    it('should register a new account with valid credentials', () => {
        RegisterPage.open();

        RegisterPage.register('fklvghdsiuvyhrfguibsyriycgfkzsgfoiuzs@yopmail.com', 'SuperSecretPassword!');
    });
    it('should go to Yopmail and check the email has been sent', () => {
        browser.url('http://www.yopmail.com/en/')
        const emailInput = $("#login");
        const checkInboxButton = $(".sbut");
        const emailList = $(".m");
        
        emailInput.setValue('asdfghjklqwertyuiopzxcvbn')
        checkInboxButton.click()

    });
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('fklvghdsiuvyhrfguibsyriycgfkzsgfoiuzs@yopmail.com', 'SuperSecretPassword1!'); 
    });
    
});


