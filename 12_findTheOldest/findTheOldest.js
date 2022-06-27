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

// Do not edit below this line
module.exports = findTheOldest;
