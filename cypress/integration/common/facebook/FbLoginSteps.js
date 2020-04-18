import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('Open Facebook login page', () => {
    cy.visit('https://facebook.com')
});

When('Set', (datatable) => { 
    datatable.hashes().forEach(element => {
        cy.get('input[@id="email"]').type(element.username)
        cy.get('input[type="password"]').type(element.password)
    })
})
  
When('Click on Sign in button', () => {
    cy.get('.btn').contains('Sign in').should('be.visible').click()
});
  
Then('{string} should be shown', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible')
});