/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  // const solo = answers.filter(el => el === 0).length;
  // const doubleMembers = answers.filter(el => el === 1).length
  // const doulbe = doubleMembers % 2 === 0 ? doubleMembers / 2 : Math.ceil(doubleMembers / 2);

  const counts = {};
  let result = 0;

  answers.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  for (const key in counts) {
    const value = counts[key];
    const keyValue = key * 1 + 1;

    if (key === 0) {
      result += value;
      continue;
    }

    result += (value % keyValue === 0 ? value : value + keyValue - value % keyValue);
  }

  return result;
};

console.log(numRabbits([1,1,2]));
console.log(numRabbits([1,1,2]) === 5);
console.log(numRabbits([10,10,10]));
console.log(numRabbits([10,10,10]) === 11);
