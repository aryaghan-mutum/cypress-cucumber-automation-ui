import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
//import facebookPage from '../../pages/facebook/FacebookLoginPage'

Given('Open Facebook login page', () => {
    cy.visit('https://facebook.com')
})

When('Set credentials and login', (datatable) => {
	datatable.hashes().forEach((element) => {
		cy.get('#email').type(element.username)
	    cy.get('#pass').type(element.password)
    })
})

Then('Click Sign in button', () => {
    cy.contains('Log In').should('be.visible').click();
})
