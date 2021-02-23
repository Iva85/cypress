describe("Login test without password", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })    
    it ('Login without password', () => {
        cy.get('#email').type('ivatest11@test.com')
        cy.get('button').click()
    })    
})