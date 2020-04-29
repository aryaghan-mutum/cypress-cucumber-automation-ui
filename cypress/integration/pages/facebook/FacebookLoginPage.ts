import {BasePage} from "../BasePage"

class FacebookLoginPage extends BasePage{

	private facebookUrl = 'https://facebook.com';
    private usernameTextBox: string = '#email'
	private passwordTextBox: string = '#pass'
	private signInTextBtn: string = 'Log In'

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
