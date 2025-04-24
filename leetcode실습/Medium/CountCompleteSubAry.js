/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  const totalDistinct = new Set(nums).size;
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    const seen = new Set();
    for (let idx = index; idx < nums.length; idx++) {
      seen.add(nums[idx]);
      if (seen.size === totalDistinct) count++;
    }
  }

  return count;
};

console.log(countCompleteSubarrays([1,3,1,2,2]))
console.log(countCompleteSubarrays([1,3,1,2,2]) === 4)
console.log(countCompleteSubarrays([5,5,5,5]))
console.log(countCompleteSubarrays([5,5,5,5]) === 10)
