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

const factorial = function (n) {
  // let factor = 1;
  // if (n === 0) return factor;
  // for (let i = 1; i <= n; i++) {
  //   factor *= i;
  // }
  // return factor;

  if (n === 0) return 1;
  return n * factorial(n - 1);
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
