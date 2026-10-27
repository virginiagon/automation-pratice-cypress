import communsPage from "../support/pages/common-page";
import { USER_ELEMENTS } from "../support/pages/user-registration/user-registration-elements";
import userRegistrationPage from "../support/pages/user-registration/user-registration-page";
import { faker } from '@faker-js/faker'

describe('Cadastro de usuário', () => {

  beforeEach('Acessar página de cadastro de usuáro', () => {
      communsPage.accessUserRegistration()
  });

  it('Campo nome vazio', () => {
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorName)
  })

  it('Campo e-mail vazio', () => {
    userRegistrationPage.fillName(faker.person.fullName())
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorEmail)
  })

  it('Campo e-mail inválido', () => {
    userRegistrationPage.fillName(faker.person.fullName())
    userRegistrationPage.fillEmail(faker.internet.username())
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorEmail)
  })

  it('Campo senha vazio', () => {
    userRegistrationPage.fillName(faker.person.fullName())
    userRegistrationPage.fillEmail(faker.internet.email())
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorPassword)
  })

  it('Campo senha inválido', () => {
    userRegistrationPage.fillName(faker.person.fullName())
    userRegistrationPage.fillEmail(faker.internet.email())
    userRegistrationPage.fillPassword(faker.internet.password({length: 3}))
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorPassword)
  })

  it('Cadastro com sucesso', () => {
    let fullName = faker.person.fullName();

    userRegistrationPage.fillName(fullName)
    userRegistrationPage.fillEmail(faker.internet.email())
    userRegistrationPage.fillPassword(faker.internet.password({length: 6}))
    userRegistrationPage.saveRegister()
    userRegistrationPage.checkMessageSucess(fullName)

  })

})