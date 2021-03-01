const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")

describe("Login test", () => {
    beforeEach (() => {
        cy.visit('/')
        cy.get(locators.login.navLogin).click()
    })
    
    //proverava da li se button prikazuje 
    /*it ("Visibility check", () => {
        cy.get('button').should('not.be.visible')
    })*/
    it ("Visibility check", () => {
        cy.get('button').should('be.visible')
    })

    /*it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })*/
    /*it ('Login without password', () => {
        cy.get(locators.login.email).type('ivatest11@test.com')
        cy.get(locators.login.submit).click()
    })
    it ('Login with incorrect email', () => {
        cy.get(locators.login.email).clear().type('ivatest1122@test.com')
        cy.get(locators.login.password).type('test1234')
        cy.get(locators.login.submit).click()
    })
    it ('Login with incorrect email type', () => {
        cy.get(locators.login.email).clear().type('ivatest1122')
        cy.get(locators.login.password).clear().type('test1234')
        cy.get(locators.login.submit).click()
    })
    it ('Login with incorrect password less than 8 characters', () => {
        cy.get(locators.login.email).clear().type('ivatest11@test.com')
        cy.get(locators.login.password).clear().type('test')
        cy.get(locators.login.submit).click()
    })
    it ('Login with incorrect password, 8 characters but no numbers', () => {
        cy.get(locators.login.email).clear().type('ivatest11@test.com')
        cy.get(locators.login.password).clear().type('testtest')
        cy.get(locators.login.submit).click()
    })*/
    it ('Login and logout', () => {
        cy.get(locators.login.email).type(data.loginRegister.email)
        cy.get(locators.login.password).type(data.loginRegister.password)
        cy.get(locators.login.submit).click()
        //proverava da li je link dobar nakon logovanja
        //cy.url().should('eq', 'http://localhost:8000/users/1/edit')
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        //cy.get(locators.logout.navLogout).click()
    })
    
})