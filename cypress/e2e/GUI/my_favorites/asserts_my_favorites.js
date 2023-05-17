import { Locators_MyFavorites } from "../../../locators/pages/lct_my_favorites";

const myFavoritesMessages = {};

class AS_MyFavorites {
  CT01() {
    cy.expected(Locators_MyFavorites.favoritesTitle, "contain", "Loves");
    cy.log("SVTS: My Favorites Page visited successfully");
  }

  CT02(nameProduct) {
    cy.expected(
      ".section-1__product__details > .section-1__product__details__name",
      "contain",
      nameProduct
    );
    cy.log("SVTS: User redirectly successfully for product paged");
  }

  CT03(nameProduct) {
    cy.get(Locators_MyFavorites.favoritesList).should(
      "not.have.descendants",
      nameProduct
    );
    cy.log("SVTS: Product removed successfully from favorites");
  }
}

export default { AS_MyFavorites };
