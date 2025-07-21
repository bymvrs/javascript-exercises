const getAge = function (person){
    const currentYear = new Date().getFullYear();
    person.yearOfDeath ??= currentYear;
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
  const sortedByAge = people.toSorted((a, b) => getAge(b) - getAge(a));
  const oldestPerson = sortedByAge[0];
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
