class CreateGallery {

    get createGalleryButton() {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }

    get galleryTitle() {
        return cy.get('#title')
    }

    get galleryDescription() {
        return cy.get('#description')
    }

    get galleryImage() {
        return cy.get('.input-group > .form-control')
    }

    get createSubmitButton() {
        return cy.get('form > :nth-child(4)')
    }


    clickCreateGalleryButton() {
        this.createGalleryButton.click()
    }

    createNewGallery(title,desc,img) {
        this.galleryTitle.type(title)
        this.galleryDescription.type(desc)
        this.galleryImage.type(img)
        this.createSubmitButton.click()
    }


    /*fillGalleryTitle(title) {
        this.galleryTitle.type(title)
    }

    fillGalleryDescription(desc) {
        this.galleryDescription.type(desc)
    }

    addGalleryImage(img) {
        this.galleryImage.type(img)
    }

    createNewGallery() {
        this.createSubmitButton.click()
    }*/

    get titleTooSHort() {
        return cy.get(".alert")
    }

    get filterGalleries() {
        return cy.get('input[type="text"]')
    }

    get filterButton() {
        return cy.get(".input-group-append > .btn");
    }

    clickFilterButton() {
        this.filterButton.click()
    }

    get filteredGalleries () {
        return cy.get("h2 > .box-title")
    }

}

export const createGallery = new CreateGallery()