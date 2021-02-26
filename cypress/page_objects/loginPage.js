class LoginPage {
    get navigationLogin() {
        return cy.get("a[href='/login']")
    }

    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get submitButton() {
        return cy.get('button[type="submit"]')
    }

    visitLogin() {
        this.navigationLogin.click()
    }

    /*fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(pass) {
        this.passwordInput.type(pass)
    }

    clickSubmitButton() {
        this.submitButton.click()
    }*/

    login(email,password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
    /*login (email, password) {
        email = email || indefined
        password = password || undefined
        if (password != undefined || email != undefined) {
            this.emailInput.type(email)
            this.passwordInput.type(password)
        }

        this.submitButton.click()
    }*/

}

export const loginPage = new LoginPage()