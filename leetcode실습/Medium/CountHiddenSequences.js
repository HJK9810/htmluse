/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let result = 0;

  for (let start = lower; start <= upper; start++) {
    let seq = start;
    let isPassed = true;

    for (let idx = 0; idx < differences.length; idx++) {
      seq += differences[idx];
      if (seq < lower || seq > upper) {
        isPassed = false;
        break;
      }
    }

    if (!isPassed) continue;
    if (seq >= lower && seq <= upper) result++;
  }

  return result;
};

console.log(numberOfArrays([1,-3,4], 1, 6))
console.log(numberOfArrays([1,-3,4], 1, 6) === 2)
console.log(numberOfArrays([3,-4,5,1,-2], -4, 5))
console.log(numberOfArrays([3,-4,5,1,-2], -4, 5) === 4)
console.log(numberOfArrays([4,-7,2], 3, 6))
console.log(numberOfArrays([4,-7,2], 3, 6) === 0)
