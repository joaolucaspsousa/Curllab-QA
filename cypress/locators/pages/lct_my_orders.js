let LCT_MyOrders = {
  // My Orders Page
  ordersTitle: ".profile__right > h3",

  // List of Orders
  ordersList: ".scroller",

  ordersListItem: (id) =>
    `.scroller > :nth-child(${id}) > :nth-child(1) > a`,

  // Logout Button
  logoutButton: ".button-area > .default-button",
};

export default { LCT_MyOrders };
