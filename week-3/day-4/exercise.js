function calculateTip10() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.10;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}

function calculateTip15() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.15;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}

function calculateTip20() {
  var billAmountValue = document.getElementById("billAmount").value;
  var tipAmount = billAmountValue * 0.20;
  var outputElement = document.getElementById("output");
  outputElement.innerText = tipAmount;
}