function tipAmount() {
    var userInput = document.getElementById("billAmount");
    console.log("user input", userInput);

    var tipAmount = userInput.value * Number(.15);
    console.log("this is the tip amount", tipAmount);

    var tipTotal = document.getElementById("tipThis");
    tipTotal.parentNode.append(tipAmount);
}