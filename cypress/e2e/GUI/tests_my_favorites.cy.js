import { Routes } from "../../routes/routes";
import { MyFavorites } from "../../pageObjects/my_favorites";
import { LCT_MyFavorites } from "../../locators/pages/lct_my_favorites";

describe("ST02: Tests of the My Favorites section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const MyFavoritesPage = new MyFavorites();

  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myFavorites);
  });

  it("CT01: Check that are in the correct section of My Account", () => {
    cy.get(LCT_MyFavorites.favoritesTitle).contains("Loves");

    cy.log("SVTS: My Favorites Page visited successfully");
  });

  it("CT02: View a product to favorites", () => {
    MyFavoritesPage.getNameProductFavorites(1).then((nameProduct) => {
      cy.get(LCT_MyFavorites.favoritesListItem(1)).click();
      cy.get(
        ".section-1__product__details > .section-1__product__details__name",
        { timeout: 10000 }
      ).contains(nameProduct);

      cy.log("SVTS: User redirectly successfully for product paged");
    });
  });

  it("CT03: Remove a product from favorites", () => {
    MyFavoritesPage.getNameProductFavorites(1).then((nameProduct) => {
      MyFavoritesPage.removeProduct(1);
      cy.get(MyFavoritesPage.favoritesList).should(
        "not.have.descendants",
        nameProduct
      );
    });

    cy.log("SVTS: Product removed successfully from favorites");
  });
});
