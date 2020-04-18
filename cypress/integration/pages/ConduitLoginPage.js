class ConduitLoginPage {

    constructor() {}

    get loginUserName() {
        return cy.xpath('input[type="email"]');
    }

    get loginUserPassword() {
        return cy.xpath('input[type="password"]');
    }

}export default new ConduitLoginPage();