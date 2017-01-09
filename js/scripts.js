
var add = function(n1, n2) {alert(n1+n2)};
var sub = function(n1, n2) {alert(n1+n2)};
var mult = function(n1, n2) {alert(n1*n2)};
var three = function(n1, n2, n3) {alert(n1*n2*n3)};
var div = function(n1, n2) {alert(n1/n2)};
var remainder = function(n1,n2) {alert(n1%n2)};

var number1 = parseInt(prompt("enter a number: "));
var number2 = parseInt(prompt("enter another: "));
var operator = prompt("add, subtract, multiply, or divide?")

if (operator === "add") {
  add(number1, number2);
} else if (operator === "subtract") {
  sub(number1, number2);
} else if (operator === "multiply") {
  mult(number1, number2);
} else if (operator === "divide") {
 div(number1, number2);
} else {
  alert("You suck, try again scrub.")
}
