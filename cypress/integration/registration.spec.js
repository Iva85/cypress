describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on register button", () => {
        cy.get("li:nth-of-type(2) > .nav-buttons.nav-link").click()
    })
    it ('Register-failed', () => {
        //cy.get('#first-name').type('')
        cy.get('#last-name').type('Test1')
        cy.get('#email').type('ivatest1@test.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })
    it ('Register', () => {
        cy.get('#first-name').clear().type('Iva1')
        cy.get('#last-name').clear().type('Test1')
        cy.get('#email').clear().type('ivatest11@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })
    
})