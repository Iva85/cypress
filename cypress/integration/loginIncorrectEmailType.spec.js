describe("Login test with incorrect email type", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })    
    it ('Login with incorrect email type', () => {
        cy.get('#email').type('ivatest1122')
        cy.get('#password').type('test1234')
        cy.get('button').click()
    })
    
})