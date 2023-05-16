import { LCT_MyAccount } from "../locators/pages/lct_my_account";
import { faker } from "@faker-js/faker";

class MyAccount {
  constructor() {
    this.firstNameInput = LCT_MyAccount.firstNameInput;
    this.lastNameInput = LCT_MyAccount.lastNameInput;
    this.emailInput = LCT_MyAccount.emailInput;
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
    cy.get(LCT_MyAccount.editDetailsButton).click();
    this.fillFirstName(userDto.firstName);
    this.fillLastName(userDto.lastName);
    this.fillEmail(userDto.email);
  }
}

export default { MyAccount };
