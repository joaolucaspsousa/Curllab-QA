class hairConsultationDto {
  constructor() {
    this.questions = require("../fixtures/hair_consultation/questions_hair_consultation.json");
    this.answers = [];
  }

  setAnswersHairConsultation(answers) {
    this.answers = answers;
  }

  setRandomAnswersHairConsultation() {
    Object.keys(this.questions).forEach((question) => {
      if (question.includes("fifthQuestion")) {
        let randomFifthQuestion = [];

        Object.values(this.questions[question]).forEach((slider) => {
          randomFifthQuestion.push(this._getRandomElement(slider));
        });

        this.answers.push(randomFifthQuestion);
        return;
      }
      const randomElement = this._getRandomElement(this.questions[question]);
      this.answers.push(randomElement);
    });

    console.log(this.answers)
    cy.log(this.answers)
  }

  _getRandomElement(object) {
    const size = Object.values(object).length;
    return Math.floor(Math.random() * size);
  }
}

export default { hairConsultationDto };
