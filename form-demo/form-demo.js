function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page.
    // To keep it from happening we can call event.preventDefault()
    // You should always give feedback to the user about what went wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    
    // if we ran into any problems above isValid will be false.
    if (!isValid) {
      // stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    // Get the form from the event target (the payment method select element)
    const theForm = e.target.form;
    // Get the containers for the credit card and PayPal details
    const creditCardContainer = document.getElementById('creditCardNumber');
    const paypalContainer = document.getElementById('paypalUsername');
  
    // Hide both payment containers and disable required for their inputs.
    creditCardContainer.classList.add('hide');
    paypalContainer.classList.add('hide');
    document.getElementById('creditCard').required = false;
    document.getElementById('paypal').required = false;
  
    // Show the container based on the selected payment method and re-enable the required attribute.
    if (e.target.value === 'creditCard') {
      creditCardContainer.classList.remove('hide');
      document.getElementById('creditCard').required = true;
    } else if (e.target.value === 'paypal') {
      paypalContainer.classList.remove('hide');
      document.getElementById('paypal').required = true;
    }
  }
  
  // Helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // Attach event listeners when the DOM is fully loaded.
  document.addEventListener('DOMContentLoaded', function() {
    // Attach a change event handler to the paymentMethod input.
    const paymentMethodSelect = document.getElementById('paymentMethod');
    paymentMethodSelect.addEventListener('change', togglePaymentDetails);
  
    // Attach a submit event handler to the form.
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', validateForm);
  });
  