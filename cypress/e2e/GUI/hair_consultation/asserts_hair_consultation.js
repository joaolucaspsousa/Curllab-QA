import { Routes } from "../../../routes/routes";

const hairConsulationMessages = {};

const Fix_CMSQuizResults = await require("../../../fixtures/quiz_results/cms_quiz_results.json");

const Fix_HairConsultation = await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");

class AS_HairConsultation {
  constructor() {
    this._CMSContent = Fix_CMSQuizResults;
    this.questionsHairConsultation = Fix_HairConsultation;
    this._quizUserAnswers = localStorage.getItem("quizUserAnswers");
  }

  assertQuizResultsContent(apiResults) {
    if(!apiResults) {
      cy.log("Asserts Quiz Results] 400: Not possible to assert the quiz results content, because apiResults is undefined.")
      return;
    }

    this._assertPresentationSection(apiResults);
    this._assertIngredientsSection(apiResults);
    this._assertRoutineSection(apiResults);
    this._assertProductsSection(apiResults);
    this._assertOptionalProductsSection(apiResults);
  }

  _assertPresentationSection(apiResults) {

  }

  _assertIngredientsSection(apiResults) {}

  _assertRoutineSection(apiResults) {}

  _assertProductsSection(apiResults) {}

  _assertOptionalProductsSection(apiResults) {}
}

export default { AS_HairConsultation };
