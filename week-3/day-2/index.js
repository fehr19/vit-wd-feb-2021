
function submit() {
    var entry = document.getElementById("task");
    var ul = document.getElementById("toDoList");
    // console.log("I SHOULD SEE THE INPUT ELEMENT", entry);
    // console.log("YAY THAT WORKED.");
    // console.log("Next, I want to see the value of the entry:", entry.value);
    // console.log("Alright, that was important so i want to store something");
    // instead of storing to another variable, let's create a new element to display the value
    var newLi = document.createElement("li");
    // console.log("let's look at the new element:", newLi)
    newLi.innerText = entry.value;
    // console.log('i should see a difference:', newLi)
    ul.appendChild(newLi)
  }
 