/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let count = 0;

  for (let left = 0; left < nums.length; left++) {
    for (let right = nums.length; right > left; right--) {
      let check = true;
      let hasMin = false, hasMax = false;

      for (let idx = left; idx <= right; idx++) {
        if (nums[idx] < minK || nums[idx] > maxK) {
          check = false;
          break;
        }
        if (nums[idx] === minK) hasMin = true;
        if (nums[idx] === maxK) hasMax = true;
      }
      if (check && hasMin && hasMax) count++;
    }
  }

  return count;
};

console.log(countSubarrays([1,3,5,2,7,5], 1, 5))
console.log(countSubarrays([1,3,5,2,7,5], 1, 5) === 2)
console.log(countSubarrays([1,1,1,1], 1, 1))
console.log(countSubarrays([1,1,1,1], 1, 1) === 10)
