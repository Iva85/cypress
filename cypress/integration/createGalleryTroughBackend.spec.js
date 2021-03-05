import { createGallery } from '../page_objects/createGallery.js'
import { loginPage } from '../page_objects/loginPage.js'

const data = require("../fixtures/data.json")

describe("Login and create gallery", () => {
    before(() => {
        cy.loginCommand()
    })

    let galleryId = ''
    it('intercept requesta', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('succesfullGallery')
        cy.visit('/create')
        createGallery.createNewGallery(
            'aaaa',
            'Something in description',
            'https://images.all-free-download.com/images/graphicthumb/hd_flower_picture_01_hd_pictures_167032.jpg'
            )
        cy.wait('@succesfullGallery').then((interception) => {
                expect(interception.response.statusCode).to.equal(201)
                galleryId = interception.response.body.id
                
        })
       
    })
    it('Gallery id', () => {
        //console.log(galleryId);
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
    })
    it('Delete gallery', () => {
        cy.intercept('POST', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        }).as('succesfullDelete')
        cy.get("a[href='/my-galleries/']").click()
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        cy.contains('Delete Gallery').click()
        cy.wait('@succesfullDelete').then((interception) => {
                expect(interception.response.statusCode).to.equal(200)
                
        })
       
    })
    
})