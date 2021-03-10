function closeSplash() {
  document.querySelector("button").style.visibility = "hidden";
  document.querySelector("#splashPage").style.visibility = "hidden";
  document.querySelector("#tableOfContent").style.visibility = "visible";
}

//create an array with 2 different data types
//create an object with your firstName, lastName, favoriteColor
//update the favorite color
//console log the second number from the array with your favorite color
//example output: 500royalblue

var randomArray = [2021, "Hello"];


var aboutMe = {
  firstName: "Fernando",
  lastName: "Alas",
  favoriteColor: "Orange",
}
console.log(aboutMe);
aboutMe.favoriteColor = "Blue"
console.log(randomArray[0] + aboutMe.favoriteColor);
