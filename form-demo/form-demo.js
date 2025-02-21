function validateForm(event) {
    // Get the form from the event target.
    const theForm = event.target;
    const errors = [];
    let isValid = true;
    // (Any additional validations can be added here)
  
    if (!isValid) {
      // Prevent form submission if there are errors.
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    // Get the form from the event target (the paymentMethod select)
    const theForm = e.target.form;
    // Updated container IDs based on the new HTML structure.
    const creditCardContainer = document.getElementById('creditCardNumberContainer');
    const paypalContainer = document.getElementById('paypalUsernameContainer');
  
    // Hide both containers and disable required attribute on their inputs.
    creditCardContainer.classList.add('hide');
    paypalContainer.classList.add('hide');
    document.getElementById('creditCardNumber').required = false;
    document.getElementById('paypalUsername').required = false;
  
    // Show the appropriate container and re-enable the required attribute.
    if (e.target.value === 'creditCard') {
      creditCardContainer.classList.remove('hide');
      document.getElementById('creditCardNumber').required = true;
    } else if (e.target.value === 'paypal') {
      paypalContainer.classList.remove('hide');
      document.getElementById('paypalUsername').required = true;
    }
  }
  
  // Helper function to display errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // Attach event listeners when the DOM is fully loaded.
  document.addEventListener('DOMContentLoaded', function() {
    // Attach the change event handler to the paymentMethod select element.
    const paymentMethodSelect = document.getElementById('paymentMethod');
    paymentMethodSelect.addEventListener('change', togglePaymentDetails);
  
    // Attach the submit event handler to the form.
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', validateForm);
  });
  