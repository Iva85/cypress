describe("Login test", () => {
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
    it ('Login with incorrect email', () => {
        cy.get('#email').clear().type('ivatest1122@test.com')
        cy.get('#password').type('test1234')
        cy.get('button').click()
    })
    it ('Login with incorrect email type', () => {
        cy.get('#email').clear().type('ivatest1122')
        cy.get('#password').clear().type('test1234')
        cy.get('button').click()
    })
    it ('Login with incorrect password less than 8 characters', () => {
        cy.get('#email').clear().type('ivatest11@test.com')
        cy.get('#password').clear().type('test')
        cy.get('button').click()
    })
    it ('Login with incorrect password, 8 characters but no numbers', () => {
        cy.get('#email').clear().type('ivatest11@test.com')
        cy.get('#password').clear().type('testtest')
        cy.get('button').click()
    })
    it ('Login', () => {
        cy.get('#email').type('ivatest11@test.com')
        cy.get('#password').type('test1234')
        cy.get('button').click()
    })
    
})