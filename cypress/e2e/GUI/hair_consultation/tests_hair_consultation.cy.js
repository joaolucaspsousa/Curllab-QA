import { Routes } from "../../../routes/routes";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
import { AS_HairConsultation } from "./asserts_hair_consultation";
import { hairConsultationDto as HairConsultationDto } from "../../../dto/hair_consultation_dto";

describe("ST05: Tests that contemplate the main Hair Consultation flows via GUI (Graphical User Interface) / Analyze the results and custom created formulas based on the user's response", async () => {
  const PageObjects_HairConsultation = new PO_HairConsultation();
  const Fix_HairConsultation =
    await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");

  beforeEach(() => {
    cy.visit(Routes.hairConsultation);
    PageObjects_HairConsultation.initHairConsultation();
  });

  context(
    "Context 1.1: Coverage of All 4 (Four) possible Product Bases",
    () => {
      before(() => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
      });

      it.only("CT01: Coverage of the Product Base: Total Repair", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.DRY,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.LOW,
            shine: Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.UNTANGLING,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.FIRST,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        //PageObjects_HairConsultation.submitHairConsultation();
        //AS_HairConsultation.assertHairConsultation(hairConsultationDto);
      });

      it("CT02: Coverage of the Product Base: Total Protect", () => {});

      it("CT03: Coverage of the Product Base: Hydro Power", () => {});

      it("CT04: Coverage of the Product Base: Coil Power", () => {});
    }
  );
});
