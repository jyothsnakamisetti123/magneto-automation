Feature: Signup Test

  Scenario: Successful signup
    Given I open the sign up page
    When I enter new user details
    Then I submit the signup form
    Then I should be redirected to my account page
