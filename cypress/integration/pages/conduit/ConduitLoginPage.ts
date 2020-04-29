import {BasePage} from "../BasePage"

class ConduitLoginPage extends BasePage{

    private readonly conduitUrl = 'https://react-redux.realworld.io/#/login'

    constructor() {
        super()
    }

    public visitConduit() {
        cy.visit(this.conduitUrl)
        return this
    }

    get loginUserName() {
        return cy.xpath('input[type="email"]');
    }

    get loginUserPassword() {
        return cy.xpath('input[type="password"]');
    }

}

export default new ConduitLoginPage();