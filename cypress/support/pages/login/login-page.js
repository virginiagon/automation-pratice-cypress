import { LOGIN_ELEMENTS } from "./login-elements"

class LoginPage {

    login() {
        cy.get(LOGIN_ELEMENTS.buttons.login).click()
    }

    fillEmail(email) {
        cy.get(LOGIN_ELEMENTS.fields.email).type(email)
    }

    fillPassword(password) {
        cy.get(LOGIN_ELEMENTS.fields.password).type(password)
    }

    checkMessage(message) {
        cy.get(LOGIN_ELEMENTS.messages.class.invalidInput)
            .should('be.visible')
            .should('have.text', message)
    }

    checkMessageSuccess(email) {
        cy.get(LOGIN_ELEMENTS.messages.class.titleLoginSucess)
            .should('be.visible')
            .should('have.text', LOGIN_ELEMENTS.messages.titleLoginSucess)

        cy.get(LOGIN_ELEMENTS.messages.class.subtitleLoginSucess)
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }

}

export default new LoginPage()