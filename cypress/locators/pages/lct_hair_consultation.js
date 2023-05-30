let Locators_HairConsultation = {
  // Initial Page
  welcomeTitle: ".quiz__header__title",
  getStartedButton: ".quiz__identification > .default-button",

  previousButton:
    ".quiz__question--displaying > quiz-buttons > .quiz-buttons > :nth-child(1)",
  nextButton:
    ".quiz__question--displaying > quiz-buttons > .quiz-buttons > :nth-child(2)",
  submitButton: "[type='submit']",

  currentQuestion: {
    title:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__title",
    tip: ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > answer-tip > .answer-tip > .answer-tip__btn > img",
  },

  anyQuestion: {
    slider:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > [style='display: flex;'] > range-slider > .slide-container > input-range > .range__container > input",
  },

  // Fourth Question
  fourthQuestion: {
    dryOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(1)",
    normalOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(2)",
    oilyRootsOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(3)",
    oilyOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(4)",
  },

  // Fifth Question
  fifthQuestion: {
    hairLoss: {
      slider:
        ":nth-child(1) > #slide-for-scale > .slide-container > input-range > .range__container > input",
    },
    breakage: {
      slider:
        ":nth-child(2) > #slide-for-scale > .slide-container > input-range > .range__container > input",
    },
    shine: {
      slider:
        ":nth-child(3) > #slide-for-scale > .slide-container > input-range > .range__container > input",
    },
    splitEnds: {
      slider:
        ":nth-child(4) > #slide-for-scale > .slide-container > input-range > .range__container > input",
    },
  },

  // Sixth Question
  sixthQuestion: {
    untanglingOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(1)",
    lengthenOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(2)",
    antiBreakageOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(3)",
    antiShrinkageOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(4)",
    deepConditionOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(5)",
    shineOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(6)",
    thermalProtectionOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(7)",
    sootheScalpOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(8)",
    humidityBlockageOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(9)",
    curlDefinition:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(10)",
    volumizeOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(11)",
    colorProtectionOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(8)",
  },

  // Seventh Question
  seventhQuestion: {
    firstOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(2)",
    secondOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(3)",
    thirdOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(4)",
    fourthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(2)",
    fifthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(3)",
    sixthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(4)",
    seventhOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(3) > :nth-child(2)",
  },

  // Eighth Question
  eighthQuestion: {
    firstOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(2)",
    secondOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(3)",
    thirdOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(1) > :nth-child(4)",
    fourthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(2)",
    fifthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(3)",
    sixthOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(2) > :nth-child(4)",
    seventhOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers--grid-triple > :nth-child(3) > :nth-child(2)",
  },

  // Ninth Question
  ninthQuestion: {
    naturalOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(1)",
    relaxedOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(2)",
    bleachedOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(3)",
    protectiveStyledOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(4)",
    veryShortOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(5)",
    silkPressedOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(6)",
    transitioningOption:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(7)",
  },

  // Tenth Question
  tenthQuestion: {
    slider:
      ".quiz__question--displaying > .quiz__question__background > .quiz__question__wrap > .quiz__question__answers > :nth-child(1) > range-slider > .slide-container > input-range > .range__container > input",
  },

  // Twelfth Question
  nameInput: ".bottle-input > .ng-untouched",

  // Thirteenth Question

  // Fourteenth Question
  uploadPhoto: ".image-uploader__icon > img",
};

export default { Locators_HairConsultation };
