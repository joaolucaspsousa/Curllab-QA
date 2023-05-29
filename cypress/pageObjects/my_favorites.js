import { Locators_MyFavorites } from "../locators/pages/lct_my_favorites";

class PO_MyFavorites {
  constructor() {
    this.favoritesList = Locators_MyFavorites.favoritesList;
  }

  // Whenever we need to get an attribute of an element in cypress (be it the size, description or related items), we need to return a promise

  getLengthOfFavoritesList() {
    return new Promise((resolve, reject) => {
      cy.get(this.favoritesList).then(($favorites) => {
        const length = $favorites.children().length;
        if (length == 0) {
          cy.log("[MyFavorites] The list of favorites is empty");
          reject(new Error("[MyFavorites] The list of favorites is empty"));
        } else {
          cy.log(`[MyFavorites] The list of favorites has ${length} products`);
          resolve(length);
        }
      });
    });
  }

  getNameProductFavorites(product) {
    return new Promise((resolve, reject) => {
      const length = this.getLengthOfFavoritesList();

      length
        .then((length) => {
          if (length) {
            cy.get(Locators_MyFavorites.favoritesListItem(product)).then(
              ($product) => {
                cy.log(`[MyFavorites] Product Name: ${$product.text()}`);
                resolve($product.text());
              }
            );
          } else {
            reject(new Error("[MyFavorites] The list of favorites is empty"));
          }
        })
        .catch((error) => {
          cy.log(error.message);
        });
    });
  }

  viewProduct(product) {
    const length = this.getLengthOfFavoritesList();

    length
      .then((length) => {
        if (length) {
          cy.log(`[MyFavorites] View Product: ${product}`);
          cy.get(Locators_MyFavorites.favoritesListItem(product)).click();
        }
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }

  removeProduct(product) {
    const length = this.getLengthOfFavoritesList();

    length
      .then((length) => {
        if (length) {
          cy.log(`[MyFavorites] Remove Product: ${product}`);
          cy.get(Locators_MyFavorites.removeListItem(product)).click();
        }
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }
}

export default { PO_MyFavorites };
