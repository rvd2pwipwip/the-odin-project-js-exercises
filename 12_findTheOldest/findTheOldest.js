const findTheOldest = function (people) {
  // calculate the age of each person
  let ages = people.map(
    (p) =>
      (p.yearOfDeath ? p.yearOfDeath : new Date().getFullYear()) - p.yearOfBirth
  );
  // get the index of the largest age
  let i = ages.indexOf(Math.max(...ages));
  // return the person object at the index of the largest age
  return people[i];
};

// course solution:

// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//     return oldestAge < currentAge ? currentPerson : oldest;
//   })
// };

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
