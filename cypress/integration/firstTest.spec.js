describe("Login test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
        cy.wait(10000)
    })
    it ("second test", () => {
        cy.get("a[href='/login']").click()
    })
    it ('Login', () => {
        cy.get('#email').type('ivatest@test.com')
        cy.get('#password').type('test1234')
        cy.get('button').click()
    })
    it ('Logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})
