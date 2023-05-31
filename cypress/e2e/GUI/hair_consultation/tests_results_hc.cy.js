import { Routes } from "../../../routes/routes";
import { PO_HairConsultation } from "../../../pageObjects/hair_consultation";
import { AS_HairConsultation } from "./asserts_hair_consultation";
import { hairConsultationDto as hairConsultation } from "../../../dto/hair_consultation_dto";

describe("ST05: Tests that contemplate the main results Hair Consultation via GUI (Graphical User Interface) / Analyze the results and custom created formulas based on the user's response", async () => {
  const Fix_HairConsultation =
    await require("../../../fixtures/hair_consultation/questions_hair_consultation.json");
  const PageObjects_HairConsultation = new PO_HairConsultation();
  const Asserts_HairConsultation = new AS_HairConsultation();
  let hairConsultationDto = new hairConsultation();

  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit(Routes.hairConsultation);
    PageObjects_HairConsultation.initHairConsultation();
  });

  context("Context 1: Coverage of All 4 (Four) possible Product Bases", () => {
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

    it("CT02: Coverage of the Product Base: Total Repair", () => {
      let hairConsultationAnswers = [
        Fix_HairConsultation.firstQuestion.KINKY,
        Fix_HairConsultation.secondQuestion.MEDIUM,
        Fix_HairConsultation.thirdQuestion.MEDIUM,
        Fix_HairConsultation.fourthQuestion.NORMAL,
        [
          Fix_HairConsultation.fifthQuestion.hairLoss.MEDIUM,
          Fix_HairConsultation.fifthQuestion.breakage.LOW,
          Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          Fix_HairConsultation.fifthQuestion.splitEnds.VERY_HIGH,
        ],
        [Fix_HairConsultation.sixthQuestion.LENGTHEN],
        Fix_HairConsultation.seventhQuestion.FOURTH,
        Fix_HairConsultation.eightQuestion.FIFTH,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.DEFINITION_VOLUME,
        Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
        Fix_HairConsultation.thirteenthQuestion.P_V,
      ];

      hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
      PageObjects_HairConsultation.fillHairConsultation(
        hairConsultationDto.answers
      );
      PageObjects_HairConsultation.submitHairConsultation();
    });

    it("CT03: Coverage of the Product Base: Hydro Power", () => {
      let hairConsultationAnswers = [
        Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
        Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
        Fix_HairConsultation.thirdQuestion.HIGH,
        Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
        [
          Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
          Fix_HairConsultation.fifthQuestion.breakage.VERY_LOW,
          Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
        ],
        [Fix_HairConsultation.sixthQuestion.ANTI_BREAKAGE],
        Fix_HairConsultation.seventhQuestion.FIRST,
        Fix_HairConsultation.eightQuestion.THIRD,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
        Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
        Fix_HairConsultation.thirteenthQuestion.M_K,
      ];

      hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
      PageObjects_HairConsultation.fillHairConsultation(
        hairConsultationDto.answers
      );
      PageObjects_HairConsultation.submitHairConsultation();
    });

    it("CT04: Coverage of the Product Base: Coil Power", () => {
      let hairConsultationAnswers = [
        Fix_HairConsultation.firstQuestion.COILY,
        Fix_HairConsultation.secondQuestion.LONG,
        Fix_HairConsultation.thirdQuestion.MEDIUM,
        Fix_HairConsultation.fourthQuestion.OILY,
        [
          Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
          Fix_HairConsultation.fifthQuestion.breakage.VERY_LOW,
          Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
          Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
        ],
        [Fix_HairConsultation.sixthQuestion.ANTI_SHRINKAGE],
        Fix_HairConsultation.seventhQuestion.SEVENTH,
        Fix_HairConsultation.eightQuestion.THIRD,
        Fix_HairConsultation.ninthQuestion.NATURAL,
        Fix_HairConsultation.tenthQuestion.VOLUME,
        Fix_HairConsultation.eleventhQuestion.CL_LILAC_DREAM,
        Fix_HairConsultation.thirteenthQuestion.S_C,
      ];

      hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
      PageObjects_HairConsultation.fillHairConsultation(
        hairConsultationDto.answers
      );
      PageObjects_HairConsultation.submitHairConsultation();
    });
  });

  context(
    "Context 2: Coverage of All 10 (Tenth) possible Product Styling Recommendations",
    () => {
      it("CT05: Coverage of the Product Styling Recommendation: 1. Power Gel | 2. Scalp Spray | 3. Refreshing Spray", () => {
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
          [Fix_HairConsultation.sixthQuestion.UNTANGLING],
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

      it("CT06: Coverage of the Product Styling Recommendation: 1. Power Gel | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.LOW,
            Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            Fix_HairConsultation.fifthQuestion.shine.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.ANTI_BREAKAGE],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.CURL_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT07: Coverage of the Product Styling Recommendation: 1. Styling Cream | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.NORMAL,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.ANTI_SHRINKAGE],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.DEFINITION_VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT08: Coverage of the Product Styling Recommendation: 1. Butter | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.CURLY,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.ANTI_SHRINKAGE],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.DEFINITION_VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_LILAC_DREAM,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT09: Coverage of the Product Styling Recommendation: 1. Gelatine | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.SOOTHE_SCALP],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
          Fix_HairConsultation.thirteenthQuestion.S_C,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT010: Coverage of the Product Styling Recommendation: 1. Styling Cream | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.COILY_KINKY_MIX,
          Fix_HairConsultation.secondQuestion.MEDIUM_LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY_ROOTS,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.LOW,
            Fix_HairConsultation.fifthQuestion.breakage.HIGH,
            Fix_HairConsultation.fifthQuestion.shine.MEDIUM,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.VOLUMIZE],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME_DEFINITION,
          Fix_HairConsultation.eleventhQuestion.CL_PEACH_PASSION,
          Fix_HairConsultation.thirteenthQuestion.M_K,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT11: Coverage of the Product Styling Recommendation: 1. Hair Mousse | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.WAVY,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.LOW,
          Fix_HairConsultation.fourthQuestion.NORMAL,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.HIGH,
            Fix_HairConsultation.fifthQuestion.breakage.MEDIUM,
            Fix_HairConsultation.fifthQuestion.shine.LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.HUMIDITY_BLOCKAGE],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.A_L,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT12: Coverage of the Product Styling Recommendation: 1. Gelatine | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.WAVY_CURL_MIX,
          Fix_HairConsultation.secondQuestion.SHORT,
          Fix_HairConsultation.thirdQuestion.MEDIUM,
          Fix_HairConsultation.fourthQuestion.DRY,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.breakage.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.DEEP_CONDITION],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_ROSE_GOLD,
          Fix_HairConsultation.thirteenthQuestion.P_V,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });

      it("CT013: Coverage of the Product Styling Recommendation: 1. Oil | 2. Refreshing Spray", () => {
        let hairConsultationAnswers = [
          Fix_HairConsultation.firstQuestion.COILY_KINKY_MIX,
          Fix_HairConsultation.secondQuestion.LONG,
          Fix_HairConsultation.thirdQuestion.HIGH,
          Fix_HairConsultation.fourthQuestion.OILY,
          [
            Fix_HairConsultation.fifthQuestion.hairLoss.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.breakage.VERY_HIGH,
            Fix_HairConsultation.fifthQuestion.shine.VERY_LOW,
            Fix_HairConsultation.fifthQuestion.splitEnds.VERY_LOW,
          ],
          [Fix_HairConsultation.sixthQuestion.DEEP_CONDITION],
          Fix_HairConsultation.seventhQuestion.FIRST,
          Fix_HairConsultation.eightQuestion.THIRD,
          Fix_HairConsultation.ninthQuestion.NATURAL,
          Fix_HairConsultation.tenthQuestion.VOLUME,
          Fix_HairConsultation.eleventhQuestion.CL_BLUE,
          Fix_HairConsultation.thirteenthQuestion.S_C,
        ];

        hairConsultationDto.setAnswersHairConsultation(hairConsultationAnswers);
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );

  context(
    "Context 3: Perform Hair Consultion with Random values and options",
    () => {
      it("CT14: Coverage of the Random Results", () => {
        hairConsultationDto.setRandomAnswersHairConsultation();
        PageObjects_HairConsultation.fillHairConsultation(
          hairConsultationDto.answers
        );
        PageObjects_HairConsultation.submitHairConsultation();
      });
    }
  );
});
