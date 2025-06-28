import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../../pages/SignupPage";

// --- Signup Happy Path ---
Given("I open the sign up page", () => {
  SignupPage.visitSignupPage();
});

When("I enter new user details", () => {
  const randomEmail = "test" + Date.now() + "@mail.com";
  SignupPage.enterFirstName("Test");
  SignupPage.enterLastName("User");
  SignupPage.enterEmail(randomEmail);
  SignupPage.enterPassword("Test@1234");
  SignupPage.confirmPassword("Test@1234");
});

Then("I submit the signup form", () => {
  SignupPage.submitForm();
});

Then("I should be redirected to my account page", () => {
  SignupPage.assertDashboard();
});

// --- Required Fields Missing ---
When("I submit the signup form without entering any data", () => {
  SignupPage.submitWithoutData();
});

Then("I should see validation errors for required fields", () => {
  SignupPage.assertValidationErrors();
});

// --- Invalid Email ---
When("I enter user details with invalid email format", () => {
  SignupPage.enterFirstName("Test");
  SignupPage.enterLastName("Invalid");
  SignupPage.enterInvalidEmail("invalid-email");
  SignupPage.enterPassword("Test@1234");
  SignupPage.confirmPassword("Test@1234");
  SignupPage.submitForm();
});

Then("I should see an email validation error", () => {
  SignupPage.assertEmailFormatError();
});

// --- Mismatched Passwords ---
When("I enter user details with different password and confirmation", () => {
  const email = "test" + Date.now() + "@mail.com";
  SignupPage.enterFirstName("Mismatch");
  SignupPage.enterLastName("Passwords");
  SignupPage.enterEmail(email);
  SignupPage.enterPassword("Test@1234");
  SignupPage.confirmPassword("DifferentPass123");
  SignupPage.submitForm();
});

Then("I should see a password mismatch error", () => {
  SignupPage.assertPasswordMismatchError();
});

// --- Duplicate Email ---
When("I enter user details using an existing email", () => {
  SignupPage.enterFirstName("Existing");
  SignupPage.enterLastName("User");
  SignupPage.enterEmail("testexisting@mail.com"); // Use a manually registered email
  SignupPage.enterPassword("Test@1234");
  SignupPage.confirmPassword("Test@1234");
  SignupPage.submitForm();
});

Then("I should see an error that the email is already registered", () => {
  SignupPage.assertDuplicateEmailError();
});

// --- Login Success ---
Given("I open the login page", () => {
  SignupPage.visitLoginPage();
});

When("I enter valid login credentials", () => {
  SignupPage.enterLoginEmail("testexisting@mail.com"); // Existing registered user
  SignupPage.enterLoginPassword("Test@1234");
  SignupPage.submitLogin();
});

Then("I should be redirected to my account dashboard", () => {
  SignupPage.assertDashboard();
});

// --- Login Failure ---
When("I enter a valid email and incorrect password", () => {
  SignupPage.enterLoginEmail("testexisting@mail.com");
  SignupPage.enterLoginPassword("WrongPassword123");
  SignupPage.submitLogin();
});

Then("I should see an authentication error message", () => {
  SignupPage.assertLoginError();
});
