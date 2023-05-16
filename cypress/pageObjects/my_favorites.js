import { LCT_MyFavorites } from "../locators/pages/lct_my_favorites";

class MyFavorites {
  constructor() {
    this.favoritesList = LCT_MyFavorites.favoritesList;
  }

  async getNameProductFavorites(product) {
    return new Promise((resolve, reject) => {
      cy.get(LCT_MyFavorites.favoritesListItem(product)).then(($product) => {
        resolve($product.text());
      });
    });
  }

  getLengthOfFavoritesList() {
    // TO DO: Fix this method
    return 2;
  }

  viewProduct(product) {
    const length = this.getLengthOfFavoritesList();

    if (length > 0) {
      cy.get(LCT_MyFavorites.favoritesListItem(product)).click();
    }
  }

  removeProduct(product) {
    const length = this.getLengthOfFavoritesList();

    if (length > 0) {
      cy.get(LCT_MyFavorites.removeListItem(product)).click();
    }
  }
}

export default { MyFavorites };
