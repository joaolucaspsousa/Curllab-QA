import { Routes } from "../../../routes/routes";
import { PO_MyFavorites } from "../../../pageObjects/my_favorites";
import { AS_MyFavorites } from "./asserts_my_favorites";

describe("ST03: Tests of the My Favorites section of the logged-in area / Analyze all scenarios and flows in this section", () => {
  const PageObjects_MyFavorites = new PO_MyFavorites();
  const Asserts_MyFavorites = new AS_MyFavorites();

  beforeEach(() => {
    cy.login();
    cy.visit(Routes.myFavorites);
  });

  it("CT01: Check that are in the correct section of My Account", () => {
    Asserts_MyFavorites.CT01();
  });

  it("CT02: View a product to favorites", () => {
    PageObjects_MyFavorites.getNameProductFavorites(1).then((nameProduct) => {
      PageObjects_MyFavorites.viewProduct(1);
      Asserts_MyFavorites.CT02(nameProduct);
    });
  });

  it("CT03: Remove a product from favorites", () => {
    PageObjects_MyFavorites.getNameProductFavorites(1).then((nameProduct) => {
      PageObjects_MyFavorites.removeProduct(1);
      Asserts_MyFavorites.CT03(nameProduct);
    });
  });
});
