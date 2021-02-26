import { loginPage } from '../page_objects/loginPage.js'

describe("Login test", () => {
    beforeEach (() => {
        cy.visit('/')
        loginPage.visitLogin()
    })

    /*it ('Login', () => {
        loginPage.fillEmailInput('bla@test.com')
        loginPage.fillPasswordInput('test1234')
        loginPage.clickSubmitButton()
    })*/

    it ('Login', () => {
        loginPage.login('bla@test.com','test1234')
    })
    
})