alert("scripts.js has loaded!"); 
let userInput;
userInput = prompt("Whats your favorite color", "Blue.");
if ( userInput === "Blue." ) {
  $("#response").html("Wonderful choice!");
} else {
  $("#response").html("What about Blue?");
}

