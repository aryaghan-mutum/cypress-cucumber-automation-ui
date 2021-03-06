import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import conduitloginPage from '../../pages/conduit/ConduitLoginPage'

Given('I open Conduit login page', () => {
	debugger
	conduitloginPage.visitConduit()
});

When('I type in', () => {
	// datatable.hashes().forEach((element) => {
	// 	cy.get('input[type="email"]').type(element.username)
	// 	cy.get('input[type="password"]').type(element.password);
	// });


});

When('I click on Sign in button', () => {
	cy.get('btn').contains('Sign in').should('be.visible').click();
});

Then('{string} should be shown', (content) => {
	cy.contains(content, { timeout: 10000 }).should('be.visible');
});
