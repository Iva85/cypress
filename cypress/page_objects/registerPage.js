class RegisterPage {
    get confirmPassDontMatch() {
        return cy.get(":nth-child(4) > .alert")
    }

    get termsAndConditionsChecked() {
        return cy.get(".form-check-input")
    }

}

export const registerPage = new RegisterPage()