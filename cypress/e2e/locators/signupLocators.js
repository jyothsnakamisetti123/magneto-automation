const signupLocators = {
    // Signup Page
    firstName: "#firstname",
    lastName: "#lastname",
    email: "#email_address",
    password: "#password",
    confirmPassword: "#password-confirmation",
    signupButton: "button[title='Create an Account']",
  
    // Validation Errors
    firstNameError: "#firstname-error",
    lastNameError: "#lastname-error",
    emailError: "#email_address-error",
    passwordError: "#password-error",
    confirmPasswordError: "#password-confirmation-error",
    invalidEmailErrorText: "Please enter a valid email address",
    passwordMismatchErrorText: "Please enter the same value again.",
    duplicateEmailErrorText: "There is already an account with this email address",
  
    // Login Page
    loginEmail: "#email",
    loginPassword: "#pass",
    loginButton: "#send2",
    loginErrorText: "The account sign-in was incorrect",
  
    // Dashboard
    dashboardUrl: "/customer/account/",
    welcomeText: "Welcome",
  };
  
  export default signupLocators;
  