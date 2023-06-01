import { Routes } from "../../../routes/routes";
import { PO_QuizResults } from "../../../pageObjects/quiz_results";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
import { AS_QuizResults } from "./asserts_api_quiz_results";
import { hairConsultationDto as hairConsultation } from "../../../dto/hair_consultation_dto";

describe("ST07: Teste", async () => {
  const Fix_HairConsultation =
    await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");
  const PageObjects_HairConsultation = new PO_HairConsultation();
  const PageObjects_QuizResults = new PO_QuizResults();
  let hairConsultationDto = new hairConsultation();

  before(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  beforeEach(() => {
    cy.visit(Routes.hairConsultation);
    PageObjects_HairConsultation.initHairConsultation();
  });

  it("CT01: Coverage of the Product Base: Total Protect", () => {
    let hairConsultationAnswers = [
      Fix_HairConsultation.firstQuestion.WAVY,
      Fix_HairConsultation.secondQuestion.SHORT,
      Fix_HairConsultation.thirdQuestion.LOW,
      Fix_HairConsultation.fourthQuestion.DRY,
      [
        Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
        Fix_HairConsultation.fifthQuestion.breakage.LOW,
        Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
        Fix_HairConsultation.fifthQuestion.splitEnds.HIGH,
      ],
      [
        Fix_HairConsultation.sixthQuestion.UNTANGLING,
        Fix_HairConsultation.sixthQuestion.LENGTHEN,
      ],
      Fix_HairConsultation.seventhQuestion.SECOND,
      Fix_HairConsultation.eightQuestion.SEVENTH,
      Fix_HairConsultation.ninthQuestion.PROTECTIVE_STYLED,
      Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
      Fix_HairConsultation.eleventhQuestion.CL_BLUE,
      Fix_HairConsultation.thirteenthQuestion.A_L,
    ];

    hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
    PageObjects_HairConsultation.fillHairConsultation(
      hairConsultationDto.answers
    );
    PageObjects_HairConsultation.submitHairConsultation();
  });
});
