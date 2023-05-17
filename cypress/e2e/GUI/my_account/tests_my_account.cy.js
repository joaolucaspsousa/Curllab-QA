import { Routes } from "../../../routes/routes";
import { PO_MyAccount } from "../../../pageObjects/my_account";
import { AS_MyAccount } from "./asserts_my_account";
import { Locators_MyAccount } from "../../../locators/pages/lct_my_account";

describe("ST02: Tests of the My Information section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const PageObjects_MyAccount = new PO_MyAccount();
  const Asserts_MyAccount = new AS_MyAccount();

  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myAccount);
  });

  context("Context 1.1: Success Scenarios", () => {
    it("CT01: Check that are in the correct section of My Account", () => {
      Asserts_MyAccount.CT01();
    });

    it("CT02: Edit user details with successfully", () => {
      const userDto = {
        firstName: "Test",
        lastName: "User",
        email: Cypress.env("username"),
      };

      PageObjects_MyAccount.editUserDetails(userDto);
      cy.get(Locators_MyAccount.saveButton).click();
      Asserts_MyAccount.CT02();
    });
  });

  context("Context 2.1: Failure Scenarios", () => {
    it("CT03: Not filling in the Required Fields", () => {
      const userDto = {
        firstName: "",
        lastName: "",
        email: "",
      };

      PageObjects_MyAccount.editUserDetails(userDto);
      Asserts_MyAccount.CT03();
    });

    it("CT04: Partial filling of the Required Fields", () => {
      const userDto = {
        firstName: "G",
        lastName: "T",
        email: "T@G.C",
      };

      PageObjects_MyAccount.editUserDetails(userDto);
      Asserts_MyAccount.CT04();
    });
  });
});
