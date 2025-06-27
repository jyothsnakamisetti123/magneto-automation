// cypress/e2e/features/step_definitions/signupSteps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPage from "../../pages/SignupPage";

Given("I open the sign up page", () => {
  SignupPage.visit();
});

When("I enter new user details", () => {
  SignupPage.enterFirstName("TestFirst");
  SignupPage.enterLastName("TestLast");
  SignupPage.enterEmail("test" + Date.now() + "@mail.com");
  SignupPage.enterPassword("Test@1234");
  SignupPage.confirmPassword("Test@1234");
});

Then("I submit the signup form", () => {
  SignupPage.submit();
});

Then("I should be redirected to my account page", () => {
  cy.url().should("include", "/customer/account/");
});
