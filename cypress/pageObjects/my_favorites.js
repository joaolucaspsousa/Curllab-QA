import { Locators_MyFavorites } from "../locators/pages/lct_my_favorites";

class PO_MyFavorites {
  constructor() {
    this._favoritesList = Locators_MyFavorites.favoritesList;
    this._favoritesListItem = Locators_MyFavorites.favoritesListItem;
  }

  // Whenever we need to get an attribute of an element in cypress (be it the size, description or related items), we need to return a promise

  // This method verify if the element exists in the list of favorites, if it exists, it returns the element, if it does not exist, it returns an error
  _checkElementExists(indexElement) {
    return new Promise((resolve, reject) => {
      const length = this.getLengthOfFavoritesList();

      length
        .then((length) => {
          if (indexElement <= length) {
            cy.log("[MyFavorites] The Element searched exists in the list");
            cy.get(this._favoritesListItem(indexElement)).then(
              ($product) => {
                resolve($product);
              }
            );
          } else {
            reject(
              new Error(
                `[MyFavorites] The Element searched is ${indexElement}, but the list has ${length} elements`
              )
            );
          }
        })
        .catch((error) => {
          reject(
            new Error(
              "[MyFavorites] The Element searched is not found in the list, but the list of favorites is empty"
            )
          );
        });
    });
  }

  getLengthOfFavoritesList() {
    return new Promise((resolve, reject) => {
      cy.get(this._favoritesList).invoke('children').its('length').then((length) => {
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
      const exists = this._checkElementExists(product);

      exists
        .then((element) => {
          cy.log(`[MyFavorites] Product Name: ${element.text()}`);
          resolve(element.text());
        })
        .catch((error) => {
          cy.log(error.message);
        });
    });
  }

  viewProduct(product) {
    const exists = this._checkElementExists(product);

    exists
      .then((element) => {
        cy.log(`[MyFavorites] View Product: ${element.text()}`);
        cy.get(element).click();
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }

  removeProduct(product) {
    const exists = this._checkElementExists(product);

    exists
      .then((element) => {
        cy.log(`[MyFavorites] Remove Product: ${element.text()}`);
        cy.get(element).click();
      })
      .catch((error) => {
        cy.log(error.message);
      });
  }
}

export default { PO_MyFavorites };
