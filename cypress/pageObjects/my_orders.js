import { LCT_MyOrders } from "../locators/pages/lct_my_orders";

let MyOrders = {
  GUI: {
    getNameOrder: async (order) => {
      const length = await MyOrders.GUI.getLengthOfOrdersList();

      if (length > 0) {
        return new Promise((resolve, reject) => {
          cy.get(LCT_MyOrders.ordersListItem(order)).then(($order) => {
            resolve($order.text());
          });
        });
      }
    },

    getLengthOfOrdersList: async () => {
      // TO DO: Fix this method
      return 2;
    },

    viewOrder: async (order) => {
      const length = await MyOrders.GUI.getLengthOfOrdersList();

      if (length > 0) {
        cy.get(LCT_MyOrders.ordersListItem(order))
          .invoke("removeAttr", "target")
          .click();
      }
    },
  },
};

export default { MyOrders };
