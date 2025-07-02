
import signupLocators from "../locators/signupLocators";

class SignupPage {
  visitSignupPage() {
    cy.visit("/customer/account/create/", { timeout: 100000 });
  }

  visitLoginPage() {
    cy.visit("/customer/account/login/", { timeout: 100000 });
  }

  enterFirstName(name) {
    cy.get(signupLocators.firstName).clear().type(name);
  }

  enterLastName(name) {
    cy.get(signupLocators.lastName).clear().type(name);
  }

  enterEmail(email) {
    cy.get(signupLocators.email).clear().type(email);
  }

  enterInvalidEmail(email) {
    cy.get(signupLocators.email).clear().type(email);
  }

  enterPassword(password) {
    cy.get(signupLocators.password).clear().type(password);
  }

  confirmPassword(password) {
    cy.get(signupLocators.confirmPassword).clear().type(password);
  }

  submitForm() {
    cy.get(signupLocators.signupButton).click();
  }

  submitWithoutData() {
    cy.get(signupLocators.signupButton).click();
  }

  enterLoginEmail(email) {
    cy.get(signupLocators.loginEmail).clear().type(email);
  }

  enterLoginPassword(password) {
    cy.get(signupLocators.loginPassword).clear().type(password);
  }

  submitLogin() {
    cy.get(signupLocators.loginButton).click();
  }

  assertValidationErrors() {
    cy.get(signupLocators.firstNameError).should("be.visible");
    cy.get(signupLocators.lastNameError).should("be.visible");
    cy.get(signupLocators.emailError).should("be.visible");
    cy.get(signupLocators.passwordError).should("be.visible");
    cy.get(signupLocators.confirmPasswordError).should("be.visible");
  }

  assertEmailFormatError() {
    cy.get(signupLocators.emailError)
      .should("contain", signupLocators.invalidEmailErrorText);
  }

  assertPasswordMismatchError() {
    cy.contains(signupLocators.passwordMismatchErrorText).should("be.visible");
  }

  assertDuplicateEmailError() {
    cy.contains(signupLocators.duplicateEmailErrorText).should("be.visible");
  }

  assertLoginError() {
    cy.contains(signupLocators.loginErrorText).should("be.visible");
  }

  assertDashboard() {
    cy.url().should("include", signupLocators.dashboardUrl);
   // cy.contains(signupLocators.welcomeText).should("be.visible");
  }
}

export default new SignupPage();
