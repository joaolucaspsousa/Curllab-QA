class PO_QuizResults {
  constructor() {
    (async () => {
      this.Fix_APIQuizResults =
        await require("../fixtures/quiz_results/api_quiz_results.json");
    })();
  }

  getResults(answers) {
    const hairState = this._getHairState(answers);
    const base = this._getBase(answers, hairState.damageLevel);
    const treatmentRecommendation = this._getTreatmentSystem(base);
    const boosters = this._getBoosters(answers.product_goals);
    const stylingRecommendation = this._getStylingRecommendations(answers);

    if (
      !hairState ||
      !base ||
      !treatmentRecommendation ||
      !boosters ||
      !stylingRecommendation
    ) {
      cy.log(
        "[Quiz Results] 400: An error occurred while trying to get the hair consultation results."
      );
      return null;
    }

    const results = {
      boosters: boosters,
      damageLevel: {
        damageId: hairState.damageId,
        description: hairState.damageLevel,
      },
      baseName: base.name,
      hairCurrentState: hairState.state,
      products: {
        routineRecommendations: [],
        stylingRecommendations: stylingRecommendation,
        treatmentRecommendation: treatmentRecommendation,
        hygieneRecommendation:
          this.Fix_APIQuizResults.products.hygieneRecommendation,
      },
    };

    return results;
  }

  _getBase(answers, damageLevel) {
    const protectiveStyle = answers.product_wearing_style;
    let baseName;

    if (protectiveStyle === 2) {
      const base = this.Fix_APIQuizResults.baseName.find(
        (element) => element.name === "Total Protect"
      );

      cy.log(`[Quiz Results] Base: ${JSON.stringify(base)}`);
      return base ? base : null;
    }

    if (["Medium Level", "High Level"].includes(damageLevel)) {
      const base = this.Fix_APIQuizResults.baseName.find(
        (element) => element.name === "Total Repair"
      );

      cy.log(`[Quiz Results] Base: ${JSON.stringify(base)}`);
      return base ? base : null;
    }

    if ([1, 2, 3].includes(answers.product_type_of_curl)) {
      baseName = "Hydro Power";
    } else if ([4, 5, 6, 7].includes(answers.product_type_of_curl)) {
      baseName = "Coil Power";
    } else {
      cy.log("[Quiz Results] 404: Type of Curl not found.");
    }

    const base = this.Fix_APIQuizResults.baseName.find(
      (element) => element.name === baseName
    );

    cy.log(`[Quiz Results] Base: ${JSON.stringify(base)}`);

    return base ? base : null;
  }

  _getTreatmentSystem(base) {
    const treatmentRecommendation =
      this.Fix_APIQuizResults.products.treatmentRecommendation.find(
        (element) => element.baseName === base.name
      );

    cy.log(
      `[Quiz Results] Treatment Recommendation: ${JSON.stringify(
        treatmentRecommendation
      )}`
    );

    return treatmentRecommendation ? treatmentRecommendation : null;
  }

  _getBoosters(goals) {
    const boosters = {
      concentration: 0,
      list: [],
    };

    goals.forEach((goal) => {
      const booster = this.Fix_APIQuizResults.boosters.list.find(
        (element) => element.goalSelected === goal
      );
      booster ? boosters.list.push(booster) : null;
    });

    switch (goals.length) {
      case 1:
        boosters.concentration =
          this.Fix_APIQuizResults.boosters.oneGoalConcentration;
        break;

      case 2:
        boosters.concentration =
          this.Fix_APIQuizResults.boosters.twoGoalsConcentration;
        break;

      case 3:
        boosters.concentration =
          this.Fix_APIQuizResults.boosters.threeGoalsConcentration;
        break;

      default:
        cy.log(
          "[Quiz Results] 400: It was not possible to determine the concentration of the booster."
        );
        break;
    }

    cy.log(`[Quiz Results] Boosters: ${JSON.stringify(boosters)}`);

    return boosters.list.length !== 0 ? boosters : null;
  }

  _getStylingRecommendations(answers) {
    const protectiveStyle = answers.product_wearing_style;
    const stylingRecommendations = [];
    const indexProducts = [];

    if (protectiveStyle === 2) {
      stylingRecommendations.push(
        this.Fix_APIQuizResults.products.stylingRecommendations[0],
        this.Fix_APIQuizResults.products.stylingRecommendations[1],
        this.Fix_APIQuizResults.products.stylingRecommendations[4]
      );

      cy.log(
        `[Quiz Results] Styling Recommendations: ${JSON.stringify(
          stylingRecommendations
        )}`
      );

      return stylingRecommendations.length !== 0
        ? stylingRecommendations
        : null;
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
        } else if ([2, 3].includes(answers.product_type_of_curl)) {
          indexProducts.push(6, 4);
        } else {
          indexProducts.push(2, 4);
        }
        break;

      default:
        cy.log("[Quiz Results] 404: Style Format not found.");
        break;
    }

    indexProducts.forEach((index) => {
      stylingRecommendations.push(
        this.Fix_APIQuizResults.products.stylingRecommendations[index]
      );
    });

    cy.log(
      `[Quiz Results] Styling Recommendations: ${JSON.stringify(
        stylingRecommendations
      )}`
    );

    return stylingRecommendations.length !== 0 ? stylingRecommendations : null;
  }

  _getHairState(answers) {
    let hairCurrentState = this.Fix_APIQuizResults.hairCurrentState.find(
      (element) => element.hairCurrentStateId == answers.product_wearing_style
    );

    const damageLevel = this._getDamageLevel(
      answers.hair_loss,
      answers.breakage,
      answers.shine,
      answers.split_ends
    );

    cy.log(
      `[Quiz Results] Damage Level Object: ${JSON.stringify(damageLevel)}`
    );

    return damageLevel
      ? {
          damageId: damageLevel.damageId,
          damageLevel: damageLevel.description,
          state: hairCurrentState,
        }
      : null;
  }

  _getDamageLevel(hairLoss, breakage, shine, splitEnds) {
    if ([1, 2].includes(shine)) {
      shine = 5;
    } else if ([3, 4].includes(shine)) {
      shine = 2;
    } else {
      shine = 1;
    }

    let level = Math.max(hairLoss, breakage, shine, splitEnds);

    if (level === 1) {
      level = "Low Level";
    } else if ([2, 3].includes(level)) {
      level = "Medium Level";
    } else if ([4, 5].includes(level)) {
      level = "High Level";
    } else {
      cy.log(
        "[Quiz Results] 400: It was not possible to determine the level of damage."
      );
    }

    const damageLevel = this.Fix_APIQuizResults.damageLevel.find(
      (element) => element.description === level
    );

    cy.log(`[Quiz Results] Damage Level: ${damageLevel.description}`);

    return damageLevel ? damageLevel : null;
  }
}

export default { PO_QuizResults };
