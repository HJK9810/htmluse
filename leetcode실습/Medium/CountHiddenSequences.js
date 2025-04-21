/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let sum = 0;
  let minSum = 0;
  let maxSum = 0;

  for (let diff of differences) {
    sum += diff;
    minSum = Math.min(minSum, sum);
    maxSum = Math.max(maxSum, sum);
  }

  const minStart = lower - minSum;
  const maxStart = upper - maxSum;

  return Math.max(0, maxStart - minStart + 1);
};

console.log(numberOfArrays([1,-3,4], 1, 6))
console.log(numberOfArrays([1,-3,4], 1, 6) === 2)
console.log(numberOfArrays([3,-4,5,1,-2], -4, 5))
console.log(numberOfArrays([3,-4,5,1,-2], -4, 5) === 4)
console.log(numberOfArrays([4,-7,2], 3, 6))
console.log(numberOfArrays([4,-7,2], 3, 6) === 0)
