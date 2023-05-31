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
        let randomEachElement = [];

        Object.values(this.questions[question]).forEach((element) => {
          randomEachElement.push(this._getRandomElement(element));
        });

        this.answers.push(randomEachElement);
        return;
        
      } else if (question.includes("sixthQuestion")) {
        let randomEachElement = [];
        let size = Math.floor(Math.random() * 3) + 1;

        cy.log(`[Hair Consultation] Quantity of Boosters selected: ${size}`)

        while (randomEachElement.length < size) {
          let randomElement = this._getRandomElement(this.questions[question]);
          if (!randomEachElement.includes(randomElement)) {
            randomEachElement.push(randomElement);
          }
        }

        this.answers.push(randomEachElement);
        return;
      }
      const randomElement = this._getRandomElement(this.questions[question]);
      this.answers.push(randomElement);
    });
  }

  _getRandomElement(object) {
    const size = Object.values(object).length;
    return Math.floor(Math.random() * size);
  }
}

export default { hairConsultationDto };
