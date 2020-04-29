import {BasePage} from "../BasePage"

class FacebookLoginPage extends BasePage {

    private readonly facebookUrl = 'https://facebook.com'
    private readonly usernameTextBox: string = '#email'
    private readonly passwordTextBox: string = '#pass'
    private readonly signInTextBtn: string = 'Log In'

    constructor() {
        super()
    }

    public openFacebookUrl() {
        cy.visit(this.facebookUrl)
    }

    public setUsername(username: string) {
        cy.get(this.usernameTextBox).should('be.visible').type(username)
        return this
    }

    public setPassword(password: string) {
        cy.get(this.passwordTextBox).should('be.visible').type(password)
        return this
    }

    public signIn() {
        cy.contains(this.signInTextBtn).should('be.visible').click()
    }

    public facebookSignIn(username: string, password: string) {
        this.setUsername(username).setUsername(password).signIn()
        return this
    }
}

export default new FacebookLoginPage()