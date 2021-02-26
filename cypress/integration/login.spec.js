const locators = require("../fixtures/locators.json")

describe("Login test", () => {
    beforeEach (() => {
        cy.visit('/')
        cy.get(locators.login.navLogin).click()
    })

    /*it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })*/
    it ('Login without password', () => {
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
    })
    it ('Login and logout', () => {
        cy.get(locators.login.email).type('ivatest11@test.com')
        cy.get(locators.login.password).type('test1234')
        cy.get(locators.login.submit).click()
        cy.get(locators.logout.navLogout).click()
    })
    
})