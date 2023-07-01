class hairConsultationDto {
  constructor() {
    this.questions = require("../fixtures/hair_consultation/questions_hair_consultation.json");
    this.answers = {
      product_type_of_curl: 0,
      product_hair_length: 0,
      product_hair_density: 0,
      product_scalp_type: 0,
      hair_loss: 0,
      breakage: 0,
      shine: 0,
      split_ends: 0,
      product_goals: [],
      hair_wash_recurrence: 0,
      deep_condition_recurrence: 0,
      product_wearing_style: 0,
      product_style_formats: 0,
      product_color: 0,
      product_bottle_name: "",
      product_scent: 0,
    };
  }

  setAnswersHairConsultation(answers) {
    Object.keys(this.answers).forEach((answer, index) => {
      this.answers[answer] = answers[index];
    });
  }

  setRandomAnswersHairConsultation() {
    let randomAnswers = [];

    Object.keys(this.questions).forEach((question) => {
      if (question.includes("fifthQuestion")) {
        Object.values(this.questions[question]).forEach((element) => {
          let randomEachElement = this._getRandomElement(element);
          randomAnswers.push(randomEachElement);
        });
        return;

      } else if (question.includes("sixthQuestion")) {
        let randomBoosters = [];
        let size = Math.floor(Math.random() * 3) + 1;

        cy.log(`[Hair Consultation] Quantity of Boosters selected: ${size}`);

        while (randomBoosters.length < size) {
          let randomElement = this._getRandomElement(this.questions[question]);
          if (!randomBoosters.includes(randomElement)) {
            randomBoosters.push(randomElement);
          }
        }
        
        randomAnswers.push(randomBoosters);
        return;
        
      } else if (question.includes("twelfthQuestion")) {
        randomAnswers.push(this.questions[question]);
      }
      const randomElement = this._getRandomElement(this.questions[question]);
      randomAnswers.push(randomElement);
    });
    this.setAnswersHairConsultation(randomAnswers);
  }

  _getRandomElement(object) {
    const size = Object.values(object).length;
    return Math.floor(Math.random() * size);
  }
}

export default { hairConsultationDto };
