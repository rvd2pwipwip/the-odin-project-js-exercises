const removeFromArray = function (array, ...args) {
  // elements of array pass the filter if they are not included in args
  return array.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
