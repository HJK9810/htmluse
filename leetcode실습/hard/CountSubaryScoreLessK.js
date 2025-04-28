/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  let result = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum * (right - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }

    result += (right - left + 1);
  }

  return result;
};

console.log(countSubarrays([2,1,4,3,5], 10));
console.log(countSubarrays([2,1,4,3,5], 10) === 6);
console.log(countSubarrays([1,1,1], 5));
console.log(countSubarrays([1,1,1], 5) === 5);
