/// <reference types="cypress" />

class CommunsPage {

    accessUserRegistration() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-lock').click()
    }

}

export default new CommunsPage();