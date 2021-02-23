describe("Registration test with existing email", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on register button", () => {
        cy.get("li:nth-of-type(2) > .nav-buttons.nav-link").click()
    })
    it ('Register with existing email', () => {
        cy.get('#first-name').type('Iva2')
        cy.get('#last-name').type('Test2')
        cy.get('#email').type('ivatest111@test.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })
    
})