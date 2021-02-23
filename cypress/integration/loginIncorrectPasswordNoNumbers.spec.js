describe("Login test with incorrect password, 8 characters but no numbers", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })    
    it ('Login with incorrect password, 8 characters but no numbers', () => {
        cy.get('#email').clear().type('ivatest11@test.com')
        cy.get('#password').clear().type('testtest')
        cy.get('button').click()
    })
})