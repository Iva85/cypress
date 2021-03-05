import { createGallery } from '../page_objects/createGallery.js'
import { loginPage } from '../page_objects/loginPage.js'

const data = require("../fixtures/data.json")

describe("Login and create gallery", () => {
    before (() => {
        cy.visit('/')
        loginPage.visitLogin()
    })

    it ('Login', () => {
        loginPage.login(data.loginRegister.email, data.loginRegister.password)
    })

    it ('Check if filter text and gallery title match', () => {
        cy.get('input[type="text"]').type(data.filter.allGalleriesFilter)
        createGallery.clickFilterButton()
        createGallery.filteredGalleries.should('contain', data.filter.allGalleriesFilter)
        //cy.get('.form-control').should('have.value', createGallery.filterGalleries)
    })    

    /*it ('filter', () => {
        cy.get('input[type="text"]').type(data.filter.allGalleriesFilter)
        createGallery.clickFilterButton()
        cy.wait(2000)
    }) 
    
    it ('iterate trough titles', () => {
        cy.get('h2').each((element) => {
            expect(element.text()).to.include(data.filter.allGalleriesFilter)
        })
    })   */
    
})