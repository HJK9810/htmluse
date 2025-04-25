/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  let prefix = 0;
  let map = { 0: 1 };
  let result = 0;

  for (const num of nums) {
    if (num % modulo === k) prefix++;

    prefix %= modulo;
    let need = (prefix - k + modulo) % modulo;

    result += map[need] || 0;
    map[prefix] = (map[prefix] || 0) + 1;
  }

  return result;
};

console.log(countInterestingSubarrays([3,2,4], 2, 1))
console.log(countInterestingSubarrays([3,2,4], 2, 1) === 3)
console.log(countInterestingSubarrays([3,1,9,6], 3, 0))
console.log(countInterestingSubarrays([3,1,9,6], 3, 0) === 2)