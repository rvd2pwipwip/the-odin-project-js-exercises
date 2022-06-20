const palindromes = function (string) {
  // create an array of lower case characters from the string argument
  // and filter any non alphabetical character
  const alpha = [...string.toLowerCase()].filter((char) =>
    /[a-zA-Z]/.test(char)
  );
  // copy and reverse the array of characters
  const reverse = alpha.slice().reverse();

  // compare both arrays
  // const equals = (a, b) => a.every((v, i) => v === b[i]);
  // return equals(alpha, reverse);

  return alpha.every((char, i) => char === reverse[i]);
};

// Do not edit below this line
module.exports = palindromes;
