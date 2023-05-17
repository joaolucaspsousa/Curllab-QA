import { Locators_MyAccount } from "../locators/pages/lct_my_account";

class PO_MyAccount {
  constructor() {
    this.firstNameInput = Locators_MyAccount.firstNameInput;
    this.lastNameInput = Locators_MyAccount.lastNameInput;
    this.emailInput = Locators_MyAccount.emailInput;
  }

  fillFirstName(firstName) {
    if (firstName == "") {
      cy.get(this.firstNameInput).clear();
      return;
    }

    cy.get(this.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    if (lastName == "") {
      cy.get(this.lastNameInput).clear();
      return;
    }

    cy.get(this.lastNameInput).clear().type(lastName);
  }

  fillEmail(email) {
    if (email == "") {
      cy.get(this.emailInput).clear();
      return;
    }

    cy.get(this.emailInput).clear().type(email);
  }

  editUserDetails(userDto) {
    cy.get(Locators_MyAccount.editDetailsButton).click();
    this.fillFirstName(userDto.firstName);
    this.fillLastName(userDto.lastName);
    this.fillEmail(userDto.email);
  }
}

export default { PO_MyAccount };
