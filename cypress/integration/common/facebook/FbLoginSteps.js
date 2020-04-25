import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://facebook.com';

Given('Open Facebook login page', () => {
	cy.visit(url);
})

When('Set username and password', (datatable) => {
	datatable.hashes().forEach((element) => {
		cy.get('input[id="email"]').type(element.username)
        cy.get('input[name="pass"]').type(element.password)
	});
})

Then('Click Sign in button', () => {
    cy.contains('Log In').should('be.visible').click();
})

