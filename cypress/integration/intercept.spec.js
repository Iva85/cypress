const locators = require("../fixtures/locators.json")
const data = require("../fixtures/data.json")

describe("Login test", () => {
    it ('intercept requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('succesfullLogin')
        cy.visit('/login')
        cy.get(locators.login.email).type(data.loginRegister.email)
        cy.get(locators.login.password).type(data.loginRegister.password)
        cy.get(locators.login.submit).click()
        cy.wait('@succesfullLogin').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })
    
})