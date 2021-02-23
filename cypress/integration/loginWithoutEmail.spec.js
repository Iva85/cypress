describe("Login test without email", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it ("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })    
    it ('Login without email', () => {
        cy.get('#password').type('test1234')
        cy.get('button').click()
    })   
})