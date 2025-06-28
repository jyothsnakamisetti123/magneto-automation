Feature: Signup and Login Test

  Scenario: Successful signup
    Given I open the sign up page
    When I enter new user details
    Then I submit the signup form
    Then I should be redirected to my account page

  Scenario: Signup with missing required fields
    Given I open the sign up page
    When I submit the signup form without entering any data
    Then I should see validation errors for required fields

  Scenario: Signup with invalid email format
    Given I open the sign up page
    When I enter user details with invalid email format
    Then I should see an email validation error

  Scenario: Signup with mismatched passwords
    Given I open the sign up page
    When I enter user details with different password and confirmation
    Then I should see a password mismatch error

  Scenario: Signup with an existing email
    Given I open the sign up page
    When I enter user details using an existing email
    Then I should see an error that the email is already registered

  Scenario: Successful login
    Given I open the login page
    When I enter valid login credentials
    Then I should be redirected to my account dashboard

  Scenario: Login with incorrect password
    Given I open the login page
    When I enter a valid email and incorrect password
    Then I should see an authentication error message
