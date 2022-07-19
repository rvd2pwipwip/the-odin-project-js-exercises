const caesar = function (str, shift) {
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let coded = str.split('');

  for (let i = 0; i < coded.length; i++) {
    if (UPPER.split('').includes(coded[i])) {
      coded[i] = UPPER.split('').indexOf(coded[i] + shift);
    }
  }

  return coded;

  //check each char to be an alpha char
  // return str.split('').filter((c) => /[a-zA-Z]/.test(c));
};

// Do not edit below this line
module.exports = caesar;

//.split('')