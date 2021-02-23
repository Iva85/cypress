describe("Registration test without first name", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on register button", () => {
        cy.get("li:nth-of-type(2) > .nav-buttons.nav-link").click()
    })
    it ('Register without first name', () => {
        cy.get('#last-name').type('Test2')
        cy.get('#email').type('ivatest2@test.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
    })    
})