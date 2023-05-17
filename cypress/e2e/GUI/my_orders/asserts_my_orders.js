import { Locators_MyOrders } from "../../../locators/pages/lct_my_orders";

const myOrdersMessages = {};

class AS_MyOrders {
  CT01() {
    cy.expected(Locators_MyOrders.ordersTitle, "contain", "Orders");
    cy.log("SVTS: My Orders Page visited successfully");
  }

  CT02() {
    cy.url().should("include", "https://store.curllab.com/");
    cy.log("SVTS: Order viewed successfully");
  }
}

export default { AS_MyOrders };
