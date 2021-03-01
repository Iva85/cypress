import { registerPage } from '../page_objects/registerPage.js'

const locators = require("../fixtures/locators.json")
const faker = require('faker')
const data = require("../fixtures/data.json")


describe("Registration test", () => {
    beforeEach (() => {
        cy.visit('/')
        cy.get(locators.register.navRegister).click()
    })

    it ('Register', () => {
        cy.get(locators.register.firstName).type(data.loginRegister.firstName)
        cy.get(locators.register.lastName).type(data.loginRegister.lastName)
        cy.get(locators.register.email).type(data.loginRegister.email)
        cy.get(locators.register.password).type(data.loginRegister.password)
        cy.get(locators.register.passwordConfirmation).type(data.loginRegister.wrongConfirmPassword)
        cy.get(locators.register.terms).check()
        cy.get(locators.register.submit).click()
        //proverava da li u alert-u pise to sto treba
        //registerPage.confirmPassDontMatch.should('contain', data.errors.passMissMatch)

        //Checking is terms and conditions checkbox checked
        registerPage.termsAndConditionsChecked.should('be.checked')
    })

    
    
})