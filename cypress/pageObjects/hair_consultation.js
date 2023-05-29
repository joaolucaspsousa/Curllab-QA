import { Locators_HairConsultation } from "../locators/pages/lct_hair_consultation";
import { DTO_User as DTO_User } from "../dto/user_dto";
import { Locators_SeeResults } from "../locators/components/lct_see_results";

class PO_HairConsultation {
  constructor() {
    const userDto = new DTO_User();
    this.firstName = userDto.getSimplifyUser().firstName;
    this.lastName = userDto.getSimplifyUser().lastName;
    this.email = userDto.getSimplifyUser().email;
  }

  fullFillRandomForm() {
    // 1° First Question: WHAT IS MY NATURAL HAIR TYPE?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.anyQuestion.slider
    );

    // 2° Second Question: HOW LONG IS MY HAIR?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.anyQuestion.slider
    );

    // 3° Third Question: HOW DENSE IS MY HAIR?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.anyQuestion.slider
    );

    // 4° Fourth Question: HOW OILY IS MY HAIR?
    this._chooseAnswerOfOption(true, Locators_HairConsultation.fourthQuestion);

    // 5° Fifth Question: HOW DAMAGED IS MY HAIR?
    Object.values(Locators_HairConsultation.fifthQuestion).forEach(
      (element) => {
        this._chooseAnswerOfSlider(true, element.slider, undefined, null);
      }
    );
    cy.get(Locators_HairConsultation.nextButton).click();

    // 6° Sixth Question: WHAT ARE MY TOP HAIR GOALS?
    this._chooseAnswerOfOption(true, Locators_HairConsultation.sixthQuestion);

    // 7° Seventh Question: HOW OFTEN DO I WASH MY HAIR?
    this._chooseAnswerOfOption(true, Locators_HairConsultation.seventhQuestion);

    // 8° Eighth Question: HOW OFTEN DO I DEEP CONDITION MY HAIR?
    this._chooseAnswerOfOption(true, Locators_HairConsultation.eighthQuestion);

    // 9° Ninth Question: AM I CURRENTLY WEARING ANY OF THE FOLLOWING STYLES?
    this._chooseAnswerOfOption(true, Locators_HairConsultation.ninthQuestion);

    // 10° Tenth Question: HOW IMPORTANT IS EACH OF THESE TO ME WHEN I STYLE MY HAIR?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.tenthQuestion.slider
    );

    // 11° Eleventh Question: WHAT COLOR WOULD I LIKE MY PRODUCT TO BE?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.anyQuestion.slider
    );

    // 12° Twelfth Question: WHO IS THIS PRODUCT FOR?
    cy.get(Locators_HairConsultation.nameInput).type(this.firstName);
    cy.get(Locators_HairConsultation.nextButton).click();

    // 13° Thirteenth Question: WHAT SCENT WOULD I LIKE MY PRODUCT TO HAVE?
    this._chooseAnswerOfSlider(
      true,
      Locators_HairConsultation.anyQuestion.slider
    );

    // Submit Hair Consultation
    cy.get(Locators_HairConsultation.submitButton).click();

    if (!localStorage.getItem("user")) {
        this._fillSeeResultsModal();
    }
  }

  _chooseAnswerOfSlider(
    random = false,
    slider = Locators_HairConsultation.anyQuestion.slider,
    value = 0,
    navigate = Locators_HairConsultation.nextButton
  ) {
    // Gets an element, And the Promise Return is Needed to get the total size of the slider in the current question
    cy.get(slider).then(($element) => {
      const objectSize = $element.attr("max");

      if (!random) {
        cy.get(slider).invoke("val", value).trigger("change");
      } else {
        value = Math.round(Math.random() * objectSize);
        cy.get(slider)
          .invoke("val", value)
          .trigger("change");
      }
    });

    cy.log(`[Hair Consultation] ${Locators_HairConsultation.currentQuestion.title} | Value: ${value}}`)

    if (!navigate) return;

    cy.get(navigate).click();
  }

  _chooseAnswerOfOption(
    random = false,
    object,
    option,
    navigate = Locators_HairConsultation.nextButton
  ) {
    if (!random) {
      cy.get(this._getSpecificElement(object, option)).click();
    } else {
      option = this._getRandomElement(object);
      cy.get(option).click();
    }

    cy.log(`[Hair Consultation] ${Locators_HairConsultation.currentQuestion.title} | Option: ${option}}`);
    
    cy.get(navigate).click();
  }

  _getRandomElement(object) {
    const size = Object.keys(object).length;
    const random = Math.floor(Math.random() * size);
    const randomKey = Object.keys(object)[random];
    return object[randomKey];
  }

  _getSpecificElement(object, key) {
    return object[key];
  }

  _fillSeeResultsModal() {
    cy.log("[Hair Consultation] Filling See Results Modal");
    cy.log(`[Hair Consultation] User: ${this.firstName} | ${this.lastName} | ${this.email}`);
    cy.get(Locators_SeeResults.firstName).type(this.firstName);
    cy.get(Locators_SeeResults.lastName).type(this.lastName);
    cy.get(Locators_SeeResults.email).type(this.email);
    cy.get(Locators_SeeResults.getResultsButton).click();
  }
}

export default { PO_HairConsultation };
