class SignupPage {
  visitSignupPage() {
    cy.visit("/customer/account/create/", { timeout: 100000 });
  }

  visitLoginPage() {
    cy.visit("/customer/account/login/", { timeout: 100000 });
  }

  enterFirstName(name) {
    cy.get("#firstname").clear().type(name);
  }

  enterLastName(name) {
    cy.get("#lastname").clear().type(name);
  }

  enterEmail(email) {
    cy.get("#email_address").clear().type(email);
  }

  enterInvalidEmail(email) {
    cy.get("#email_address").clear().type(email);
  }

  enterPassword(password) {
    cy.get("#password").clear().type(password);
  }

  confirmPassword(password) {
    cy.get("#password-confirmation").clear().type(password);
  }

  submitForm() {
    cy.get("button[title='Create an Account']").click();
  }

  submitWithoutData() {
    cy.get("button[title='Create an Account']").click();
  }

  enterLoginEmail(email) {
    cy.get("#email").clear().type(email);
  }

  enterLoginPassword(password) {
    cy.get("#pass").clear().type(password);
  }

  submitLogin() {
    cy.get("#send2").click();
  }

  assertValidationErrors() {
    cy.get("#firstname-error").should("be.visible");
    cy.get("#lastname-error").should("be.visible");
    cy.get("#email_address-error").should("be.visible");
    cy.get("#password-error").should("be.visible");
    cy.get("#password-confirmation-error").should("be.visible");
  }

  assertEmailFormatError() {
    cy.get("#email_address-error")
      .should("contain", "Please enter a valid email address");
  }

  assertPasswordMismatchError() {
    cy.contains("Please enter the same value again.").should("be.visible");
  }

  assertDuplicateEmailError() {
    cy.contains("There is already an account with this email address").should("be.visible");
  }

  assertLoginError() {
    cy.contains("The account sign-in was incorrect").should("be.visible");
  }

  assertDashboard() {
    cy.url().should("include", "/customer/account/");
    cy.contains("Welcome").should("be.visible");
  }
}

export default new SignupPage();
