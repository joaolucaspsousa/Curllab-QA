let Locators_QuizResults = {
  firstSectionPresentation: {
    username: ".header > h1",
    hairTexture: ".box-container > :nth-child(1) > h3",
    hairLength: ".box-container > :nth-child(2) > h3",
    hairDensity: ".box-container > :nth-child(3) > h3",
    damageLevel: ".box-container > :nth-child(4) > h3",
    resultBase: {
      title: ".container_3 > .header > h2",
      description: ".first-content > p",
    },
    boosterResult: [
      {
        description: ".second-content > .box-container > .box:eq(0)",
      },
      {
        description: ".second-content > .box-container > .box:eq(1)",
      },
      {
        description: ".second-content > .box-container > .box:eq(2)",
      },
    ],
    focusOn: ".container_4 > h4",
  },
  secondSectionIngredients: {
    ingredients: {
      baseIngredients: ".ingredients > :nth-child(1) > h4",
      boosterIngredients: [
        {
          description: ".ingredients > :nth-child(2) > h4",
        },
        {
          description: ".ingredients > :nth-child(3) > h4",
        },
        {
          description: ".ingredients > :nth-child(4) > h4",
        },
      ],
    },
    thirdSectionRoutine: {
      routineShampooWithConditioner: ".sub-content > :nth-child(1) > p",
      routineDeepConditioning: ".sub-content > :nth-child(2) > p",
      routineStyling: ".sub-content > :nth-child(3) > p",
    },
    fourthSectionProducts: {
      shampooProduct: {
        productName: ".section-1__product__details > .section-1__product__details__name:eq(0)",
        proTip:
          ".section-1__product__details > .section-1__product__details_pro_tip:eq(0)",
      },
      conditionerProduct: {
        productName: ".section-1__product__details > .section-1__product__details__name:eq(1)",
        proTip:
          ".section-1__product__details > .section-1__product__details_pro_tip:eq(1)",
      },
      treatmentProduct: {
        productName: ".section-1__product__details > .section-1__product__details__name:eq(2)",
        proTip:
          ".section-1__product__details > .section-1__product__details_pro_tip:eq(2)",
      },
      stylingProduct: [
        {
          productName: ".section-1__product__details > .section-1__product__details__name:eq(3)",
          proTip:
            ".section-1__product__details > .section-1__product__details_pro_tip:eq(3)",
        },
        {
          productName: ".section-1__product__details > .section-1__product__details__name:eq(4)",
          proTip:
            ".section-1__product__details > .section-1__product__details_pro_tip:eq(4)",
        },
        {
          productName: ".section-1__product__details > .section-1__product__details__name:eq(5)",
          proTip:
            ".section-1__product__details > .section-1__product__details_pro_tip:eq(5)",
        },
      ],
    },
    fiveSectionOptionalProducts: {
        stylingProduct: [
            {
                productName: ".elements__element__infos > h4:eq(0)",
                proTip: ".elements__element__infos > .elements__element__infos__description:eq(0)",
            },
            {
                productName: ".elements__element__infos > h4:eq(1)",
                proTip: ".elements__element__infos > .elements__element__infos__description:eq(1)",
            },
        ],
    }
  },
};

export default { Locators_QuizResults };
