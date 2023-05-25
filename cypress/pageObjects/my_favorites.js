import { Locators_MyFavorites } from "../locators/pages/lct_my_favorites";

class PO_MyFavorites {
  constructor() {
    this.favoritesList = Locators_MyFavorites.favoritesList;
  }

  async getNameProductFavorites(product) {
    return new Promise((resolve, reject) => {
      cy.get(Locators_MyFavorites.favoritesListItem(product)).then(($product) => {
        resolve($product.text());
      })
      reject("404: Product not found");
    });
  }

  getLengthOfFavoritesList() {
    // TO DO: Fix this method
    return 2;
  }

  viewProduct(product) {
    const length = this.getLengthOfFavoritesList();

    if (length > 0) {
      cy.get(Locators_MyFavorites.favoritesListItem(product)).click();
    }
  }

  removeProduct(product) {
    const length = this.getLengthOfFavoritesList();

    if (length > 0) {
      cy.get(Locators_MyFavorites.removeListItem(product)).click();
    }
  }
}

export default { PO_MyFavorites };
