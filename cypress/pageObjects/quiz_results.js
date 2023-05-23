class PO_QuizResults {
  constructor() {
    this.Fix_APIQuizResults = require("../fixtures/quiz_results/api_quiz_results.json");
  }

  getResults(answers) {
    const hairState = this._getHairState(answers);
    const base = this._getBase(answers, hairState.damageLevel);
    const treatmentRecommendation = this._getTreatmentSystem(base);
    const boosters = this._getBoosters(answers.product_goals);
    const stylingRecommendation = this._getStylingRecommendations(answers);

    const results = {
      boosters: boosters,
      damageLevel: {
        damageId: hairState.damageId,
        description: hairState.damageLevel,
      },
      baseName: base,
      hairCurrentState: hairState.state,
      products: {
        routineRecommendations: [],
        stylingRecommendations: stylingRecommendation,
        treatmentRecommendation: treatmentRecommendation,
        hygieneRecommendation: {
          shampoo: {
            productId: 40,
            name: "Shampoo",
          },
          conditioner: {
            productId: 38,
            name: "Conditioner",
          },
        },
      },
    };

    return results;
  }

  _getBase(answers, damageLevel) {
    const protectiveStyle = answers.wearing_style;

    if (protectiveStyle === 2) {
      return this.Fix_APIQuizResults.baseName.find(
        this.Fix_APIQuizResults.baseName.name === "Total Protect"
      );
    }

    if (damageLevel === ["Medium", "High"]) {
      return this.Fix_APIQuizResults.baseName.find(
        this.Fix_APIQuizResults.baseName.name === "Total Repair"
      );
    }

    switch (answers.product_type_of_curl) {
      case [1, 2, 3]:
        return this.Fix_APIQuizResults.baseName.find(
          this.Fix_APIQuizResults.baseName.name === "Hydro Power"
        );

      case [4, 5, 6]:
        return this.Fix_APIQuizResults.baseName.find(
          this.Fix_APIQuizResults.baseName.name === "Coil Power"
        );

      default:
        cy.log("404: Type of Curl not found");
    }
  }

  _getTreatmentSystem(base) {
    return this.Fix_APIQuizResults.treatmentRecommendation.find(
      this.Fix_APIQuizResults.treatmentRecommendation.name === base
    );
  }

  _getBoosters(goals) {
    const boosters = {
      concentration: 0,
      list: [],
    };

    goals.forEach((goal) => {
      const booster = this.Fix_APIQuizResults.boosters.find(
        this.Fix_APIQuizResults.boosters.goalSelected === goal
      );
      boosters.list.push(booster);
    });

    switch (goals.length) {
      case 1:
        boosters.concentration =
          this.Fix_APIQuizResults.boosters.oneGoalConcentration;
        break;

      case 2:
        boosters.concentration =
          Fix_APIQuizResults.boosters.twoGoalsConcentration;
        break;

      case 3:
        boosters.concentration =
          Fix_APIQuizResults.boosters.threeGoalsConcentration;
        break;

      default:
        cy.log(
          "400: It was not possible to determine the concentration of the booster"
        );

        return boosters;
    }
  }

  _getStylingRecommendations(answers) {
    const protectiveStyle = answers.wearing_style;
    const stylingRecommendations = [];
    const indexProducts = [];

    if (protectiveStyle === 2) {
      indexProducts.push(0, 1, 4);
    }

    switch (answers.product_style_formats) {
      case 1:
        indexProducts.push(0, 4);
        break;

      case 2:
        if (answers.product_type_of_curl === 1) {
          indexProducts.push(3, 4);
        } else {
          indexProducts.push(5, 4);
        }
        break;

      case 3:
        if (answers.product_type_of_curl === 1) {
          indexProducts.push(6, 4);
        } else {
          indexProducts.push(3, 4);
        }
        break;

      case 4:
        if (answers.product_type_of_curl === 1) {
          indexProducts.push(7, 4);
        } else if (answers.product_type_of_curl === [2, 3]) {
          indexProducts.push(6, 4);
        } else {
          indexProducts.push(2, 4);
        }
        break;
    }

    indexProducts.forEach((index) => {
      stylingRecommendations.push(
        this.Fix_APIQuizResults.products.stylingRecommendations[index]
      );
    });

    return stylingRecommendations;
  }

  _getHairState(answers) {
    const hairState = {};
    const protectiveStyle = answers.wearing_style;

    if (protectiveStyle === 2) {
      hairState.hairCurrentState = "NOT_NATURAL";
    } else {
      hairState.hairCurrentState = "NATURAL";
    }

    levelDamage = this._getDamageLevel(answers.product_damage_level);

    return {
      damageId: levelDamage.damageId,
      damageLevel: levelDamage.damageLevel,
      state: hairState.hairCurrentState,
    };
  }

  _getDamageLevel(hairLoss, breakage, shine, splitEnds) {
    if (shine === [1, 2]) {
      shine = 5;
    } else if (shine === [3, 4]) {
      shine = 2;
    } else {
      shine = 1;
    }

    const level = max(hairLoss, breakage, shine, splitEnds);

    switch (level) {
      case 1:
        level = "Low Level";
        break;

      case [2, 3]:
        level = "Medium Level";
        break;

      case [4, 5]:
        level = "High Level";
        break;

      default:
        cy.log("400: It was not possible to determine the level of damage");
        break;
    }

    return this.Fix_APIQuizResults.damageLevel.find(
      this.Fix_APIQuizResults.damageLevel.level === level
    );
  }
}

export default PO_QuizResults;
