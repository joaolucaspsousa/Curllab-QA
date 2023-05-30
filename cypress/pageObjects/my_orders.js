import { Locators_MyOrders } from "../locators/pages/lct_my_orders";

class PO_MyOrders {
  constructor() {
    this._ordersList = Locators_MyOrders.ordersList;
    this._ordersListItem = Locators_MyOrders.ordersListItem;
  }

  // Whenever we need to get an attribute of an element in cypress (be it the size, description or related items), we need to return a promise

  // This method verify if the element exists in the list of orders, if it exists, it returns the element, if it does not exist, it returns an error
  _checkElementExists(indexElement) {
    return new Promise((resolve, reject) => {
      const length = this.getLengthOfOrdersList();

      length
        .then((length) => {
          if (indexElement <= length) {
            cy.log("[MyOrders] The Element searched exists in the list");
            cy.get(this._ordersListItem(indexElement)).then(
              ($order) => {
                resolve($order);
              }
            );
          } else {
            reject(
              new Error(
                `[MyOrders] The Element searched is ${indexElement}, but the list has ${length} elements`
              )
            );
          }
        })
        .catch((error) => {
          reject(
            new Error(
              "[MyOrders] The Element searched is not found in the list, but the list of favorites is empty"
            )
          );
        });
    });
  }

  getLengthOfOrdersList() {
    return new Promise((resolve, reject) => {
      cy.get(this._ordersList).invoke('children').its('length').then((length) => {
        if (length == 0) {
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
      const exists = this._checkElementExists(order);

      exists
        .then((element) => {
          cy.log(`[MyOrders] Order Name: ${element.text()}`);
          resolve(element.text());
        })
        .catch((error) => {
          cy.log(error.message);
        });
    });
  }

  viewOrder(order) {
    const exists = this._checkElementExists(order);

    exists
      .then((element) => {
        cy.log(`[MyOrders] View Order: ${element.text()}`);
        cy.get(element).invoke("removeAttr", "target").click();
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }
}

export default { PO_MyOrders };
