import { Routes } from "../../../routes/routes";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
import { AS_HairConsultation } from "./asserts_hair_consultation";

describe("ST06: Tests that contemplate the flows of the Hair Consultation via GUI (Graphical User Interface) / Analyze the possible flows to visualize the results of the Capillary Consultation, validating the personalized results based on the user's response", async () => {
  const PageObjects_HairConsultation = new PO_HairConsultation();
  const Asserts_HairConsultation = new AS_HairConsultation();
  const Fix_HairConsultation =
    await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");

  beforeEach(() => {
    cy.visit(Routes.hairConsultation);
    PageObjects_HairConsultation.initHairConsultation();
  });

  context(
    "Context 1: Fill a Hair Consultation NOT logged in / Show a See Results Modal in Last Question and JUST redirect user for the Quiz Results Page after fill a required fields and submit form",
    () => {
      before(() => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearCookies();
      });

      beforeEach(() => {
        cy.visit(Routes.hairConsultation);
        PageObjects_HairConsultation.initHairConsultation();
      });

      it("CT01: Generic Filled Questions", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.DRY,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.LOW,
            shine: Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.HIGH,
          },
          Fix_HairConsultation.sixthQuestion.UNTANGLING,
          Fix_HairConsultation.seventhQuestion.SECOND,
          Fix_HairConsultation.eightQuestion.SEVENTH,
          Fix_HairConsultation.ninthQuestion.PROTECTIVE_STYLED,
          Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );

  context(
    "Context 2: Fill a Hair Consultation logged in / NOT Show a see Results Modal in Last Question and redirect user for the Quiz Results Page automatically",
    () => {
      before(() => {
        cy.login();
      });

      beforeEach(() => {
        cy.visit(Routes.hairConsultation);
        PageObjects_HairConsultation.initHairConsultation();
      });

      it("CT02: Generic Filled Questions", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.NORMAL,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_HIGH,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            shine: Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.ANTI_SHRINKAGE,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.DEFINITION_VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );

  context(
    "Context 3: Fill out a Capillary Consultation NOT logged in, but log in to Modal See Results / After filling in the mandatory fields of Modal Login, the user should be redirected to the Quiz Results Page automatically",
    () => {
      before(() => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearCookies();
      });

      beforeEach(() => {
        cy.visit(Routes.hairConsultation);
        PageObjects_HairConsultation.initHairConsultation();
      });

      it("CT03: Generic Filled Questions", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.DRY,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.LOW,
            shine: Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.HIGH,
          },
          Fix_HairConsultation.sixthQuestion.UNTANGLING,
          Fix_HairConsultation.seventhQuestion.SECOND,
          Fix_HairConsultation.eightQuestion.SEVENTH,
          Fix_HairConsultation.ninthQuestion.PROTECTIVE_STYLED,
          Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );
});
