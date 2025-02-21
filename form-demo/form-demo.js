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
  // Get a reference to the form to easily access its named elements.
  const theForm = document.querySelector("#checkoutForm");

  // Get the containers for the credit card and PayPal details.
  const creditCardContainer = document.getElementById(
    "creditCardNumberContainer"
  );
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide both payment detail containers.
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Remove the required attribute from both hidden payment fields.
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show the appropriate container and enable the required attribute based on the selected payment method.
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// Attach a change event handler to the paymentMethod input to call togglePaymentDetails on change.
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);

// Helper function to display errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Attach event listeners when the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Attach the change event handler to the paymentMethod select element.
  const paymentMethodSelect = document.getElementById("paymentMethod");
  paymentMethodSelect.addEventListener("change", togglePaymentDetails);

  // Attach the submit event handler to the form.
  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", validateForm);
});
