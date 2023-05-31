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
      _firstQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      _secondQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      _thirdQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      _fourthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.fourthQuestion,
      },
      _fifthQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.fifthQuestion,
      },
      _sixthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.sixthQuestion,
      },
      _seventhQuestion: {
        type: "option",
        locator: Locators_HairConsultation.seventhQuestion,
      },
      _eighthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.eighthQuestion,
      },
      _ninthQuestion: {
        type: "option",
        locator: Locators_HairConsultation.ninthQuestion,
      },
      _tenthQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.tenthQuestion.slider,
      },
      _eleventhQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      _twelfthQuestion: {
        type: "nameProduct",
        locator: Locators_HairConsultation.nameInput,
      },
      _thirteenthQuestion: {
        type: "slider",
        locator: Locators_HairConsultation.anyQuestion.slider,
      },
      _submitButton: {
        type: "submit",
        locator: Locators_HairConsultation.submitButton,
      },
    };
  }

  initHairConsultation() {
    cy.get(this.getStartedButton).click();
  }

  fillHairConsultation(options) {
    Object.values(this._questions).forEach((question, index) => {
      if (question.type == "slider") {
        if (question.locator == Locators_HairConsultation.fifthQuestion) {
          Object.values(options[index]).forEach((element, index) => {
            this._chooseAnswerOfSlider(
              false,
              Object.values(Locators_HairConsultation.fifthQuestion)[index]
                .slider,
              element,
              null
            );
          });
          cy.get(this.nextButton).click();
        } else {
          this._chooseAnswerOfSlider(false, question.locator, options[index]);
        }
      } else if (question.type == "option") {
        this._chooseAnswerOfOption(false, question.locator, options[index]);
      } else if (question.type == "nameProduct") {
        cy.get(question.locator).type(this.userDto.firstName);
        cy.get(this.nextButton).click();
      }
    });
  }

  fillRandomHairConsultation() {
    Object.values(this._questions).forEach((question) => {
      if (question.type == "slider") {
        if (question.locator == Locators_HairConsultation.fifthQuestion) {
          Object.values(Locators_HairConsultation.fifthQuestion).forEach(
            (element) => {
              this._chooseAnswerOfSlider(true, element.slider, undefined, null);
            }
          );
          cy.get(this.nextButton).click();
        } else {
          this._chooseAnswerOfSlider(true, question.locator);
        }
      } else if (question.type == "option") {
        this._chooseAnswerOfOption(true, question.locator);
      } else if (question.type == "nameProduct") {
        cy.get(question.locator).type(this.userDto.firstName);
        cy.get(this.nextButton).click();
      }
    });
  }

  submitHairConsultation() {
    cy.get(this.submitButton).click();

    if (!localStorage.getItem("user")) {
      this._fillSeeResultsModal();
    }
  }

  _chooseAnswerOfSlider(
    random = false,
    slider = Locators_HairConsultation.anyQuestion.slider,
    value = 0,
    navigate = this.nextButton
  ) {
    // Gets an element, And the Promise Return is Needed to get the total size of the slider in the current question
    cy.get(slider).then(($element) => {
      const objectSize = $element.attr("max");

      value = random ? Math.floor(Math.random() * objectSize) : value;
      cy.get(slider).invoke("val", value).trigger("change");
    });

    cy.get(Locators_HairConsultation.currentQuestion.title).then(($element) => {
      cy.log(`[Hair Consultation] ${$element.text()} | Value: ${value + 1}`);
    });

    if (!navigate) return;

    cy.get(navigate).click();
  }

  _chooseAnswerOfOption(
    random = false,
    object,
    option = 0,
    navigate = this.nextButton
  ) {
    option = random ? this._getRandomElement(object) : option;

    cy.get(Object.values(object)[option]).click();

    cy.get(Locators_HairConsultation.currentQuestion.title).then(($element) => {
      cy.log(`[Hair Consultation] ${$element.text()} | Option: ${option + 1}`);
    });

    cy.get(navigate).click();
  }

  _getRandomElement(object) {
    const size = Object.values(object).length;
    const random = Math.floor(Math.random() * size);

    return random;
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
