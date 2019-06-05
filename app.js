//Listen for submit
document
  .querySelector("#loan-form")
  .addEventListener("submit", calculateResults);

function calculateResults(e) {
  console.log("calculating");

  //UI variables
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInteresrt = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(interest.value) / 100 / 12;


  e.preventDefault();
}
