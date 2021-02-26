import { createGallery } from '../page_objects/createGallery.js'
import { loginPage } from '../page_objects/loginPage.js'

describe("Login and create gallery", () => {
    before (() => {
        cy.visit('/')
        loginPage.visitLogin()
    })

    it ('Login', () => {
        loginPage.login('ivatest11@test.com','test1234')
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
            'Iva test new 1',
            'Test description new 1',
            'https://images.all-free-download.com/images/graphicthumb/hd_flower_picture_01_hd_pictures_167032.jpg'
            )
    })
    
})