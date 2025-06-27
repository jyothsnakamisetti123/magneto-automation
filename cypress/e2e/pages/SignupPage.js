// cypress/e2e/pages/SignupPage.js

class SignupPage {
    visit() {
      cy.visit("/customer/account/create/");
    }
  
    enterFirstName(name) {
      cy.get("#firstname").type(name);
    }
  
    enterLastName(name) {
      cy.get("#lastname").type(name);
    }
  
    enterEmail(email) {
      cy.get("#email_address").type(email);
    }
  
    enterPassword(password) {
      cy.get("#password").type(password);
    }
  
    confirmPassword(password) {
      cy.get("#password-confirmation").type(password);
    }
  
    submit() {
      cy.get("button[title='Create an Account']").click();
    }
  }
  
  export default new SignupPage();
  