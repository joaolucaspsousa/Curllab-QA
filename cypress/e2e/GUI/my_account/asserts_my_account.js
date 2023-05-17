import { Locators_MyAccount } from "../../../locators/pages/lct_my_account";

const myAccountMessages = {
  informationUpdatedSuccess: "Successfully updated your personal information.",

  emptyFields: {
    firstName: " First name is required",
    lastName: " Last name is required",
    email: " Email is required",
  },

  partialCompletedFields: {
    firstName: "First name must be between 2 and 60 characters long",
    lastName: "Last name must be between 2 and 60 characters long",
    email: "Email must be a valid email address",
  },
};

class AS_MyAccount {
  CT01() {
    cy.wait(1000);
    cy.expected(
      Locators_MyAccount.accountTitle,
      "contain",
      "Personal Information"
    );
    cy.log("SVTS: My Account Details Page visited successfully");
  }

  CT02() {
    // Assert that the success message is displayed
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.informationUpdatedSuccess
    );

    cy.log("SVTS: Successfully to change user details with valid information");
  }

  CT03() {
    // Assert that the error messages are displayed with the required fields is empty
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.emptyFields.firstName
    );
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.emptyFields.lastName
    );
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.emptyFields.email
    );

    // Assert that the save button is disabled
    cy.get(Locators_MyAccount.saveButton).should("be.enabled");

    cy.log("SVTS: Failed to change user details with invalid information");
  }

  CT04() {
    // Assert that the error messages are displayed
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.partialCompletedFields.firstName
    );
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.partialCompletedFields.lastName
    );
    cy.expected(
      ".profile__left__shipping",
      "contain",
      myAccountMessages.partialCompletedFields.email
    );

    // Assert that the save button is disabled with the invalid information
    cy.get(Locators_MyAccount.saveButton).should("be.enabled");

    cy.log("SVTS: Failed to change user details with invalid information");
  }
}

export default { AS_MyAccount };
