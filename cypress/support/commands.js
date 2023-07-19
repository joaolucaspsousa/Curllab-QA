import { Locators_NavBar } from "../locators/components/lct_navbar";
import { Locators_LoginModal } from "../locators/components/lct_login";

Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("username"),
    password = Cypress.env("password"),
    { cacheSession = true } = {}
  ) => {
    const login = () => {
      cy.visit("/uat");
      cy.get(Locators_NavBar.myAccount).click();

      cy.get(Locators_LoginModal.email).type(user);
      cy.get(Locators_LoginModal.password).type(password, { log: false });
      cy.get(Locators_LoginModal.loginButton).click();

      cy.get(Locators_LoginModal.email).should("not.be.visible");
    };

    const validate = () => {
      cy.getLocalStorage("session").should("exist");
    };

    const options = {
      cacheAcrossSpecs: true,
      validate,
    };

    cy.log(`Logging in as ${user}` & `Password: ${password}`)

    if (cacheSession) {
      cy.session(user, login, options);
      return;
    }

    login();
  }
);

Cypress.Commands.add("logout", () => {});

Cypress.Commands.add("expected", (element, assert, expected, boolean) => {
  cy.get(element, { timeout: 5000 }).then(($element) => {
    switch (assert) {
      case "contain":
        expect($element).to.contain(expected);
        break;

      case "equal":
        expect($element).to.equal(expected);
        break;

      case "have.lengthOf":
        expect($element).to.have.value(expected);
        break;

      case "have.property":
        expect($element).to.have.property(expected, boolean);
        break;

      case "not.have.property":
        expect($element).to.not.have.property(expected, boolean);
        break;

      default:
        break;
    }
  });
});

Cypress.Commands.add("loggedStatus", () => {
  cy.getLocalStorage("user").should("exist");
  if (cy.getLocalStorage("user").should("exist")) {
    return true;
  }

  return false;
});
