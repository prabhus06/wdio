const { setValue, click, isVisible } = require('../../lib/actionHelpers');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get iAgree () { return $('#zV9nZe')}
    get search () { return $('[name="q"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        expect(this.iAgree).toBeDisplayed();
        click(this.iAgree);
        setValue(this.search, "testing");
        this.inputUsername.setValue(username);
        setValue(this.inputPassword,password);
        expect(this.btnSubmit).toBeDisplayed().click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
