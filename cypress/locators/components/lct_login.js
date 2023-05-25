let Locators_LoginModal = {
  // Input field's
  email: "#signInEmail",
  password: "#signInPassword",
  hiddenPassword: '[src="assets/svg/closed_eye.svg"]',
  showPassword: '[src="assets/svg/opened_eye.svg"]',

  // Links
  forgotPassword: ".link",
  rememberMe: "#checkbox-allow-contact",

  // Social Login
  signInWithFacebook: ".facebook-button",
  signInWithGoogle: "#googleBtn",

  // Buttons
  loginButton: "form-button.sign-in > .sign-in",
  registerButton: ".create-account__button > .sign-in",
  closeButton: ".btn-close",

  // Error messages
  emailErrorMessage:
    "[ng-reflect-input-id='signInEmail'] > [ng-reflect-varient='error']",
  passwordErrorMessage:
    "[ng-reflect-input-id='signInPassword'] > [ng-reflect-varient='error']",
  loginErrorMessage:
    'feedback-text > [ng-reflect-text=" Authentication Error. Please, try again!"]',
};

export default { Locators_LoginModal };
