import { Routes } from "../../../routes/routes";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
//import { AS_HairConsultation } from "./asserts_hair_consultation";
import { hairConsultationDto as hairConsultation } from "../../../dto/hair_consultation_dto";

describe("ST06: Tests that contemplate the flows of the Hair Consultation via GUI (Graphical User Interface) / Analyze the possible flows to visualize the results of the Capillary Consultation, validating the personalized results based on the user's response", async () => {
  const PageObjects_HairConsultation = new PO_HairConsultation();
  //const Asserts_HairConsultation = new AS_HairConsultation();
  let hairConsultationDto = new hairConsultation();

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

      it("CT01: Generic Filled Questions", () => {
        hairConsultationDto.setRandomAnswersHairConsultation();
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        //PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );

  context(
    "Context 2: Fill a Hair Consultation logged in / NOT Show a see Results Modal in Last Question and redirect user for the Quiz Results Page automatically",
    () => {
      before(() => {
        cy.login();
      });


      it("CT02: Generic Filled Questions", () => {
        hairConsultationDto.setRandomAnswersHairConsultation();
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        //PageObjects_HairConsultation.submitHairConsultation();
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

      it("CT03: Generic Filled Questions", () => {
        hairConsultationDto.setRandomAnswersHairConsultation();
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        //PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );
});
