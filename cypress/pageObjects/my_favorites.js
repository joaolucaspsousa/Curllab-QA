import { LCT_MyFavorites } from "../locators/pages/lct_my_favorites";

let MyFavorites = {
  GUI: {
    getNameProductFavorites: async (product) => {
      return new Promise((resolve, reject) => {
        cy.get(LCT_MyFavorites.favoritesListItem(product)).then(($product) => {
          resolve($product.text());
        });
      });
    },

    viewProduct: (product) => {
      cy.get(LCT_MyFavorites.favoritesListItem(product)).click();
    },

    removeProduct: (product) => {
      cy.get(LCT_MyFavorites.removeListItem(product)).click();
    },
  },
};

export default { MyFavorites };
