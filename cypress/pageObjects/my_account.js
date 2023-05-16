import { LCT_MyAccount } from "../locators/pages/lct_my_account";
import { faker } from "@faker-js/faker";

let MyAccount = {
  // My Account Information
  firstName: `${faker.name.firstName()}`,
  lastName: `${faker.name.lastName()}`,
  email: `${Cypress.env("username")}`,

  GUI: {
    editUserDetails: (userDto) => {
      cy.get(LCT_MyAccount.editDetailsButton).click();
      cy.get(LCT_MyAccount.firstNameInput).clear().type(userDto.firstName);
      cy.get(LCT_MyAccount.lastNameInput).clear().type(userDto.lastName);
      cy.get(LCT_MyAccount.emailInput).clear().type(userDto.email);
    },
  },
};

export default { MyAccount };
