describe("Login test", () => {
    /*before(() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login',
        { email: "ivatest2@test.com", password: "test1234"}
        )
        .its('body').then((identity) => {
            window.localStorage.setItem('token', identity.access_token);
        }) 
    })*/
    before(() => {
        cy.loginCommand()
    })

    it('visit gallery', () => {
        cy.visit('/')
    })
    
})