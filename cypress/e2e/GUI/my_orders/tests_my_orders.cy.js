import { Routes } from "../../../routes/routes";
import { PO_MyOrders } from "../../../pageObjects/my_orders";
import { AS_MyOrders } from "./asserts_my_orders";

describe("ST02: Tests of the My Favorites section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const PageObjects_MyOrders = new PO_MyOrders();
  const Asserts_MyOrders = new AS_MyOrders();

  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myOrders);
  });

  it("CT01: Check that are in the correct section of My Account", () => {
    Asserts_MyOrders.CT01();
  });

  it("CT02: View a order to user", () => {
    PageObjects_MyOrders.viewOrder(1);
    Asserts_MyOrders.CT02();
  });
});
