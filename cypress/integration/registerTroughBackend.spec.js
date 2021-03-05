const locators = require("../fixtures/locators.json")
const faker = require('faker')
const data = require("../fixtures/data.json")

describe("Registration test", () => {
    it('intercept requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) => {
        }).as('succesfullRegister')
        cy.visit('/register')
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName)
        cy.get(locators.register.email).clear().type(data.loginRegister.email)
        cy.get(locators.register.password).clear().type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
        cy.wait('@succesfullRegister').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
    
})