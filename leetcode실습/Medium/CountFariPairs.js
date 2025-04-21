/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const left = lowerBound(nums, lower - nums[i], i + 1);
    const right = upperBound(nums, upper - nums[i], i + 1);

    result += right - left;
  }

  return result;
};

const lowerBound = (nums, target, start) => {
  let left = start;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    nums[mid] < target ? left = mid + 1 : right = mid;
  }

  return left;
}

const upperBound = (nums, target, start) => {
  let left = start;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    nums[mid] <= target ? left = mid + 1 : right = mid;
  }

  return left;
}

console.log(countFairPairs([0,1,7,4,4,5], 3, 6))
console.log(countFairPairs([0,1,7,4,4,5], 3, 6) === 6)
console.log(countFairPairs([1,7,9,2,5], 11, 11))
console.log(countFairPairs([1,7,9,2,5], 11, 11) === 1)
