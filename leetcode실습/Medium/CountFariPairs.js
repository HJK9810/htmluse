/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    const left = checkBound(nums, lower - nums[idx], idx + 1);
    const right = checkBound(nums, upper - nums[idx], idx + 1, false);

    result += right - left;
  }

  return result;
};

const checkBound = (nums, target, start, isUnder = true) => {
  let left = start;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isUnder) {
      nums[mid] < target ? left = mid + 1 : right = mid;
    } else {
      nums[mid] <= target ? left = mid + 1 : right = mid;
    }

  }

  return left;
}

console.log(countFairPairs([0,1,7,4,4,5], 3, 6))
console.log(countFairPairs([0,1,7,4,4,5], 3, 6) === 6)
console.log(countFairPairs([1,7,9,2,5], 11, 11))
console.log(countFairPairs([1,7,9,2,5], 11, 11) === 1)
