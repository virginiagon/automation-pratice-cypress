/// <reference types="cypress" />

import { USER_ELEMENTS } from "./user-registration-elements";

class UserRegistrationPage {

    saveRegister() {
        cy.get(USER_ELEMENTS.buttons.register).click();
    }

    checkMessage(message) {
        cy.get(USER_ELEMENTS.messages.error)
            .should('be.visible')
            .should('have.text', message)
    }

    fillName(name) {
        cy.get(USER_ELEMENTS.fields.userName).type(name);
    }

}

export default new UserRegistrationPage();