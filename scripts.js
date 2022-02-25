alert("scripts.js has loaded!"); 
let userInput;
userInput = prompt("Whats your favorite color", "Blue.");
if ( userInput === "Blue." ) {
  $("#response").html("Wonderful choice!");
} else {
  $("#response").html("What about Blue?");
}

let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse; 
  beansRespnse = "You ordered" + beansVariable + beans. Good choice!";
  $("#response").html(beansResponse);
};
let blackBeans; 
blackBeans = "black";
makeABurrito(blackBeans);  
