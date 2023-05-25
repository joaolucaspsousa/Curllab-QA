import { PO_QuizResults } from "../../pageObjects/quiz_results";
import { Routes } from "../../routes/routes";
import { Locators_HairConsultation } from "../../locators/pages/lct_hair_consultation";
import { PO_HairConsultation } from "../../pageObjects/hair_consultation";

function getElement(object){
  const size = Object.keys(object).length;
  const random = Math.floor(Math.random() * size);
  const randomKey = Object.keys(object)[random];
  const randomValue = object[randomKey];
  cy.log(randomValue);
  return randomValue;

}



describe("ST04: Teste", () => {
  const PageObjects_QuizResults = new PO_QuizResults();
  const PageObjects_HairConsultation = new PO_HairConsultation();

  before(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("CT01: Teste ", () => {
    cy.visit(Routes.hairConsultation);
    cy.get(Locators_HairConsultation.getStarted).click();
    PageObjects_HairConsultation.fullFillRandomForm();
  });

  it.skip("CT02:", () => {
    const answers = {
      userId: 300,
      product_type_of_curl: 7,
      product_hair_length: 4,
      product_hair_density: 4,
      product_scalp_type: 1,
      hair_loss: 1,
      breakage: 4,
      shine: 5,
      split_ends: 1,
      product_goals: [4],
      hair_wash_recurrence: 7,
      deep_condition_recurrence: 7,
      product_wearing_style: 2,
      product_style_formats: 4,
      product_bottle_name: "Test",
      product_color: 1,
      product_scent: 1,
    };

    let results = PageObjects_QuizResults.getResults(answers);
    console.log(results);
  });
});
