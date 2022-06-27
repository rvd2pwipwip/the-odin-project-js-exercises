const fibonacci = function (num) {
  if (num < 0) {
    return 'OOPS';
  }
  let first = 0;
  let second = 1;
  for (let i = 1; i < num; i++) {
    const sum = first + second;
    first = second;
    second = sum;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
