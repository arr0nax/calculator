//
// var add = function(n1, n2) {alert(n1+n2)};
// var sub = function(n1, n2) {alert(n1+n2)};
// var mult = function(n1, n2) {alert(n1*n2)};
// var three = function(n1, n2, n3) {alert(n1*n2*n3)};
// var div = function(n1, n2) {alert(n1/n2)};
// var remainder = function(n1,n2) {alert(n1%n2)};
//
// var number1 = parseInt(prompt("enter a number: "));
// var number2 = parseInt(prompt("enter another: "));
// var operator = prompt("add, subtract, multiply, or divide?")
//
// if (operator === "add") {
//   add(number1, number2);
// } else if (operator === "subtract") {
//   sub(number1, number2);
// } else if (operator === "multiply") {
//   mult(number1, number2);
// } else if (operator === "divide") {
//  div(number1, number2);
// } else {
//   alert("You suck, try again scrub.")
// }

$("h1").click(function() {
  alert("Click this for relatable content ayyy lmao");
});

$("p").click(function() {
  alert("Not as dank, not as meme.");
});

// $("img").click(function() {
//   alert("astronomical")
// });

// document.getElementById("add").onclick = function {
//   var text = documenet.getElementById("userinput").value;
//   var li = "<li>" + text + "</li>";
//   document.getElementById("list").appendChild(li);
// }
var titles  = [];
var titleInput  = document.getElementById("title");
var messageBox  = document.getElementById("display");

shortcut.add("return",
function() {
  insert()
},
{ 'type':'keydown','propagate':true, 'target':document}
);


function insert () {
    titles.push(titleInput.value);
    clearAndShow();
}

function clearAndShow () {
    titleInput.value = "";
    messageBox.innerHTML = "";
    messageBox.innerHTML += titles.join("<br/> ") + "<br/>";
}
