import { Locators_MyOrders } from "../locators/pages/lct_my_orders";

class PO_MyOrders {
  constructor() {
    this.ordersList = Locators_MyOrders.ordersList;
  }

  // Whenever we need to get an attribute of an element in cypress (be it the size, description or related items), we need to return a promise

  getLengthOfOrdersList() {
    return new Promise((resolve, reject) => {
      cy.get(this.ordersList).then(($orders) => {
        const length = $orders.children().length;
        if (length == 0) {
          cy.log("[MyOrders] The list of orders is empty");
          reject(new Error("[MyOrders] The list of orders is empty"));
        } else {
          cy.log(`[MyOrders] The list of orders has ${length} products`);
          resolve(length);
        }
      });
    });
  }

  getNameOrder(order) {
    return new Promise((resolve, reject) => {
      const length = this.getLengthOfOrdersList();

      length
        .then((length) => {
          if (length) {
            cy.get(Locators_MyOrders.ordersListItem(order)).then(($order) => {
              cy.log(`[MyOrders] Order Name: ${order.text()}`);
              resolve($order.text());
            });
          } else {
            reject(new Error("[MyOrders] The list of orders is empty"));
          }
        })
        .catch((error) => {
          cy.log(error.message);
        });
    });
  }

  viewOrder(order) {
    const length = this.getLengthOfOrdersList();

    length
      .then((length) => {
        if (length) {
          cy.log(`[MyOrders] View Order: ${order}`);
          cy.get(Locators_MyOrders.ordersListItem(order))
            .invoke("removeAttr", "target")
            .click();
        }
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }
}

export default { PO_MyOrders };
