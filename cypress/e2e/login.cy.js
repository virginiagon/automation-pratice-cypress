import loginPage from "../support/pages/login/login-page"
import communsPage from "../support/pages/common-page"
import { LOGIN_ELEMENTS } from "../support/pages/login/login-elements"
import { faker } from "@faker-js/faker"

describe('Login', () => {

  beforeEach('Acessar página de login', () => {
    communsPage.accessLoginPage()
  })
  
  it('Valida e-mail vazio', () => {
    loginPage.login();
    loginPage.checkMessage(LOGIN_ELEMENTS.messages.invalidEmail)
  })

  it('Valida e-mail inválido', () => {
    loginPage.fillEmail(faker.internet.username())
    loginPage.login()
    loginPage.checkMessage(LOGIN_ELEMENTS.messages.invalidEmail)
  })

  it('Valida senha vazia', () => {
    loginPage.fillEmail(faker.internet.email())
    loginPage.login()
    loginPage.checkMessage(LOGIN_ELEMENTS.messages.invalidPassword)
  })

  it('Valida senha inválida', () => {
    loginPage.fillEmail(faker.internet.email())
    loginPage.fillPassword(faker.internet.password({length: 3}))
    loginPage.login()
    loginPage.checkMessage(LOGIN_ELEMENTS.messages.invalidPassword)
  })

  it('Login com sucesso', () => {
    let email = faker.internet.email()
    loginPage.fillEmail(email)
    loginPage.fillPassword(faker.internet.password({length: 6}))
    loginPage.login()
    loginPage.checkMessageSuccess(email)
  })

})