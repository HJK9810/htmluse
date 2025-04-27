/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
  let result = 0;

  for (let index = 0; index < nums.length - 2; index++) {
    // if (nums[index + 1] % 2 === 0 && nums[index] + nums[index + 2] === nums[index + 1] / 2) result++;
    result += nums[index + 1] % 2 === 0 && nums[index] + nums[index + 2] === nums[index + 1] / 2
  }

  return result;
};

console.log(countSubarrays([1,2,1,4,1]));
console.log(countSubarrays([1,2,1,4,1]) === 1);
console.log(countSubarrays([1,1,1]));
console.log(countSubarrays([1,1,1]) === 0);
