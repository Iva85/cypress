describe("Registration test with wrong email type", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on register button", () => {
        cy.get("li:nth-of-type(2) > .nav-buttons.nav-link").click()
    })
    it ('Register without @ and domain', () => {
        cy.get('#first-name').type('Iva2')
        cy.get('#last-name').type('Test2')
        cy.get('#email').type('ivatest111')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })
    it ('Register without domain', () => {
        cy.get('#first-name').clear().type('Iva2')
        cy.get('#last-name').clear().type('Test2')
        cy.get('#email').clear().type('ivatest111@')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })
    // ovo je proslo kao uspesna registracija
    /*it ('Register with incorrect domain', () => {
        cy.get('#first-name').clear().type('Iva2')
        cy.get('#last-name').clear().type('Test2')
        cy.get('#email').clear().type('ivatest111@test.c')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })*/
    
})