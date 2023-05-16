import { Routes } from "../../routes/routes";
import { MyAccount } from "../../pageObjects/my_account";
import { LCT_MyAccount } from "../../locators/pages/lct_my_account";

describe("ST02: Tests of the My Information section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const MyAccountPage = new MyAccount();
  
  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myAccount);
  });

  context("Context 1.1: Success Scenarios", () => {
    it("CT01: Check that are in the correct section of My Account", () => {
      cy.get(LCT_MyAccount.accountTitle).contains("Personal Information");
      cy.log("SVTS: My Account Details Page visited successfully");
    });

    it("CT02: Edit user details with successfully", () => {
      const userDto = {
        firstName: "Test",
        lastName: "User",
        email: Cypress.env("username"),
      };

      MyAccountPage.editUserDetails(userDto);
      cy.get(LCT_MyAccount.saveButton).click();

      cy.get(".profile__left__shipping").contains(
        "Successfully updated your personal information."
      );
      cy.log(
        "SVTS: Successfully to change user details with valid information"
      );
    });
  });

  context("Context 2.1: Failure Scenarios", () => {
    it("CT03: Not filling in the Required Fields", () => {
      const userDto = {
        firstName: "",
        lastName: "",
        email: "",
      };

      MyAccountPage.editUserDetails(userDto);
      cy.get(LCT_MyAccount.saveButton).click();

      cy.get(".profile__left__shipping").contains(" First name is required");
      cy.get(".profile__left__shipping").contains(" Last name is required");
      cy.get(".profile__left__shipping").contains(" Email is required");

      cy.get(LCT_MyAccount.saveButton).should("be.disabled");

      cy.log("SVTS: Failed to change user details with invalid information");
    });

    it("CT04: Partial filling of the Required Fields", () => {
      const userDto = {
        firstName: "G",
        lastName: "T",
        email: "T@G.C",
      };

      MyAccountPage.editUserDetails(userDto);
      cy.get(LCT_MyAccount.saveButton).click();

      cy.get(".profile__left__shipping").contains(
        "First name must be between 2 and 60 characters long"
      );
      cy.get(".profile__left__shipping").contains(
        "Last name must be between 2 and 60 characters long"
      );
      cy.get(".profile__left__shipping").contains(
        "Email must be a valid email address"
      );

      cy.get(LCT_MyAccount.saveButton).should("be.disabled");

      cy.log("SVTS: Failed to change user details with invalid information");
    });
  });
});
