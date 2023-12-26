(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');
    let telephoneInput = document.querySelector('#telephone');
    let messageInput = document.querySelector('#message');
  
    // shows error message for an input field
    function showErrorMessage(input, message) {
      let container = input.parentElement; // the .input-wrapper
      // Check and Remove any existing errors, good practice to avoid bugs down the line
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
    
      // Now add the error if the message isn't empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
  }
    // validates that email has @ and a period, executes showErrorMessage if not
    function validateEmail() {
      let value = emailInput.value;
  
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
  
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
      
      showErrorMessage(emailInput, null);
      return true;
    }
  
  // Validates telephone exists and is formatted correctly. Executes showErrorMessage if not.
    function validateTelephone() {
      let value = telephoneInput.value;
      
      if (!value) {
        showErrorMessage(telephoneInput, 'Telephone number is required.');
        return false;
      }
  
      if (value.length !== 10) {
        showErrorMessage(telephoneInput, 'Enter a valid phone number');
        return false;
      }
  
      showErrorMessage(telephoneInput, null);
      return true;
    }
    
      // validates that message exists, executes showErrorMessage if not
    function validateMessage() {
      let value = messageInput.value;
  
      if (!value) {
        showErrorMessage(messageInput, 'Message is a required field.');
        return false;
      }
  
      showErrorMessage(messageInput, null);
      return true;
    }
  
    // Declaring each a variable and then storing what's returned in each, this means errors for each are returned at the same time. 
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidTelephone = validateTelephone();
      let isValidMessage = validateMessage();
      return isValidEmail && isValidTelephone && isValidMessage;
    }
  
    // eventListener is a conditional statement that delivers a success message to the user as long as the validateForm function above the statement returns true.
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });
  // eventListeners run the validation in real time, showing errors as the user types.
    emailInput.addEventListener('input', validateEmail);
    telephoneInput.addEventListener('input', validateTelephone);
  
    // THE RETURN STATEMENT HERE
  })();