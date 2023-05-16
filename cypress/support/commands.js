import { LCT_NavBar } from "../locators/components/lct_navbar";
import { LCT_LoginModal } from "../locators/components/lct_login_modal";

Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("username"),
    password = Cypress.env("password"),
    { cacheSession = true } = {}
  ) => {
    const login = () => {
      cy.visit("/uat");
      cy.get(LCT_NavBar.myAccount).click();

      cy.get(LCT_LoginModal.email).type(user);
      cy.get(LCT_LoginModal.password).type(password, { log: false });
      cy.get(LCT_LoginModal.loginButton).click();

      cy.get(LCT_LoginModal.email).should("not.be.visible");
    };

    const validate = () => {
      cy.getLocalStorage("session").should("exist");
    };

    const options = {
      cacheAcrossSpecs: true,
      validate,
    };

    if (cacheSession) {
      cy.session(user, login, options);
      return;
    }

    login();
  }
);

Cypress.Commands.add("logout", () => {});
