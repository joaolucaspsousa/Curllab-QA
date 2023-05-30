import { Locators_MyAccount } from "../locators/pages/lct_my_account";

class PO_MyAccount {
  constructor() {
    this._firstNameInput = Locators_MyAccount.firstNameInput;
    this._lastNameInput = Locators_MyAccount.lastNameInput;
    this._emailInput = Locators_MyAccount.emailInput;
  }

  _fillFirstName(firstName) {
    cy.log(`[MyAccount] First Name: ${firstName}`);

    if (firstName == "") {
      cy.get(this._firstNameInput).clear();
      return;
    }

    cy.get(this._firstNameInput).clear().type(firstName);
  }

  _fillLastName(lastName) {
    cy.log(`[MyAccount] Last Name: ${lastName}`);

    if (lastName == "") {
      cy.get(this._lastNameInput).clear();
      return;
    }

    cy.get(this._lastNameInput).clear().type(lastName);
  }

  _fillEmail(email) {
    cy.log(`[MyAccount] Email: ${email}`);

    if (email == "") {
      cy.get(this._emailInput).clear();
      return;
    }

    cy.get(this._emailInput).clear().type(email);
  }

  editUserDetails(userDto) {
    cy.log(`[MyAccount] Edit User Details: ${JSON.stringify(userDto)}`)
    cy.get(Locators_MyAccount.editDetailsButton).click();
    this._fillFirstName(userDto.firstName);
    this._fillLastName(userDto.lastName);
    this._fillEmail(userDto.email);
  }
}

export default { PO_MyAccount };
