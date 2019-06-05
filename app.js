//Listen for submit
document.querySelector("#loan-form").addEventListener("submit", function(e) {
  //Hide results
  document.querySelector("#results").style.display = "none";

  //Show loading image when
  document.querySelector("#loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  //UI variables
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute monbthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    //Show result after 2 second delay
    document.querySelector("#results").style.display = "block";
    //Hide loading image
    document.querySelector("#loading").style.display = "none";
  } else {
    showError("Somethig went wrong. Check the numbers.");
  }
}

function showError(error) {
  //Hide result after 2 second delay
  document.querySelector("#results").style.display = "none";
  //Hide loading image
  document.querySelector("#loading").style.display = "none";

  const errorDiv = document.createElement("div");

  //Get element
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add class
  errorDiv.className = "alert alert-danger";

  //Text node
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error message after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
