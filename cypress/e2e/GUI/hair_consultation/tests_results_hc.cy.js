import { Routes } from "../../../routes/routes";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
import { AS_HairConsultation } from "./asserts_hair_consultation";

describe("ST05: Tests that contemplate the main results Hair Consultation via GUI (Graphical User Interface) / Analyze the results and custom created formulas based on the user's response", async () => {
  const PageObjects_HairConsultation = new PO_HairConsultation();
  const Asserts_HairConsultation = new AS_HairConsultation();
  const Fix_HairConsultation =
    await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");

  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit(Routes.hairConsultation);
    PageObjects_HairConsultation.initHairConsultation();
  });

  context("Context 1: Coverage of All 4 (Four) possible Product Bases", () => {
    it("CT01: Coverage of the Product Base: Total Protect", () => {
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

    it("CT02: Coverage of the Product Base: Total Repair", () => {
      let hairConsultationDto = [
        Fix_HairConsultation.firstQuestion.KINKY,
        Fix_HairConsultation.secondQuestion.MEDIUM,
        Fix_HairConsultation.thirdQuestion.MEDIUM,
        Fix_HairConsultation.fourthQuestion.NORMAL,
        {
          hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.MEDIUM,
          breakage: Fix_HairConsultation.fifthQuestion.breakage.LOW,
          shine: Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_HIGH,
        },
        Fix_HairConsultation.sixthQuestion.LENGTHEN,
        Fix_HairConsultation.seventhQuestion.FOURTH,
        Fix_HairConsultation.eightQuestion.FIFTH,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.DEFINITION_VOLUME,
        Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
        Fix_HairConsultation.thirteenthQuestion.P_V,
      ];

      PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
      PageObjects_HairConsultation.submitHairConsultation();
    });

    it("CT03: Coverage of the Product Base: Hydro Power", () => {
      let hairConsultationDto = [
        Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
        Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
        Fix_HairConsultation.thirdQuestion.HIGH,
        Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
        {
          hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
          breakage: Fix_HairConsultation.fifthQuestion.breakage.VERY_LOW,
          shine: Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
        },
        Fix_HairConsultation.sixthQuestion.ANTI_BREAKAGE,
        Fix_HairConsultation.seventhQuestion.FIRST,
        Fix_HairConsultation.eightQuestion.THIRD,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
        Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
        Fix_HairConsultation.thirteenthQuestion.M_K,
      ];

      PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
      PageObjects_HairConsultation.submitHairConsultation();
    });

    it("CT04: Coverage of the Product Base: Coil Power", () => {
      let hairConsultationDto = [
        Fix_HairConsultation.firstQuestion.COILY,
        Fix_HairConsultation.secondQuestion.LONG,
        Fix_HairConsultation.thirdQuestion.MEDIUM,
        Fix_HairConsultation.fourthQuestion.OILY,
        {
          hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
          breakage: Fix_HairConsultation.fifthQuestion.breakage.VERY_LOW,
          shine: Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
        },
        Fix_HairConsultation.sixthQuestion.ANTI_SHRINKAGE,
        Fix_HairConsultation.seventhQuestion.SEVENTH,
        Fix_HairConsultation.eightQuestion.THIRD,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.VOLUME,
        Fix_HairConsultation.eleventhQuestion.CL_LILAC_DREAM,
        Fix_HairConsultation.thirteenthQuestion.S_C,
      ];

      PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
      PageObjects_HairConsultation.submitHairConsultation();
    });
  });

  context(
    "Context 2: Coverage of All 10 (Tenth) possible Product Styling Recommendations",
    () => {
      it("CT05: Coverage of the Product Styling Recommendation: 1. Power Gel | 2. Scalp Spray | 3. Refreshing Spray", () => {
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

      it("CT06: Coverage of the Product Styling Recommendation: 1. Power Gel | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            shine: Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.ANTI_BREAKAGE,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT07: Coverage of the Product Styling Recommendation: 1. Styling Cream | 2. Refreshing Spray", () => {
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

      it("CT08: Coverage of the Product Styling Recommendation: 1. Butter | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.CURLY,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
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
          Fix_HairConsultation.eleventhQuestion.CL_LILAC_DREAM,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT09: Coverage of the Product Styling Recommendation: 1. Gelatine | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_HIGH,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            shine: Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.SOOTHE_SCALP,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
          Fix_HairConsultation.thirteenthQuestion.S_C,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT010: Coverage of the Product Styling Recommendation: 1. Styling Cream | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.COILY_KINKY_MIX,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.HIGH,
            shine: Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.VOLUMIZE,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT11: Coverage of the Product Styling Recommendation: 1. Hair Mousse | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.NORMAL,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.HIGH,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            shine: Fix_HairConsultation.fifthQuestion.shine.LOW,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.HUMIDITY_BLOCKAGE,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT12: Coverage of the Product Styling Recommendation: 1. Gelatine | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.MEDIUM,
          Fix_HairConsultation.fourthQuestion.DRY,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.VERY_HIGH,
            shine: Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.DEEP_CONDITION,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
          Fix_HairConsultation.thirteenthQuestion.P_V,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT013: Coverage of the Product Styling Recommendation: 1. Oil | 2. Refreshing Spray", () => {
        let hairConsultationDto = [
          Fix_HairConsultation.firstQuestion.COILY_KINKY_MIX,
          Fix_HairConsultation.secondQuestion.LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY,
          {
            hairLoss: Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            breakage: Fix_HairConsultation.fifthQuestion.breakage.VERY_HIGH,
            shine: Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            splitEnds: Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          },
          Fix_HairConsultation.sixthQuestion.DEEP_CONDITION,
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.S_C,
        ];

        PageObjects_HairConsultation.fillHairConsultation(hairConsultationDto);
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );

  context.skip(
    "Context 3: Perform Hair Consultion with Random values and options",
    () => {
      it("CT14: Coverage of the Random Results", () => {
        cy.repeat(10, () => {
          PageObjects_HairConsultation.fillRandomHairConsultation();
          PageObjects_HairConsultation.submitHairConsultation();
        });
      });
    }
  );
});
