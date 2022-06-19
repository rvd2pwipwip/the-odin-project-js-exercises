const sumAll = function (int1, int2) {
  // check that both arguments are positive integers
  if (typeof int1 === 'number' && typeof int2 === 'number' && int1 > 0 && int2 > 0) {
    let sum = 0;
    // always start from smaller
    let start = 0;
    let end = 0;
    if (int1 < int2) {
      start = int1;
      end = int2;
    } else {
      start = int2;
      end = int1;
    }
    // start from smaller and sum every number until larger
    for (let i = start; i <= end; i++) {
      sum+= i;
    }
    return sum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
