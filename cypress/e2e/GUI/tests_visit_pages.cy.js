import { Routes } from "../../routes/routes";

describe("ST01: Visit All Pages / Analyze the functioning of the routes", () => {
  before(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("CT01: Visit Home Page", () => {
    cy.visit(Routes.home);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.home}`);
    cy.log("Home Page visited successfully");
  });

  it("CT02: Visit Shop Page", () => {
    cy.visit(Routes.shop);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.shop}`);
    cy.log("Shop Page visited successfully");
  });

  it("CT03: Visit Reviews Page", () => {
    cy.visit(Routes.reviews);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.reviews}`);
    cy.log("Reviews Page visited successfully");
  });

  it("CT04: Visit Into The Lab Page", () => {
    cy.visit(Routes.intoTheLab);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.intoTheLab}`);
    cy.log("Into The Lab Page visited successfully");
  });

  it("CT05: Visit Curl Knowledge Page", () => {
    cy.visit(Routes.curlKnowledge);
    cy.url().should(
      "equal",
      `${Cypress.config().baseUrl}${Routes.curlKnowledge}`
    );
    cy.log("Curl Knowledge Page visited successfully");
  });

  it("CT06: Visit Hair Consultation Page", () => {
    cy.visit(Routes.hairConsultation);
    cy.url().should(
      "equal",
      `${Cypress.config().baseUrl}${Routes.hairConsultation}`
    );
    cy.log("Hair Consultation Page visited successfully");
  });

  it("CT07: Visit Quiz Result Page", () => {
    cy.visit(Routes.quizResult);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.quizResult}`);
    cy.log("Quiz Result Page visited successfully");
  });

  it("CT08: Visit My Account Page", () => {
    cy.login();
    cy.visit(Routes.myAccount);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.myAccount}`);
    cy.log("My Account Page visited successfully");
  });

  it("CT09: Visit My Favorites Page", () => {
    cy.login();
    cy.visit(Routes.myFavorites);
    cy.url().should(
      "equal",
      `${Cypress.config().baseUrl}${Routes.myFavorites}`
    );
    cy.log("My Favorites Page visited successfully");
  });

  it("CT10: Visit My Orders Page", () => {
    cy.login();
    cy.visit(Routes.myOrders);
    cy.url().should("equal", `${Cypress.config().baseUrl}${Routes.myOrders}`);
    cy.log("My Orders Page visited successfully");
  });

  it("CT11: Visit a Page that does not exist", () => {
    cy.visit(`/test`);
    cy.url().should("equal", `${Cypress.config().baseUrl}/`);
    cy.log("Redirected to the home page successfully");
  });
});
