var sentence = prompt("enter your sentence");

var firstLastCap = function(myString) {
  return ((myString.charAt(0)+myString.charAt((myString.length) - 1)).toUpperCase())
};

var reverse = function(myString) {
  return ((myString.split("").reverse()).join(""));
}

var middle = function(myString) {
  return (myString.charAt((myString.length) / 2))
}

alert(middle(sentence).concat(sentence))
