import { Locators_HairConsultation } from "../locators/pages/lct_hair_consultation";
import { userDto as userDto } from "../dto/user_dto";
import { Locators_SeeResults } from "../locators/components/lct_see_results";

class PO_HairConsultation {
  // 1° First Question: WHAT IS MY NATURAL HAIR TYPE?
  // 2° Second Question: HOW LONG IS MY HAIR?
  // 3° Third Question: HOW DENSE IS MY HAIR?
  // 4° Fourth Question: HOW OILY IS MY HAIR?
  // 5° Fifth Question: HOW DAMAGED IS MY HAIR?
  // 6° Sixth Question: WHAT ARE MY TOP HAIR GOALS?
  // 7° Seventh Question: HOW OFTEN DO I WASH MY HAIR?
  // 8° Eighth Question: HOW OFTEN DO I DEEP CONDITION MY HAIR?
  // 9° Ninth Question: AM I CURRENTLY WEARING ANY OF THE FOLLOWING STYLES?
  // 10° Tenth Question: HOW IMPORTANT IS EACH OF THESE TO ME WHEN I STYLE MY HAIR?
  // 11° Eleventh Question: WHAT COLOR WOULD I LIKE MY PRODUCT TO BE?
  // 12° Twelfth Question: WHO IS THIS PRODUCT FOR?
  // 13° Thirteenth Question: WHAT SCENT WOULD I LIKE MY PRODUCT TO HAVE?
  // 14° SUBMIT

  constructor() {
    // Mass of Data
    this.userDto = new userDto();

    this.firstNameInput = Locators_SeeResults.firstNameInput;
    this.lastNameInput = Locators_SeeResults.lastNameInput;
    this.emailInput = Locators_SeeResults.emailInput;
    this.getResultsButton = Locators_SeeResults.getResultsButton;

    // Buttons navigation
    this.getStartedButton = Locators_HairConsultation.getStartedButton;
    this.previousButton = Locators_HairConsultation.previousButton;
    this.nextButton = Locators_HairConsultation.nextButton;
    this.submitButton = Locators_HairConsultation.submitButton;

    // Questions
    this._questions = {
      firstQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      secondQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      thirdQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      fourthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.fourthQuestion,
      },
      fifthQuestion1: {
        type: "slider",
        locator: Locators_HairConsultation.fifthQuestion.hairLoss.slider,
      },
      fifthQuestion2: {
        type: "slider",
        locator: Locators_HairConsultation.fifthQuestion.breakage.slider,
      },
      fifthQuestion3: {
        type: "slider",
        locator: Locators_HairConsultation.fifthQuestion.shine.slider,
      },
      fifthQuestion4: {
        type: "slider",
        locator: Locators_HairConsultation.fifthQuestion.splitEnds.slider,
      },
      sixthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.sixthQuestion,
      },
      seventhQuestion: {
        type: "option",
        locator: Locators_HairConsultation.seventhQuestion,
      },
      eighthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.eighthQuestion,
      },
      ninthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.ninthQuestion,
      },
      tenthQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.tenthQuestion.slider,
      },
      eleventhQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      twelfthQuestion: {
        type: "nameProduct",
        locator: Locators_HairConsultation.nameInput,
      },
      thirteenthQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      }
    };
  }

  initHairConsultation() {
    cy.get(this.getStartedButton).click();
  }

  fillHairConsultation(answers) {
    const answersArray = Object.values(answers);

    Object.values(this._questions).forEach((question, questionIndex) => {
      // If he is on question 5, he needs to fill in all the sliders before proceeding, so this.nextButton must be NULL
      const navigate = [
        this._questions.fifthQuestion1.locator,
        this._questions.fifthQuestion2.locator,
        this._questions.fifthQuestion3.locator,
      ].includes(question.locator)
        ? null
        : this.nextButton;

      switch (question.type) {
        case "slider":
          this._chooseAnswerOfSlider(
            question.locator,
            answersArray[questionIndex],
            navigate
          );
          break;

        case "option":
          if (question.locator == Locators_HairConsultation.sixthQuestion) {
            answersArray[questionIndex].forEach((element) => {
              this._chooseAnswerOfOption(question.locator, element, null);
            });
            cy.get(this.nextButton).click();
          } else {
            this._chooseAnswerOfOption(
              question.locator,
              answersArray[questionIndex]
            );
          }
          break;

        case "nameProduct":
          cy.get(question.locator).type(answersArray[questionIndex]);
          cy.get(this.nextButton).click();
          break;

        default:
          cy.fail("[Hair Consultation] Question type not found")
          break;
      }
    });
  }

  _chooseAnswerOfSlider(
    slider = Locators_HairConsultation.anyQuestion.slider,
    value = 0,
    navigate = this.nextButton
  ) {
    cy.get(slider).invoke("val", value).trigger("change");

    cy.get(Locators_HairConsultation.currentQuestion.title).then(($element) => {
      cy.log(`[Hair Consultation] ${$element.text()} | Value: ${value + 1}`);
    });

    if (!navigate) return;

    cy.get(navigate).click();
  }

  _chooseAnswerOfOption(object, option = 0, navigate = this.nextButton) {
    cy.get(Object.values(object)[option]).click();

    cy.get(Locators_HairConsultation.currentQuestion.title).then(($element) => {
      cy.log(`[Hair Consultation] ${$element.text()} | Option: ${option + 1}`);
    });

    if (!navigate) return;

    cy.get(navigate).click();
  }

  _getRandomElement(object) {
    const size = Object.values(object).length;
    const random = Math.floor(Math.random() * size);

    return random;
  }

  submitHairConsultation() {
    cy.get(this.submitButton).click();

    if (!localStorage.getItem("user")) {
      this._fillSeeResultsModal();
    }
  }

  _fillSeeResultsModal() {
    cy.log("[Hair Consultation] Filling See Results Modal");
    cy.log(
      `[Hair Consultation] User: ${this.userDto.firstName} | ${this.userDto.lastName} | ${this.userDto.email}`
    );
    cy.get(this.firstNameInput).type(this.userDto.firstName);
    cy.get(this.lastNameInput).type(this.userDto.lastName);
    cy.get(this.emailInput).type(this.userDto.email);
    cy.get(this.getResultsButton).click();
  }
}

export default { PO_HairConsultation };
