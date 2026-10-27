/// <reference types="cypress" />

import { USER_ELEMENTS } from "./user-registration-elements";

class UserRegistrationPage {

    saveRegister() {
        cy.get(USER_ELEMENTS.buttons.register).click()
    }

    checkMessage(message) {
        cy.get(USER_ELEMENTS.messages.error)
            .should('be.visible')
            .should('have.text', message)
    }

    fillName(name) {
        cy.get(USER_ELEMENTS.fields.userName).type(name)
    }

    fillEmail(email) {
        cy.get(USER_ELEMENTS.fields.email).type(email)
    }

    fillPassword(password) {
        cy.get(USER_ELEMENTS.fields.password).type(password)
    }

    checkMessageSucess(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }
}

export default new UserRegistrationPage();