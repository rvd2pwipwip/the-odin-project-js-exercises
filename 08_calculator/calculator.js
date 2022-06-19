const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  return arr.reduce((sum, n) => sum + n, 0);
};

const multiply = function (arr) {
  return arr.reduce((mult, n) => mult * n, 1);
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
