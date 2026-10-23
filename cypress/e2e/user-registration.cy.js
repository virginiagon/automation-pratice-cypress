import communsPage from "../support/pages/communs_page";
import { USER_ELEMENTS } from "../support/pages/user-registration/user-registration-elements";
import userRegistrationPage from "../support/pages/user-registration/user-registration-page";

describe('Cadastro de usuário', () => {

  beforeEach('Acessar página de cadastro de usuáro', () => {
      communsPage.acessarCadastroUsuario();
  });

  it('Campo nome vazio', () => {
    userRegistrationPage.saveRegister();
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorName);
  })

  it.only('Campo e-mail vazio', () => {
    userRegistrationPage.fillName("Virgínia");
    userRegistrationPage.saveRegister();
    userRegistrationPage.checkMessage(USER_ELEMENTS.messages.errorEmail)
  })

  it('Campo e-mail inválido', () => {

  })

  it('Campo senha vazio', () => {

  })

  it('Campo senha inválido', () => {

  })

  it('Cadastro com sucesso', () => {

  })

})