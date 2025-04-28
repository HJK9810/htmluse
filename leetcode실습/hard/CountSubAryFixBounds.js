/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let result = 0;
  let left = -1, lastMin = -1, lastMax = -1;

  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] < minK || nums[idx] > maxK) {
      left = idx;
    }
    if (nums[idx] === minK) lastMin = idx;
    if (nums[idx] === maxK) lastMax = idx;

    const validStart = Math.min(lastMin, lastMax);
    if (validStart > left) {
      result += validStart - left;
    }
  }

  return result;
};

console.log(countSubarrays([1,3,5,2,7,5], 1, 5))
console.log(countSubarrays([1,3,5,2,7,5], 1, 5) === 2)
console.log(countSubarrays([1,1,1,1], 1, 1))
console.log(countSubarrays([1,1,1,1], 1, 1) === 10)
