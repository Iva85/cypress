describe("Login test with incorrect password less than 8 characters", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })    
    it ('Login with incorrect password less than 8 characters', () => {
        cy.get('#email').type('ivatest11@test.com')
        cy.get('#password').type('test12')
        cy.get('button').click()
    })
})