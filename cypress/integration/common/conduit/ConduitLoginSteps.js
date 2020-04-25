import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
///import conduitloginPage from "../../pages/conduit/ConduitLoginPage";

Given('I open Conduit login page', () => {
	cy.visit('https://react-redux.realworld.io/#/login');
});

When('I type in', (datatable) => {
	datatable.hashes().forEach((element) => {
		cy.get('input[type="email"]').type(element.username)
		cy.get('input[name="pass"]').type(element.password);
	});
});

When('I click on Sign in button', () => {
	cy.contains('Log In').should('be.visible').click();
});

Then('{string} should be shown', (content) => {
	cy.contains(content, { timeout: 10000 }).should('be.visible');
});
