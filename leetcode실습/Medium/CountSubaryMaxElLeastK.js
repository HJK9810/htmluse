/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  const max = Math.max(...nums);
  let left = 0;
  let maxCount = 0;
  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) maxCount++;

    while (maxCount > k - 1) {
      if (nums[left] === max) maxCount--;
      left++;
    }

    result += right - left + 1;
  }

  return (nums.length * (nums.length + 1)) / 2 - result;
};

console.log(countSubarrays([1,3,2,3,3], 2))
console.log(countSubarrays([1,3,2,3,3], 2) === 6)
console.log(countSubarrays([1,4,2,1], 3))
console.log(countSubarrays([1,4,2,1], 3) === 0)
