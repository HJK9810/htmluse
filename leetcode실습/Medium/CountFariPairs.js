/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  let result = 0;

  for (let idx = nums.length - 1; idx > 0; idx--) {
    const value = nums[idx];
    const min = lower - value;
    const max = upper - value;

    result += nums.filter((num, index) => index < idx && num >= min && num <= max).length;
  }

  return result;
};

console.log(countFairPairs([0,1,7,4,4,5], 3, 6))
console.log(countFairPairs([0,1,7,4,4,5], 3, 6) === 6)
console.log(countFairPairs([1,7,9,2,5], 11, 11))
console.log(countFairPairs([1,7,9,2,5], 11, 11) === 1)
