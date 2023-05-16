import { Routes } from "../../routes/routes";
import { MyOrders } from "../../pageObjects/my_orders";
import { LCT_MyOrders } from "../../locators/pages/lct_my_orders";

describe("ST02: Tests of the My Favorites section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const MyOrdersPage = new MyOrders();

  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myOrders);
  });

  it("CT01: Check that are in the correct section of My Account", () => {
    cy.get(LCT_MyOrders.ordersTitle).contains("Orders");

    cy.log("SVTS: My Orders Page visited successfully");
  });

  it("CT02: View a order to user", () => {
    MyOrdersPage.viewOrder(1);

    cy.url().should("include", "https://store.curllab.com/");

    cy.log("SVTS: Order viewed successfully");
  });
});
