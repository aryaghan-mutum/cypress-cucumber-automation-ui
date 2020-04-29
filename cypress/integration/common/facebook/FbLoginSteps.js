import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import facebookLoginPage from '../../pages/facebook/FacebookLoginPage'

Given('Open Facebook login page', () => {
    facebookLoginPage.openFacebookUrl()
})

When('Set username {string} and password {string}', (username, password) => {
	facebookLoginPage.setPassword(username).setPassword(password)
})

Then('Click Sign in button', () => {
    facebookLoginPage.signIn()
})
