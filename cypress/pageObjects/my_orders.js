import { LCT_MyOrders } from "../locators/pages/lct_my_orders";

class MyOrders {
  constructor() {
    this.ordersList = LCT_MyOrders.ordersList;
  }

  getNameOrder(order) {
    const length = this.getLengthOfOrdersList();

    if (length > 0) {
      return new Promise((resolve, reject) => {
        cy.get(LCT_MyOrders.ordersListItem(order)).then(($order) => {
          resolve($order.text());
        });
      });
    }
  }

  getLengthOfOrdersList() {
    // TO DO: Fix this method
    return 2;
  }

  viewOrder(order) {
    const length = this.getLengthOfOrdersList();
    if (length > 0) {
      cy.get(LCT_MyOrders.ordersListItem(order))
        .invoke("removeAttr", "target")
        .click();
    }
  }
}

export default { MyOrders };
