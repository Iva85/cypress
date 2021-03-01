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

    it ('Go to create gallery page', () => {
        createGallery.clickCreateGalleryButton()
    })

    /*it ('Create new gallery', () => {
        createGallery.fillGalleryTitle('Iva test')
        createGallery.fillGalleryDescription('Test description')
        createGallery.addGalleryImage('https://images.all-free-download.com/images/graphicthumb/5_cool_glare_background_of_highdefinition_picture_169625.jpg')
        createGallery.createNewGallery()
    })*/

    it ('Create new gallery', () => {
        createGallery.createNewGallery(
            'a',
            'Something in description',
            'https://images.all-free-download.com/images/graphicthumb/hd_flower_picture_01_hd_pictures_167032.jpg'
            )
            
        createGallery.titleTooSHort
        .should('contain', data.errors.galleryTitleTooShort)
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        //.and('include', 'cypress.io')
    })
    
})